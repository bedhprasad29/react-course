import { configureStore } from '@reduxjs/toolkit'
import UserSlice from '../feature/UserSlice'

export const store = configureStore({
    reducer: UserSlice,
})