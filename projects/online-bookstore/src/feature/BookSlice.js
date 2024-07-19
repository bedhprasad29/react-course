import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchBooks } from '../services/api';

const initialState = {
    books: [],
    status: "idle",
    error: null,
}

const fetchBookData = createAsyncThunk(
    'books/fetchBookData',
    async () => {
        try {
            const response = await fetchBooks();
            console.log(response.data)
            return response.data;
        } catch (error) {
            throw new Error(error.message)
        }
    }
)

export const BookSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        addBooks: (state, action) => {
            state.books.push(action.payload);
        },
        updateBook: (state, action) => {
            const index = state.books.findIndex(book => book.id === action.payload.id);
            if (index !== -1) {
                state.books[index] = action.payload;
            }
        },
        deleteBook: (state, action) => {
            state.books = state.books.filter(book => book.id !== action.payload.id);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchBookData.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchBookData.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.books = action.payload
            })
            .addCase(fetchBookData.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            });
    }
});

export const { addBooks, updateBook, deleteBook } = BookSlice.actions

export default BookSlice.reducer