import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchAllPosts, getPostById } from '../../services/posts';

const initialState = {
    posts: [],
    status: 'idle',
    error: null,
};

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    const response = await fetchAllPosts()

    return response;
});

export const fetchPostById = createAsyncThunk('post/fetchPostById', async (id) => {
    const response = await getPostById(id)

    return response
})

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.posts = action.payload;
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(fetchPostById.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchPostById.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.posts = action.payload;
            })
            .addCase(fetchPostById.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default postSlice.reducer;
