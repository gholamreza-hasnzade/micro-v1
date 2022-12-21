// * Import Tools
import { createSlice } from "@reduxjs/toolkit";

// * Import initial-state
import { productReduxInitialState } from "./product-redux-initial-state";

// * Import redux-action
import { getByIdProduct, getProducts } from "./product-redux-action";
// * Import redux-reducer
import {
    getProductsPendingReduxReducer,
    getProductsFulfilledReduxReducer,
    getProductsRejectedReduxReducer,
    getByIdProductPendingReduxReducer,
    getByIdProductFulfilledReduxReducer,
    getByIdProductRejectedReduxReducer,
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
        builder.addCase(
            getByIdProduct.pending,
            getByIdProductPendingReduxReducer
        );
        builder.addCase(
            getByIdProduct.fulfilled,
            getByIdProductFulfilledReduxReducer
        );
        builder.addCase(
            getByIdProduct.rejected,
            getByIdProductRejectedReduxReducer
        );
    },
});
export const productReduxSlice = productSlice.reducer;
