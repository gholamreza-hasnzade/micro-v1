// * Import Tools
import { createSlice } from "@reduxjs/toolkit";

// * Import Redux
import { clientReduxInitialState } from "./client-redux-initial-state";
import { getUsers, getByIdUser, deleteUser } from "./client-redux-action";
import {
    getUsersPendingReduxReducer,
    getUsersFulfilledReduxReducer,
    getUsersRejectedReduxReducer,
    getByIdUserPendingReduxReducer,
    getByIdUserFulfilledReduxReducer,
    getByIdUserRejectedReduxReducer,
    deleteUserPendingReduxReducer,
    deleteUserFulfilledReduxReducer,
    deleteUserRejectedReduxReducer,
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
        builder.addCase(getByIdUser.pending, getByIdUserPendingReduxReducer);
        builder.addCase(getByIdUser.fulfilled, getByIdUserFulfilledReduxReducer);
        builder.addCase(getByIdUser.rejected, getByIdUserRejectedReduxReducer);
        /* get By Id User  */

        /* delete user */
        builder.addCase(deleteUser.pending, deleteUserPendingReduxReducer);
        builder.addCase(deleteUser.fulfilled, deleteUserFulfilledReduxReducer);
        builder.addCase(deleteUser.rejected, deleteUserRejectedReduxReducer);
        /* delete user */
    },
});

export const clientReduxSlice = clientSlice.reducer;
