import { createTheme, ThemeProvider } from '@mui/material/styles'
import MUIRichTextEditor from 'mui-rte'
import React, { useState } from 'react'

const myTheme = createTheme({
    // Set up your custom MUI theme here
})


const Upload_Berita = () => {
    return(
        <div>
            <ThemeProvider theme={myTheme}>
                <MUIRichTextEditor 
                    label="Start typing..." 
                />
            </ThemeProvider>
        </div>
    )
}

export default Upload_Berita;