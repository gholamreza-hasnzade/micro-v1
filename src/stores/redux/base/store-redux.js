// * Import Redux Tools
import { configureStore } from "@reduxjs/toolkit";

// * Import Redux Slices
import { drawerReduxSlice } from "../slices/drawer/drawer-redux-slice";

export const storeRedux = configureStore({
    reducer: {
        drawer: drawerReduxSlice,
    },
});
