import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    users: [{ id: 1, name: 'Bedh', email: 'bedh@gmail.com', password: '12345' }],
    cartItems: [],
    products: [{ id: 1, name: "Iphone" }, { id: 2, name: "Dumbell" }],
}

const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser: (state, action) => {
            const user = {
                id: nanoid(),
                name: action.payload.name,
                email: action.payload.email,
                password: action.payload.password,
            }

            state.users.push(user)
        },
        updateUser: (state, action) => { },
        removeUser: (state, action) => {
            state.users = state.users.filter(user => user.id != action.payload)
        },
        addToCart: (state, action) => {
            const item = {
                id: nanoid(),
                name: action.payload,
            }

            state.cartItems.push(item)
        }
    }
})

export const { addUser, updateUser, removeUser, addToCart } = UserSlice.actions

export default UserSlice.reducer