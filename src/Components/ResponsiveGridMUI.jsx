import { Grid } from '@mui/material'
import React from 'react'

function ResponsiveGridMUI() {
  return (
    <>
      <Grid container sx={{m: 5}}>
        <Grid
        item
        xs = {6}
        sm = {6}
        md = {9}
        lg = {3}
        xl = {2}
        sx = {{background: "red"}}
        spacing={2}
        >Content A</Grid>
      <Grid
        item
        xs = {6}
        sm = {6}
        md = {3}
        lg = {9}
        xl = {10}
        sx = {{background: "yellow" }}
        spacing={2}
        >Content B</Grid>
      </Grid>
    </>
  )
}

export default ResponsiveGridMUI
