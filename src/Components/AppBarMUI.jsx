import React, {useState} from 'react'
import { AppBar, Tab, Tabs, Toolbar, Typography } from '@mui/material'
import CardMUI from './CardMUI'


function AppBarMUI() {
    const [value, setValue] = useState(0)
  return (
   <>
    <AppBar>
        <Toolbar>
            <Typography variant='h5'>LOGO</Typography>
            <Tabs 
            sx={{ml: "auto"}} 
            value={value} 
            textColor='inherit' 
            indicatorColor='secondary' 
            onChange={(_,val)=>setValue(val)}
            >
                <Tab label = "Home" />
                <Tab label = "About" />
                <Tab label = "Contact" />
            </Tabs>
        </Toolbar>
    </AppBar>
    <div style={{marginTop: 100}}>
        <CardMUI />
    </div>
   </>
  )
}

export default AppBarMUI
