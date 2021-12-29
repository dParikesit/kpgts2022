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
import {useEffect} from "react";

// Susunan data yg dipakai ada di bawah ini
// Untuk contoh data dapat dilihat di line 74
// Untuk kirim email dapat dilihat pada line 270
// Semangat

  const createData = (ID, nama, sekolah, jurusan, kontak, bukti_transfer, verified) => ({
    id: ID,
    ID, nama, sekolah, jurusan, kontak, bukti_transfer, verified,
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
    useEffect(async () => {
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
            return createData(item.ID, item.nama, item.sekolah, item.jurusan, item.kontak, item.fileURL, verif)
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
                        fetch('/api/registration/verif')
                        return { ...row, verified: "YES" };
                    } else if (row.verified == "YES") {
                        return { ...row, verified: "NO" };
                    }
                }
              return row;
            });
        });
      }

      const onClickNewData = () => {

      }
    
      return (
        <div>
            <ThemeProvider theme={theme} >
            <Paper>
                <div style={{marginLeft:'3vw', marginTop:'0'}}>
                <FormControl component="fieldset">
                    <FormLabel component="legend">Filter</FormLabel>
                    <FormGroup aria-label="position" row>
                        <FormControlLabel
                        value="ipa"
                        control={<Checkbox />}
                        label="IPA"
                        labelPlacement="end"
                        />
                        <FormControlLabel
                        value="ips"
                        control={<Checkbox />}
                        label="IPS"
                        labelPlacement="end"
                        />
                        <FormControlLabel
                        value="yes"
                        control={<Checkbox />}
                        label="Terverifikasi"
                        labelPlacement="end"
                        />
                        <FormControlLabel
                        value="no"
                        control={<Checkbox />}
                        label="Belum Terverifikasi"
                        labelPlacement="end"
                        />
                        <Button variant="outlined">Apply</Button> 
                    </FormGroup>
                    <FormGroup aria-label="position" row style={{marginTop:'1em'}}>
                        <TextField style={{marginRight:'2em'}} id="outlined-basic" label="Masukkan yang ingin dicari" variant="outlined" />
                        <Button variant="outlined">Cari</Button> 
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
                                    >
                                    <DoneIcon />
                                    </IconButton>
                                    <IconButton
                                    aria-label="revert"
                                    onClick={() => onRevert(row.id)}
                                    >
                                    <RevertIcon />
                                    </IconButton>
                                </>
                                ) : (
                                <IconButton
                                    aria-label="delete"
                                    onClick={() => onToggleEditMode(row.id)}
                                >
                                    <EditIcon />
                                </IconButton>
                                )}
                            </TableCell>
                            <CustomTableCell {...{ row, name: "ID", onChange }} />
                            <CustomTableCell {...{ row, name: "nama", onChange }} />
                            <CustomTableCell {...{ row, name: "sekolah", onChange }} />
                            <CustomTableCell {...{ row, name: "jurusan", onChange }} />
                            <CustomTableCell {...{ row, name: "kontak", onChange }} />
                            <CustomTableCell {...{ row, name: "bukti_transfer", onChange }} />
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

