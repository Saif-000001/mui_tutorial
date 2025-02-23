import React, { useState } from 'react'
import AddReactionIcon from '@mui/icons-material/AddReaction';
import { Alert, Button,  CircularProgress,  Drawer,  IconButton,  LinearProgress,  List, ListItemButton, ListItemText, Rating, Snackbar, Typography } from "@mui/material"


function DrowerMenuMUI() {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState()
    const Courses = ["ReactJS", "NodeJs", "Mongodb", "Mern", "MUI"]
  return (
    <>
      <Button variant='contained' onClick={()=>setOpen(true)}>Open</Button>
      <Drawer open = {open} onClose = {() => setOpen(false)}>
        <List>
            {
                Courses.map((course) => (
                    <ListItemButton onClick={() => setOpen(false)}>
                        <ListItemText primary = {course} />
                    </ListItemButton>
                ))
            }
        </List>

      </Drawer>
      <br />
      <Snackbar open = {true} autoHideDuration={2000}>
        <Alert severity='success' >This Alert in Snackbar</Alert>
      </Snackbar>
      <br />
     <CircularProgress color='secondary' value={75} />
     <br />
     <LinearProgress />
     <br />
     <Rating 
     value={value}
     onChange={(_, val)=> setValue(val)}
     size='lg'
     precision= {0.5}/>
     <Typography>Rated {value !== undefined ? value:0 } stars </Typography>
     <br />
     <IconButton onClick={() => alert("Icon BTN")}>
        <AddReactionIcon color='secondary'/>
     </IconButton>
    </>

  )
}

export default DrowerMenuMUI
