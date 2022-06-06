import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cartItems: [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const itemIndex = state.cartItems.findIndex(
                (item) => item._id === action.payload._id
            );

            if (itemIndex >= 0) {
                state.cartItems[itemIndex].cartQuantity += 1
            } else {
                const tempProduct = { ...action.payload, cartQuantity: 1 };
                state.cartItems.push(tempProduct)
            }

            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },

        removeFromCart(state, action) {
            const newCartItems = state.cartItems.filter(
                (item) => item._id !== action.payload
            );

            state.cartItems = newCartItems;
            return state
        },


        getTotals(state, action) {
            let { quantity } = state.cartItems.reduce((cartTotal, cartItem) => {
                const { cartQuantity } = cartItem;

                cartTotal.quantity += cartQuantity;
                return cartTotal;

            }, { quantity: 0 })

            state.cartTotalQuantity = quantity;
        }
    }
})

export const { addToCart, getTotals, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;