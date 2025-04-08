import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    value: 0,
    item: []
}
export const cart = createSlice({
    name: 'carttab',
    initialState,
    reducers: {
        addcart: (state, actions) => {
            const cartitems = actions.payload;
            state.item.push({ ...cartitems, quantity: 1 })
            alert("your product has been added in cart")
        },
        removecart: (state, actions) => {  

            state.item = state.item.filter((item, index) => index !== actions.payload)
        }

    },
})

export const { addcart, removecart } = cart.actions

export default cart.reducer