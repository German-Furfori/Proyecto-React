import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export default function MediaCard(props) {

  return (
    <Button>
      <Link to={'/characters'}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            image={props.image}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {props.name}
            </Typography>
          </CardContent>
        </Card>
      </Link>
    </Button>
  );
}