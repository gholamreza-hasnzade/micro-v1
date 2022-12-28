// * import tools
import React, { Suspense } from "react";
import { ToastContainer } from "react-toastify";
import { useTranslation } from "react-i18next";

// * import config
import AppRouter from "@components/config/app-configurations/routers/router";

import { AppConfigurations } from "./config/app-configurations/app.configurations";

// ** React Toastify css
import "react-toastify/dist/ReactToastify.css";

const App = () => {
    const { t } = useTranslation();
    document.title = t("online shoping holoo");
    return (
        <AppConfigurations>
            <AppRouter />
            <ToastContainer />
        </AppConfigurations>
    );
};

export default App;
