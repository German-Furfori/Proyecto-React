import { Container, Paper, Typography } from '@mui/material'
import React from 'react'

const Home = () => {
  return (
    <>
      <Container fixed sx={{ padding: 4 }}>
        <Paper>
          <Typography variant="h4">
            Welcome! This is a Rick and Morty characters web page
          </Typography>
          <Typography>
            Go to Characters to see them!
          </Typography>
        </Paper>
      </Container>
    </>
  )
}

export default Home

