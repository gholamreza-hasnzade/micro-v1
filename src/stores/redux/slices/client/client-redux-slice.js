// * Import Tools
import { createSlice } from "@reduxjs/toolkit";

// * Import Redux
import { clientReduxInitialState } from "./client-redux-initial-state";
import { getUsers } from "./client-redux-action";
import {
    getUsersPendingReduxReducer,
    getUsersFulfilledReduxReducer,
    getUsersRejectedReduxReducer,
} from "./client-redux-reducer";

const clientSlice = createSlice({
    name: "client",
    initialState: clientReduxInitialState,
    extraReducers: (builder) => {
        builder.addCase(getUsers.pending, getUsersPendingReduxReducer);
        builder.addCase(getUsers.fulfilled, getUsersFulfilledReduxReducer);
        builder.addCase(getUsers.rejected, getUsersRejectedReduxReducer);
    },
});

export const clientReduxSlice = clientSlice.reducer;
