import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCharacters } from "../store/slices/characters/thunk";

export const RickAndMortyApp = () => {
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getCharacters());
    }, [])

    return (
        <>
            <h1>Rick and Morty App</h1>
        </>
    )
}