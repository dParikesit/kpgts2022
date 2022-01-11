import { createTheme, ThemeProvider } from '@mui/material/styles'
import MUIRichTextEditor from 'mui-rte'
import React, {useContext, useEffect, useState} from 'react'
import FormGroup from '@mui/material/FormGroup';
import Button from '@mui/material/Button';
import { convertToRaw, convertFromRaw, EditorState, Editor } from 'draft-js';
import {AuthContext} from "../komponen_umum/AuthContext";
import {useNavigate} from "react-router-dom";

const myTheme = createTheme({
    // Set up your custom MUI theme here
})

const Upload_Berita = () => {
    const handleSubmit = async(event) => {
        event.preventDefault();
        const formdata = new FormData();
        formdata.append('image', selectedFile)
        const response = await fetch('/api/post/pict', {
            method: 'POST',
            mode: 'same-origin',
            credentials: "same-origin",
            body: formdata
        })
        if(response.status===200){
            setFileName(await response.json())
        }
      };

    const save = async (data) => {
        let content = JSON.parse(data)

        const title = content.blocks[0].text
        content.blocks.shift()

        let response = await fetch('/api/post/add', {
            method: 'POST',
            mode: 'same-origin',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: JSON.stringify(title),
                content: JSON.stringify(content),
                picturePath: fileName
            })
        })
        if(response.status===200){
            response = await response.json()
            await alert(response.title + " berhasil ditambahkan")
        } else{
            await alert(response.json())
        }
    }
    
    const [selectedFile, setSelectedFile] = useState(null);
    const [fileName, setFileName] = useState("")

    return(
        <div>
            <FormGroup aria-label="position" row style={{marginTop:'1em'}}>
                <input
                style={{marginRight:'2vw', marginTop:'1vw', fontFamily:'Ramaraja'}}
                type="file"
                onChange={(e) => {
                    setSelectedFile(e.target.files[0])
                }}
                />
                <Button style={{marginRight:'2vw'}} type="submit" variant="outlined" onClick={handleSubmit}>Convert ke URL</Button>
                <p>{fileName}</p>
            </FormGroup>
            <ThemeProvider theme={myTheme}>
                <MUIRichTextEditor 
                    label="Start typing..."
                    onSave={save}
                />
            </ThemeProvider>
        </div>
    )
}

export default Upload_Berita;