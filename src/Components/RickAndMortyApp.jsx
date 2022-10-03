import React, {useEffect } from 'react'
import Grid from './Grid';
import { useSelector, useDispatch } from 'react-redux';
import { getCharacters } from '../store/slices/characters/thunks';
import { Pagination, Container } from '@mui/material';

const RickAndMortyApp = () => {
  const dispatch = useDispatch();
  const {characters = []} = useSelector( state => state.characters );

  const handleChangePage = (event, value) => {
    event.preventDefault();
    dispatch(getCharacters(value));
  }

  useEffect(() => {
    dispatch( getCharacters() );
  }, [dispatch])

  return (
    <div className='App'>
      <Container fixed 
        sx={{ 
          paddingBottom: 7,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
         }}>
    
          <Grid characters = {characters}/>

          <Pagination
            sx={{
              marginTop: '2rem',
            }}
            count={42}
            defaultPage={1}
            onChange={handleChangePage}
            color="primary" />
            
      </Container>
    </div>
  )
}

export default RickAndMortyApp