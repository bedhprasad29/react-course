import { configureStore } from '@reduxjs/toolkit'
import BlogSlice from '../features/BlogSlice'

export const store = configureStore({
    reducer: {
        blogs: BlogSlice
    }
})
