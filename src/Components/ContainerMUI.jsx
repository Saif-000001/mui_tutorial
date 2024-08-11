import React from 'react'
import { Container, Typography } from '@mui/material'

function ContainerMUI() {
  return (
    <>
      <Container sx={{background: "yellow"}} maxWidth = "xs">
        <Typography variant='body2'>This is For XS</Typography>
      </Container>
      <br />
      <Container sx={{background: "yellow"}} maxWidth = "sm">
        <Typography variant='body2'>This is For small</Typography>
      </Container>
      <br />
      <Container sx={{background: "yellow"}} maxWidth = "md">
        <Typography variant='body2'>This is For medium</Typography>
      </Container>
      <br />
      <Container sx={{background: "yellow"}} maxWidth = "ls">
        <Typography variant='body2'>This is For large</Typography>
      </Container>
      <br />
      <Container sx={{background: "yellow"}} maxWidth = "xl">
        <Typography variant='body2'>This is For extra large</Typography>
      </Container>

    </>
  )
}

export default ContainerMUI
