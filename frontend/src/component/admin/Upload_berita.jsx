import { createTheme, ThemeProvider } from '@mui/material/styles'
import MUIRichTextEditor from 'mui-rte'
import { convertToRaw } from 'draft-js'
import React, { useState } from 'react'

const myTheme = createTheme({
    // Set up your custom MUI theme here
})


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
               /*      value={value}
                    onChange={onEditorChange} */
                />
            </ThemeProvider>

        </div>
    )
}

export default Upload_Berita;