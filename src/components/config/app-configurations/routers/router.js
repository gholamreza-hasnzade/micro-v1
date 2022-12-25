// * import tools
import React from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";

// * import components/routes
import { RoutesPage } from "@components/config/app-configurations/routers/route/routes";

// * import components/layout
import { MainLayout } from "@components/common/sections";
const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                {RoutesPage?.map((route, index) => (
                    <Route
                        key={index}
                        exact={route.exact}
                        path={route.path}
                        element={
                            <MainLayout>
                                <route.element />
                            </MainLayout>
                        }
                    />
                ))}
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;
