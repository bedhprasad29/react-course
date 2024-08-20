import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    blogs: [],
    status: "idle",
    error: null
}

export const DataSlice = createSlice({
    name: 'blogs',
    initialState,
    reducers: {
        createBlogs: (state, action) => {
            state.blogs.push(action.payload)
        },
    }
})

export const { createBlogs } = DataSlice.actions;

export default DataSlice.reducer;
