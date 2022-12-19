// * import tools
import React, { Suspense } from "react";
import { ToastContainer } from "react-toastify";

// * import components
import AppRouter from "@components/config/app-configurations/routers/router";
import { AppConfigurations } from "./config/app-configurations/app.configurations";

const App = () => {
    document.title = "فروشگاه آنلاین هلو ";
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <AppConfigurations>
                <AppRouter />
                <ToastContainer />
            </AppConfigurations>
        </Suspense>
    );
};

export default App;
