import Footer from "../komponen_umum/Footer";

import * as React from 'react';
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Input from "@material-ui/core/Input";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';

// Import untuk checkbox
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';

import Button from '@mui/material/Button';
import EditIcon from "@material-ui/icons/EditOutlined";
import DoneIcon from "@material-ui/icons/DoneAllTwoTone";
import RevertIcon from "@material-ui/icons/NotInterestedOutlined";
import { TableContainer } from "@material-ui/core";
import {useContext, useEffect, useState} from "react";
import {AuthContext} from "../komponen_umum/AuthContext";
import {useNavigate} from "react-router-dom";

// Susunan data yg dipakai ada di bawah ini
// Untuk contoh data dapat dilihat di line 74
// Untuk kirim email dapat dilihat pada line 270
// Semangat

  const createData = (ID, nama, sekolah, jurusan, kontak, bukti_transfer, verified, uuid) => ({
    id: ID,
    ID, nama, sekolah, jurusan, kontak, bukti_transfer, verified, uuid,
    isEditMode: false
  });
  
const CustomTableCell = ({ row, name, onChange }) => {
    const { isEditMode } = row;
    return (
      <TableCell align="left">
        {isEditMode ? (
          <Input
            value={row[name]}
            name={name}
            onChange={e => onChange(e, row)}
          />
        ) : (
          row[name]
        )}
      </TableCell>
    );
  };

  const theme = createTheme({
    typography: {
        fontFamily: 'Ramaraja',
        fontSize: 16
    },
    palette: {
        background: {
            default: "#F2EBCE"
        },
        primary: {
            main: "#A7B560"
        }
    },
});

