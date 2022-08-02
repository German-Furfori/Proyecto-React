import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Grid from './Grid';

const baseUrl = "https://rickandmortyapi.com/api/character"

const Characters = () => {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    axios
      .get(baseUrl)
      .then((response) => {
        console.log(response)
        setCharacters(response.data.results);
      })
  }, [])

  return (
    <div><Grid characters = {characters}/></div>
  )
}

export default Characters