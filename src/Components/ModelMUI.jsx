import { Box, Button, Link, Modal, Typography } from '@mui/material'
import React, {useState} from 'react'


function ModelMUI() {
    const [open, setOpen] = useState(false)
  return (
    <>
    <Button onClick={() => setOpen(true)}>Open Model</Button>
    <Modal open = {open} onClose={() => setOpen(false)}>
        <Box position={'absolute'} top={"50%"} left={"50%"}>
            <Typography>This is model</Typography>
            <Button variant='contained' onClick={() => setOpen(false)}>Cancel</Button>
        </Box>
    </Modal>
    <Link
    variant='h5'
    color="secondary"
    href = "https://www.youtube.com/watch?v=0euw01oikEw&t=5438s" 
    underline='hover'>
    Nav Link
    </Link>
    </>
  )
}

export default ModelMUI
