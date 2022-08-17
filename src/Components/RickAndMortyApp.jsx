import React, {useEffect } from 'react'
import Grid from './Grid';
import { useSelector, useDispatch } from 'react-redux';
import { getCharacters } from '../store/slices/characters/thunks';
import { Pagination, Container } from '@mui/material';

const RickAndMortyApp = () => {
  const dispatch = useDispatch();
  const {characters = [], page} = useSelector( state => state.characters );

  const handleChangePage = (event, value) => {
    event.preventDefault();
    dispatch(getCharacters(value));
  }

  useEffect(() => {
    dispatch( getCharacters() ); // Estoy disparando el thunk
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
          <Pagination
            sx={{
              marginTop: '2rem',
            }}
            count={42}
            defaultPage={page}
            onChange={handleChangePage}
            color="primary" />

          <Grid characters = {characters}/>

          <Pagination
            sx={{
              marginTop: '2rem',
            }}
            count={42}
            defaultPage={page}
            onChange={handleChangePage}
            color="primary" />
      </Container>
    </div>
  )
}

export default RickAndMortyApp