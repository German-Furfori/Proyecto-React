// Este archivo va a tener todos los thunks que estén relacionados a mis personajes (peticiones http para posteos, traer info, etc)

import { rickAndMortyApi } from "../../../api/rickAndMortyApi";
import { setCharacters, startLoadingCharacters } from "./charactersSlice"

export const getCharacters = ( page = 1 ) => {
    return async (dispatch, getState) => { // Una función que regresa otra función. Se manda a llamar con los argumentos dispatch y setState
        dispatch( startLoadingCharacters() );

        const {data} = await rickAndMortyApi.get(`character/?page=${page}`);
        console.log(data);

        dispatch( setCharacters({ characters: data.results, page: page + 1 }) );
    }
}