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
            state.page = action.payload.page;
            state.characters = action.payload.characters;
        },
        setCharactersInfo: (state, action) => {
            state.isLoading = false;
            state.characters = action.payload
        }
    }
});

export const {startLoadingCharacters, setCharacters} = charactersSlice.actions;