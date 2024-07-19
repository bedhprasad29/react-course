import { configureStore } from '@reduxjs/toolkit'
import DataStore from '../feature/DataStore'

export const store = configureStore({
    reducer: DataStore
})