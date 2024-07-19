import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    users: [{ id: 1, name: 'Bedh', email: 'bedh@gmail.com', password: '12345' }],
    cartItems: [],
    products: [{ id: 1, name: "Iphone" }, { id: 2, name: "Dumbell" }],
}

const DataSlice = createSlice({
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
            state.users = state.users.filter(user => user.id !== action.payload)
        },
        addToCart: (state, action) => {
            const item = {
                id: nanoid(),
                name: action.payload,
            }

            state.cartItems.push(item)
        },
        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload)
        },

    }
})

export const { addUser, updateUser, removeUser, addToCart, removeFromCart } = DataSlice.actions

export default DataSlice.reducer