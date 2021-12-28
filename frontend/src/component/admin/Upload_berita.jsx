import { createTheme, ThemeProvider } from '@mui/material/styles'
import MUIRichTextEditor from 'mui-rte'
import React, { useState } from 'react'
import FormGroup from '@mui/material/FormGroup';
import Button from '@mui/material/Button';
import { convertToRaw, convertFromRaw, EditorState, Editor } from 'draft-js';

const myTheme = createTheme({
    // Set up your custom MUI theme here
})

const save = (data) => {
    console.log(data)
}

const change = (state) => {
    // More info about EditorState object at
    // https://draftjs.org/docs/api-reference-editor-state
    //
    // Get current selection
    console.log(state.getSelection())
    // Get current content
    console.log(JSON.stringify(convertToRaw(state.getCurrentContent())))
    // Get current text
    console.log(state.getCurrentContent().getPlainText())
    // Check if editor is empty
    if (!state.getCurrentContent().hasText()) {
        console.log("empty")
    }
}

const Upload_Berita = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        // eslint-disable-next-line no-console
      };
    
    const [selectedFile, setSelectedFile] = useState(null);

    const submitForm = () => {};

    return(
        <div>
            <FormGroup aria-label="position" row style={{marginTop:'1em'}}>
                <input
                style={{marginRight:'2vw', marginTop:'1vw', fontFamily:'Ramaraja'}}
                type="file"
                value={selectedFile}
                onChange={(e) => setSelectedFile(e.target.files[0])}
                />
                <Button style={{marginRight:'2vw'}} type="submit" variant="outlined">Convert ke URL</Button> 
                <p>state</p>
            </FormGroup>
            <ThemeProvider theme={myTheme}>
                <MUIRichTextEditor 
                    label="Start typing..."
                    onSave={save}
                    onChange={change}
                />
            </ThemeProvider>
        </div>
    )
}

export default Upload_Berita;