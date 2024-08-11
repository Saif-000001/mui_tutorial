import React from 'react'
import { Accordion, AccordionDetails, AccordionSummary, Autocomplete, TextField, Typography } from "@mui/material"

function AccordMUI() {
    const courses = ["react", "nodJs", "mern", "nextJS", "UI"]
  return (
    <>
    <Accordion sx={{m: 5}}>
        <AccordionSummary expandIcon = {">"}>
            <Typography variant='h5'>What is mern Stack?</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, porro.
            </Typography>
        </AccordionDetails>
    </Accordion>
    <Autocomplete 
    sx={{width: 300, m: 5}}
    options={courses}
    renderInput={(props)=>(
        <TextField {...props} label = "Select a course" />
    )}/>
      
    </>
  )
}

export default AccordMUI
