// Este archivo va a tener todos los thunks que estén relacionados a mis personajes (peticiones http para posteos, traer info, etc)

import { setCharacters, startLoadingCharacters } from "./charactersSlice"

export const getCharacters = ( page = 0 ) => {
    return async (dispatch, getState) => { // Una función que regresa otra función. Se manda a llamar con los argumentos dispatch y setState
        dispatch( startLoadingCharacters() );

        // To do: realizar petición HTTP
        
        

        //dispatch( setCharacters() )
    }
}