import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    item: JSON.parse(localStorage.getItem('cartItems')) || []
};

const cartSlice = createSlice({
    name: 'carttab',
    initialState,
    reducers: {
        addcart: (state, action) => {
            const existingIndex = state.item.findIndex(item => item.id === action.payload.id);
            if (existingIndex >= 0) {
                state.item[existingIndex].quantity += 1;
            } else {
                state.item.push({ ...action.payload, quantity: 1 });
            }
            localStorage.setItem('cartItems', JSON.stringify(state.item));
            alert("Your Product has been Added in Cart")
        },
        removecart: (state, action) => {
            state.item.splice(action.payload, 1);
            localStorage.setItem('cartItems', JSON.stringify(state.item));
        },
        clearcart: (state) => {
            state.item = [];
            localStorage.removeItem('cartItems');
        },
        increaseQuantity: (state, action) => {
            const item = state.item[action.payload];
            if (item) {
                item.quantity += 1;
            }
            localStorage.setItem('cartItems', JSON.stringify(state.item));
        },
        decreaseQuantity: (state, action) => {
            const item = state.item[action.payload];
            if (item && item.quantity > 1) {
                item.quantity -= 1;
            }
            localStorage.setItem('cartItems', JSON.stringify(state.item));
        },
    }
});
export const { addcart, removecart, clearcart, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
