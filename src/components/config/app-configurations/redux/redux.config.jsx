// * Import Casual modules
import React from "react";

// * Import Redux
import { Provider as ReduxProvider } from "react-redux";
import { storeRedux } from "@redux/base/store-redux";


export const ReduxConfig = ({ children }) => {
    return <ReduxProvider store={storeRedux}>{children}</ReduxProvider>;
};
