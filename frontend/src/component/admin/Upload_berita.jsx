import { createTheme, ThemeProvider } from '@mui/material/styles'
import MUIRichTextEditor from 'mui-rte'
import { convertToRaw } from 'draft-js'
import React, { useState } from 'react'

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
/*     const [value, setValue] = React.useState('');

    const onEditorChange = event => {
        const plainText = event.getCurrentContent().getPlainText(); // for plain text
        const rteContent = convertToRaw(event.getCurrentContent()); // for rte content with text formating
        rteContent && setValue(JSON.stringify(rteContent)); // store your rteContent to state
      } */
    return(
        <div>
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