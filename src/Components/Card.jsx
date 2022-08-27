import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export default function MediaCard(props) {

  return (
    <Button>
      <Link to={'/characters'} style={{ textDecoration: 'none' }}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            image={props.image}
          />
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography gutterBottom variant="h5" component="div">
              {props.name}
            </Typography>
            <Typography>
                Gender: {props.gender}
              </Typography>
              <Typography>
                Status: {props.status}
              </Typography>
              <Typography>
                Species: {props.species}
              </Typography>
          </CardContent>
        </Card>
      </Link>
    </Button>
  );
}