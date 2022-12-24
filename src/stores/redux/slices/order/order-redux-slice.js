// * Import Tools
import { createSlice } from "@reduxjs/toolkit";

// * Import redux-action
import { getOrders } from "./order-redux-action";

// * Import redux-initial-state
import { orderReduxInitialState } from "./order-redux-initial-state";
import {
    getOrdersFulfilledReduxReducer,
    getOrdersPendingReduxReducer,
    getOrdersRejectedReduxReducer,
} from "./order-redux-reducer";

const orderSlice = createSlice({
    name: "order",
    initialState: orderReduxInitialState,
    extraReducers: (builder) => {
        builder.addCase(getOrders.pending, getOrdersPendingReduxReducer);
        builder.addCase(getOrders.fulfilled, getOrdersFulfilledReduxReducer);
        builder.addCase(getOrders.rejected, getOrdersRejectedReduxReducer);
    },
});

export const orderReduxSlice = orderSlice.reducer;
