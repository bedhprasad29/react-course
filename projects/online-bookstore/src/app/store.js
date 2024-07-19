import { configureStore } from '@reduxjs/toolkit'
import BookSlice from '../feature/BookSlice'

export const store = configureStore({
    reducer: {
        books: BookSlice
    }
})