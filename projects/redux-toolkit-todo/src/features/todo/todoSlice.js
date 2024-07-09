import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{ id: 1, text: "Learn Redux" }]
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        // state : current value, action : values or payload
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }

            state.todos.push(todo)
        },
        updateTodo: (state, action) => { },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        }
    }
})

export const { addTodo, updateTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer