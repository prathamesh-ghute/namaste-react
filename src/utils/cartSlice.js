import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: "cart",
    initialState:{
        items:[],

    },
    reducers:{
        addItem : (state, action) =>{
            // mutating the state here
            // Redux use immer behind the scene
            state.items.push(action.payload);

        },
        removeItem: (state) =>{
            state.items.pop();
        },
        clearCart : (state) =>{
            // RTK - either mutate the existing state or return a new state
            state.items.length = 0;
            // return {items: []};  // this new object will  be the replaced inside originalState = {items: []}
        }
    }
})



export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;