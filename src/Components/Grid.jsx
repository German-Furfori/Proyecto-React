import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from './Card';

export default function RowAndColumnSpacing(props) {
  return (
    <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          { props.characters.map((character, index) => 
            (<Card
              name = {character.name}
              image = {character.image}
              key = {index}/>
            ))
          }
        </Grid>
      </Grid>
    </Box>
  );
}