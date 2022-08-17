import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    users: [{
        username: 'german',
        password: '123456',
        favoriteCharacters: [],
    }],
    userLogged: {},
    message: '',
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        createUser: (state, action) => {
            state.users.push({
                name: action.payload.name,
                password: action.payload.password,
                favoriteCharacters: [],
            });
        },
        loginUser: (state, action) => {
            state.userLogged = action.payload.userLogged;
        },
        logoutUser: (state) => {
            state.userLogged = {};
        },
        setMessage: (state, action) => {
            state.message = action.payload.message;
        },
        setFavoriteCharacter: (state, action) => {
            const index = action.payload.userIndex;

            if (index !== -1) {
                const character = action.payload.character;
                const isFavorited = action.payload.isFavorited;
                if (isFavorited) {
                    const newFavouriteList = state.users[index].favoriteCharacters.filter(favourite => favourite.id !== character.id);
                    state.users[index].favoriteCharacters = newFavouriteList;
                }
                else {
                    state.users[index].favoriteCharacters.push(character);
                }
            }
        },

    },
});

export const { createUser, loginUser, logoutUser, setFavoriteCharacter, setMessage } = userSlice.actions;