const Tabel = () => {
    const Auth = useContext(AuthContext)
    const navigate = useNavigate()
    if (Auth.role!=="admin"){
      navigate('/', {replace: true})
    }

    useEffect(async () => {
        if (Auth.role!=="admin"){
          navigate('/', {replace: true})
        }

        // Update the document title using the browser API
        let response = await fetch('/api/registration/search',{
        method: 'GET',
        mode: 'same-origin',
        credentials: "same-origin",
        headers: {
          'Content-Type': 'application/json'
        }
        })
        response = await response.json()
        console.log(response)
        setRows(response.map((item)=>{
            const verif = item.verified ? 'YES' : 'NO'
            console.log(item.user_id)
            return createData(item.id, item.nama, item.sekolah, item.rumpun, item.nohp, item.fileURL, verif, item.user_id)
        }))
    }, []);

    // Sampel Data, dapat diubah disesuaikan dengan API atau apalah itu
    const [rows, setRows] = React.useState([]);


      const [previous, setPrevious] = React.useState({});
      
      const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
      const onToggleEditMode = id => {
        setRows(state => {
          return rows.map(row => {
            if (row.id === id) {
              return { ...row, isEditMode: !row.isEditMode };
            }
            return row;
          });
        });
      };
    
      const onChange = (e, row) => {
        if (!previous[row.id]) {
          setPrevious(state => ({ ...state, [row.id]: row }));
        }
        const value = e.target.value;
        const name = e.target.name;
        const { id } = row;
        const newRows = rows.map(row => {
          if (row.id === id) {
            return { ...row, [name]: value };
          }
          return row;
        });
        setRows(newRows);
      };
    
      const onRevert = id => {
        const newRows = rows.map(row => {
          if (row.id === id) {
            return previous[id] ? previous[id] : row;
          }
          return row;
        });
        setRows(newRows);
        setPrevious(state => {
          delete state[id];
          return state;
        });
        onToggleEditMode(id);
      };

      const onClickButton = (id) => {
        setRows(state => {
            return rows.map(row => {
                if(row.id === id) {
                    if(row.verified == "NO") {
                        fetch('/api/registration/verif/'+row.id, {
                          method: 'PUT',
                          mode: 'same-origin',
                          credentials: "same-origin",
                          headers: {
                            'Content-Type': 'application/json'
                          }
                        }).then(res => {
                          console.log(res.status)
                          if(res.status===200){
                            // return { ...row, verified: "YES" };
                            window.location.reload()
                          }
                        })
                    } else if (row.verified == "YES") {
                      fetch('/api/registration/verif/'+row.id, {
                        method: 'PUT',
                        mode: 'same-origin',
                        credentials: "same-origin",
                        headers: {
                          'Content-Type': 'application/json'
                        }
                      }).then(res => {
                        console.log(res.status)
                        if(res.status===200){
                          // return { ...row, verified: "NO" };
                          window.location.reload()
                        }
                      })
                    }
                }
              return row;
            });
        });
      }

  const onClickEmail = (id) => {
    setRows(state => {
      return rows.map(row => {
        if(row.id === id) {
          fetch('/api/registration/verifmail/'+row.id, {
            method: 'PoST',
            mode: 'same-origin',
            credentials: "same-origin",
            headers: {
              'Content-Type': 'application/json'
            }
          }).then(res => {
            console.log(res.status)
            if(res.status===200){
              alert('Sukses kirim email')
            } else{
              alert('Gagal kirim email')
            }
          })
        }
        return row;
      });
    });
  }
  const [radValue, setRadValue] = useState("Saintek")
      const handleRadChange = (e)=>{
        setRadValue(e.target.value);
      }
      const submitRad = async (e) => {
        e.preventDefault()
        let mode = ""
        if(radValue==="Saintek"||radValue==="Soshum"){
          mode = "jurusan"
        } else{
          mode = "verif"
        }
        let response = await fetch('/api/registration/search?'+mode+"="+radValue,{
          method: 'GET',
          mode: 'same-origin',
          credentials: "same-origin",
          headers: {
            'Content-Type': 'application/json'
          }
        })
        if(response.status===404){
          alert("Not Found")
        }
        response = await response.json()
        console.log(response)
        setRows(response.map((item)=>{
          const verif = item.verified ? 'YES' : 'NO'
          return createData(item.id, item.nama, item.sekolah, item.jurusan, item.kontak, item.fileURL, verif, item.user_id)
        }))
      }

      const [nama, setNama]=useState("")
      const handleNamaChange = (e)=>{
        setNama(e.target.value);
      }
      const submitNama = async (e) => {
        e.preventDefault()
        let response = await fetch('/api/registration/search?nama='+nama,{
          method: 'GET',
          mode: 'same-origin',
          credentials: "same-origin",
          headers: {
            'Content-Type': 'application/json'
          }
        })
        if(response.status===404){
          alert("Not Found")
        }
        response = await response.json()
        console.log(response)
        setRows(response.map((item)=>{
          const verif = item.verified ? 'YES' : 'NO'
          return createData(item.id, item.nama, item.sekolah, item.jurusan, item.kontak, item.fileURL, verif, item.user_id)
        }))
      }
    
      return (
        <div>
            <ThemeProvider theme={theme} >
            <Paper>
                <div style={{marginLeft:'3vw', marginTop:'0'}}>
                <FormControl component="fieldset">
                    <FormLabel component="legend">Filter</FormLabel>
                    <RadioGroup aria-label="position" value={radValue} onChange={handleRadChange} row>
                        <FormControlLabel
                        value="Saintek"
                        control={<Radio />}
                        label="Saintek"
                        labelPlacement="end"
                        />
                        <FormControlLabel
                        value="Soshum"
                        control={<Radio />}
                        label="Soshum"
                        labelPlacement="end"
                        />
                        <FormControlLabel
                        value="true"
                        control={<Radio />}
                        label="Terverifikasi"
                        labelPlacement="end"
                        />
                        <FormControlLabel
                        value="false"
                        control={<Radio />}
                        label="Belum Terverifikasi"
                        labelPlacement="end"
                        />
                        <Button variant="outlined" onClick={submitRad}>Apply</Button>
                    </RadioGroup>
                    <FormGroup aria-label="position" row style={{marginTop:'1em'}}>
                        <TextField style={{marginRight:'2em'}} id="outlined-basic" label="Masukkan yang ingin dicari" variant="outlined" value={nama} onChange={handleNamaChange}/>
                        <Button variant="outlined" onClick={submitNama}>Cari</Button>
                    </FormGroup>
                    
                </FormControl>
                </div>
                <TableContainer>
                    <Table aria-label="caption table">
                        <caption>Daftar peserta KPGTS 2022</caption>
                        <TableHead>
                        <TableRow>
                            <TableCell align="left" />
                            <TableCell align="left">Nomer Peserta</TableCell>
                            <TableCell align="left">NAMA</TableCell>
                            <TableCell align="left">SEKOLAH</TableCell>
                            <TableCell align="left">JURUSAN</TableCell>
                            <TableCell align="left">KONTAK</TableCell>
                            <TableCell align="left">BUKTI</TableCell>
                            <TableCell align="left">Verified</TableCell>
                            <TableCell align="left"></TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {rows.map(row => (
                            <TableRow key={row.id}>
                            <TableCell>
                                {row.isEditMode ? (
                                <>
                                    <IconButton
                                    aria-label="done"
                                    onClick={() => onToggleEditMode(row.id)}
                                    disabled
                                    >
                                    <DoneIcon />
                                    </IconButton>
                                    <IconButton
                                    aria-label="revert"
                                    onClick={() => onRevert(row.id)}
                                    disabled
                                    >
                                    <RevertIcon />
                                    </IconButton>
                                </>
                                ) : (
                                <IconButton
                                    aria-label="delete"
                                    onClick={() => onToggleEditMode(row.id)}
                                    disabled
                                >
                                    <EditIcon />
                                </IconButton>
                                )}
                            </TableCell>
                            <CustomTableCell {...{ row, name: "id", onChange }} />
                            <CustomTableCell {...{ row, name: "nama", onChange }} />
                            <CustomTableCell {...{ row, name: "sekolah", onChange }} />
                            <CustomTableCell {...{ row, name: "jurusan", onChange }} />
                            <CustomTableCell {...{ row, name: "kontak", onChange }} />
                            {/*<CustomTableCell {...{ row, name: "bukti_transfer", onChange }} />*/}
                            <TableCell component={"a"} href={row.bukti_transfer}>Link</TableCell>
                            <CustomTableCell {...{ row, name: "verified", onChange }} />
                            <Box
                                component="div"
                                sx={{
                                display: 'inline',
                                p: 1,
                                m: 1,
                                bgcolor: 'background.paper',
                                }}
                            >
                                <Button style={{marginTop:'1em',marginLeft:'0.75em'}} variant="outlined" onClick={() => onClickButton(row.id)}>Change</Button> 
                            </Box>
                            <Box
                                component="div"
                                sx={{
                                display: 'inline',
                                p: 1,
                                m: 1,
                                bgcolor: 'background.paper',
                                }}
                            >

                                {/* Ini diubah, disesuaikan dengan kebutuhan, ini untuk kirim email */}
                                
                                <Button disabled={row.verified == "NO"} style={{marginTop:'0.5em',marginLeft:'0.75em', marginBottom:'1em'}} variant="outlined" >Kirim Email</Button>
                            
                            </Box>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
            </ThemeProvider>
        </div>
      );
}

export default Tabel;

