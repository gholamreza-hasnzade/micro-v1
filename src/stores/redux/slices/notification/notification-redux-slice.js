// * import tools
import { createSlice } from "@reduxjs/toolkit";

// * import initialState notification
import { initialStateNotification } from "./notification-redux-initial-state";
import { notificationReduxReducer } from "./notification-redux-reducer";

export const notificationSlice = createSlice({
    name: "notification",
    initialState: initialStateNotification,
    reducers: {
        notification: notificationReduxReducer,
    },
});

// Action creators are generated for each case reducer function
export const { notification } = notificationSlice.actions;

export default notificationSlice.reducer;

