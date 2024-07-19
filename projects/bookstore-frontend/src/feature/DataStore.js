import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    bookStore: []
}

export const DataStore = createSlice({
    name: "datastore",
    initialState,
    reducers: {
        addBook: (state, action) => {
            const book = {
                id: nanoid(),
                name: action.payload
            }

            state.bookStore = state.bookStore.push(book)
        },
        updateBook: (state, action) => {

        },
        deleteBook: (state, action) => {
            state.bookStore = state.bookStore.filter(book => book.id !== action.payload)
        },
    }
})

export const { addBook, updateBook, deleteBook } = DataStore.actions

export default DataStore.reducer