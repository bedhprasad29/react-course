import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchAllUsers } from '../../services/users';

const initialState = {
    users: [],
    loggedInUser: null,
    status: 'idle',
    error: null,
};

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    const response = await fetchAllUsers()

    return response;
});

export const loginUser = createAsyncThunk(
    'users/loginUser',
    async ({ username }, { getState, rejectWithValue }) => {
        const users = getState().users.users;
        const user = users.find(
            (u) => u.username === username
        );

        if (user) {
            return user;
        } else {
            return rejectWithValue('Invalid username or password');
        }
    }
);

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        logout(state) {
            state.loggedInUser = null;
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.users = action.payload;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(loginUser.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.loggedInUser = action.payload;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            });
    },
});

export const { logout } = userSlice.actions;

export default userSlice.reducer;
