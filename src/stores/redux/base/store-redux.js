// * Import Redux Tools
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../rootReducer";

// * Import roorReducer

export const storeRedux = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({
            serializableCheck: false,
        });
    },
});
