import { TextField } from "@mui/material"

function TextFieldMUI() {
  return (
    <>
    <TextField 
    type="text" 
    placeholder="name" 
    variant="standard" 
    sx={{m: 5}} />

    <TextField 
    type="text" 
    placeholder="name" 
    variant="outlined" 
    sx={{m: 5}} />

    <TextField 
    type="text" 
    placeholder="name" 
    variant="filled" 
    sx={{m: 5}} />
    </>
  )
}

export default TextFieldMUI
