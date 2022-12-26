// * Import Tools
import { createSlice } from "@reduxjs/toolkit";

// * Import Redux
import { drawerReduxInitialState } from "./drawer-redux-initial-state";
import { drawerReduxReducer } from "./drawer-redux-reducer";

const drawerSlice = createSlice({
    name: "drawer",
    initialState: drawerReduxInitialState,
    reducers: {
        openDrawerToggle: drawerReduxReducer,
    },
});

export const { openDrawerToggle } = drawerSlice.actions;
export const drawerReduxSlice = drawerSlice.reducer;
