// * import tools
import React from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import { RoutesPage } from "@components/config/app-configurations/routers/route/routes";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                {RoutesPage?.map((item, index) => (
                    <Route
                        key={index}
                        exact={item.exact}
                        path={item.path}
                        element={item.element}
                    />
                ))}
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;
