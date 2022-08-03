import * as React from 'react';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Card from './Card';

export default function RowAndColumnSpacing(props) {
  return (
    <Container fixed sx={{ padding: 12 }}>
      <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          { props.characters.map((character, index) =>
            <Grid item xs={12} sm={4} md={3}>
              <Card
                name = {character.name}
                image = {character.image}
                id = {character.id}
                species = {character.species}
                status = {character.status}
                key = {index}/>
             </Grid>
            )
          }
      </Grid>
    </Container>
  );
}