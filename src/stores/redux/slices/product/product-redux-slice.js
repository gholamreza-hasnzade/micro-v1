// * Import Tools
import { createSlice } from "@reduxjs/toolkit";

// * Import initial-state
import { productReduxInitialState } from "./product-redux-initial-state";

// * Import redux-action
import {
    deleteProduct,
    getByIdProduct,
    getProducts,
} from "./product-redux-action";
// * Import redux-reducer
import {
    getProductsPendingReduxReducer,
    getProductsFulfilledReduxReducer,
    getProductsRejectedReduxReducer,
    getByIdProductPendingReduxReducer,
    getByIdProductFulfilledReduxReducer,
    getByIdProductRejectedReduxReducer,
    deleteProductPendingReduxReducer,
    deleteProductRejectedReduxReducer,
    deleteProductFulfilledReduxReducer,
} from "./product-redux-reducer";

const productSlice = createSlice({
    name: " product",
    initialState: productReduxInitialState,
    extraReducers: (builder) => {
        // * get all Products
        builder.addCase(getProducts.pending, getProductsPendingReduxReducer);
        builder.addCase(
            getProducts.fulfilled,
            getProductsFulfilledReduxReducer
        );
        builder.addCase(getProducts.rejected, getProductsRejectedReduxReducer);
        // * get all Products

        // * get by id Products
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
        // * get by id Products

        // * delete product
        builder.addCase(
            deleteProduct.pending,
            deleteProductPendingReduxReducer
        );
        builder.addCase(
            deleteProduct.fulfilled,
            deleteProductFulfilledReduxReducer
        );
        builder.addCase(
            deleteProduct.rejected,
            deleteProductRejectedReduxReducer
        );
        // * delete product
    },
});
export const productReduxSlice = productSlice.reducer;
