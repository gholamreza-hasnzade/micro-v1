// * import tools
import React from "react";
import { ToastContainer } from "react-toastify";

// * import components
import AppRouter from "@components/config/app-configurations/routers/router";
import { AppConfigurations } from "./config/app-configurations/app.configurations";
// ** React Toastify
import "react-toastify/dist/ReactToastify.css";

const App = () => {
    document.title = "فروشگاه آنلاین هلو ";
    return (
        <AppConfigurations>
            <AppRouter />
            <ToastContainer />
        </AppConfigurations>
    );
};

export default App;
