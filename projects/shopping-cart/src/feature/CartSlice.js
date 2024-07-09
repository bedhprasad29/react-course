import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [{ id: 1, name: 'Potato', quantity: 0 }],
}

export const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const cartItem = {
                id: nanoid(),
                name: action.payload.name,
                quantity: action.payload.quantity ?? 1,
            }

            state.cartItems.push(cartItem)
        },
        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter(cartItem => cartItem.id !== action.payload)
        }
    }
})

export const { addToCart, removeFromCart } = CartSlice.actions;

export default CartSlice.reducer