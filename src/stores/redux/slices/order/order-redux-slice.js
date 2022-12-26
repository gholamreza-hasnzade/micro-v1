// * Import Tools
import { createSlice } from "@reduxjs/toolkit";

// * Import redux-action
import { getOrders, deleteOrder } from "./order-redux-action";

// * Import redux-initial-state
import { orderReduxInitialState } from "./order-redux-initial-state";
import {
    deleteFulfilledReduxReducer,
    deletePendingReduxReducer,
    deleteRejectedReduxReducer,
    getOrdersFulfilledReduxReducer,
    getOrdersPendingReduxReducer,
    getOrdersRejectedReduxReducer,
} from "./order-redux-reducer";

const orderSlice = createSlice({
    name: "order",
    initialState: orderReduxInitialState,
    extraReducers: (builder) => {
        /* get all Order */
        builder.addCase(getOrders.pending, getOrdersPendingReduxReducer);
        builder.addCase(getOrders.fulfilled, getOrdersFulfilledReduxReducer);
        builder.addCase(getOrders.rejected, getOrdersRejectedReduxReducer);
        /* get all Order */

        /* order deleted */
        builder.addCase(deleteOrder.pending, deletePendingReduxReducer);
        builder.addCase(deleteOrder.fulfilled, deleteFulfilledReduxReducer);
        builder.addCase(deleteOrder.rejected, deleteRejectedReduxReducer);
        /* order deleted */
    },
});

export const orderReduxSlice = orderSlice.reducer;
