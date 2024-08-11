import React, {useState} from 'react'
import { Button, Card, CardActions, CardContent, CardMedia, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography } from '@mui/material'

function CardMUI() {
    const [open, setOpen] = useState()
  return (
   <>
    <Card sx={{maxWidth:300}}>
        <CardMedia
        component={'img'}
        height= "140"
        image='https://media.istockphoto.com/id/182168474/photo/man-working-on-his-laptop.jpg?s=1024x1024&w=is&k=20&c=fmCjvQbH_w0CYXLMX17P-A2uVBodf0AGm5p_RPM5uYE='
        alt='test image'
        />
        <CardContent>
            <Typography gutterBottom variant='h5' component={'div'}>
                laptop working
            </Typography>
            <Typography variant='body2'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At, corporis.
            </Typography>
        </CardContent>
        <CardActions>
            <Button size='smail' color='primary'>Share</Button>
            <Button size='smail' color='primary' onClick={() => setOpen(true)}>Delete</Button>
        </CardActions>
    </Card>


    {/* Dialog Box For Delete Button*/}
    <Dialog open = {open} onClose={() => setOpen(false)}>
        <DialogTitle>Are you sure
            <DialogContentText>
                Are you sure to delete this product ?
            </DialogContentText>
        </DialogTitle>
        <DialogActions>
            <Button onClick={() => setOpen(false)}>Cancel</Button>
            <Button>Delete</Button>
        </DialogActions>
    </Dialog>
   </>
  )
}

export default CardMUI
