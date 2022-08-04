import { configureStore } from '@reduxjs/toolkit'
import { charactersSlice } from './slices/characters/charactersSlice'

export const store = configureStore({
  reducer: {
    characters: charactersSlice.reducer
  },
})