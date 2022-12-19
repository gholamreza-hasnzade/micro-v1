// * Import Tools
import { createSlice } from "@reduxjs/toolkit";

// * Import Redux
import { clientReduxInitialState } from "./client-redux-initial-state";
import { getUsers, getBytUser } from "./client-redux-action";
import {
    getUsersPendingReduxReducer,
    getUsersFulfilledReduxReducer,
    getUsersRejectedReduxReducer,
    getByIdUserPendingReduxReducer,
    getByIdUserFulfilledReduxReducer,
    getByIdUserRejectedReduxReducer,
} from "./client-redux-reducer";

const clientSlice = createSlice({
    name: "client",
    initialState: clientReduxInitialState,
    extraReducers: (builder) => {
        /* getUsers */
        builder.addCase(getUsers.pending, getUsersPendingReduxReducer);
        builder.addCase(getUsers.fulfilled, getUsersFulfilledReduxReducer);
        builder.addCase(getUsers.rejected, getUsersRejectedReduxReducer);
        /* getUsers */
        /* get By Id User  */
        builder.addCase(getBytUser.pending, getByIdUserPendingReduxReducer);
        builder.addCase(getBytUser.fulfilled, getByIdUserFulfilledReduxReducer);
        builder.addCase(getBytUser.rejected, getByIdUserRejectedReduxReducer);
        /* get By Id User  */
    },
});

export const clientReduxSlice = clientSlice.reducer;