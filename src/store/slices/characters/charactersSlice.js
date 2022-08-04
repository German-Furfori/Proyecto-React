import {createSlice} from '@reduxjs/toolkit'

export const charactersSlice = createSlice({
    name: 'character',
    initialState: {
        page: 0,
        characters: [],
        isLoading: false
    },
    reducers: {
        startLoadingCharacters: (state) => {
            state.isLoading = true;
        },
        setCharacters: (state, action) => {
            state.isLoading = false;
            state.page = action.payload.page; // Ésta la página en la que estoy
            state.characters = action.payload.characters; // Este sería como el arreglo de los personajes
        }
    }
});

export const {startLoadingCharacters, setCharacters} = charactersSlice.actions;