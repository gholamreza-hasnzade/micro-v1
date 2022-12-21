// * Import Tools
import { createSlice } from "@reduxjs/toolkit";

// * Import initial-state
import { productReduxInitialState } from "./product-redux-initial-state";

// * Import redux-action
import { getProducts } from "./product-redux-action";
// * Import redux-reducer
import {
    getProductsPendingReduxReducer,
    getProductsFulfilledReduxReducer,
    getProductsRejectedReduxReducer,
} from "./product-redux-reducer";

const productSlice = createSlice({
    name: " product",
    initialState: productReduxInitialState,
    extraReducers: (builder) => {
        /* get Products */
        builder.addCase(getProducts.pending, getProductsPendingReduxReducer);
        builder.addCase(
            getProducts.fulfilled,
            getProductsFulfilledReduxReducer
        );
        builder.addCase(getProducts.rejected, getProductsRejectedReduxReducer);
        /* get Products */
    },
});
export const productReduxSlice = productSlice.reducer;