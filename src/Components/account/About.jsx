import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import { Grid } from '@mui/material';
import Perfil from '../images/Germán.jpg'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

export default function About() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed sx={{ padding: 10 }}>
        <Grid container>
          <Grid item xs={12}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                image={Perfil}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="div">
                  Germán Marcelo Furfori
                </Typography>
                <Typography>
                  Gender: Male
                </Typography>
                <Typography>
                  Status: Alive
                </Typography>
                <Typography>
                  Species: Human
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}