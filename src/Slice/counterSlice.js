import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0,
}
export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state, actions) => {
            state.value += actions.payload
        },
        decrement: (state,actions) => {
            state.value -= actions.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { increment, decrement } = counterSlice.actions

export default counterSlice.reducer