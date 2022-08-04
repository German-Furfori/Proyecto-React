import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCharacters } from "../store/slices/characters/thunks";

export const RickAndMortyApp = () => {
    const dispatch = useDispatch(); // Dispara o despacha cualquier accion, sea cual sea la pieza del store
    const {isLoading, characters = [], page} = useSelector( state => state.characters );

    useEffect(() => {
      dispatch( getCharacters() ); // Estoy disparando el thunk
    }, [])

    return (
        <>
            <h1>Rick and Morty App</h1>

            <ul>
                {
                    characters.map( character => (
                        <li key={character.name}>{character.name}</li>
                    ) )
                }
            </ul>
            
            <button
                onClick= {() => dispatch (getCharacters(page))}>
                Next
            </button>
        </>
    )
}