// * import tools
import { createSlice } from "@reduxjs/toolkit";

// * import initialState notification
import { initialState } from "./notification-redux-initial-state";
import { notificationReduxReducer } from "./notification-redux-reducer";

export const notificationSlice = createSlice({
    name: "notification",
    initialState,
    reducers: {
        notification: notificationReduxReducer,
    },
});

// Action creators are generated for each case reducer function
export const { notification } = notificationSlice.actions;

export default notificationSlice.reducer;
