import React, {useEffect, useState} from 'react'
import Grid from './Grid';
import { useSelector, useDispatch } from 'react-redux';
import { getCharacters } from '../store/slices/characters/thunks';
import Button from '@mui/material/Button'; 

const baseUrl = "https://rickandmortyapi.com/api/character"

const Characters = () => {
  const dispatch = useDispatch();
  const {characters = [], page} = useSelector( state => state.characters );

  useEffect(() => {
    dispatch( getCharacters() ); // Estoy disparando el thunk
  }, [])

  return (
    <div className='App'>
      <Grid characters = {characters}/>

      <Button
        onClick={() => dispatch (getCharacters(page - 2))}
        variant="contained"
      >
        Previous page
      </Button>

      <Button
        onClick={() => dispatch (getCharacters(page))}
        variant="contained"
      >
        Next page
      </Button>
    </div>
  )
}

export default Characters

/* <button
        onClick= {() => dispatch (getCharacters(page))}>
          Next
      </button> */