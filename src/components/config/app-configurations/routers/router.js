// * import tools
import React, { useEffect, useState } from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";

// * import components/routes
import { RoutesPage } from "@components/config/app-configurations/routers/route/routes";

// * import components/layout
import { MainLayout } from "@components/common/sections";

// * Import components
import { Loader } from "@components/common/partials";
import { View404 } from "@components/views";

const AppRouter = () => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        if (loading) {
            setTimeout(() => {
                setLoading(false);
            }, 2000);
        }
    }, [loading]);

    if (loading) {
        return <Loader />;
    } else {
        return (
            <BrowserRouter>
                <Routes>
                    {RoutesPage?.map((route, idx) => {
                        return (
                            route.element && (
                                <Route
                                    key={idx}
                                    path={route.path}
                                    exact={route.exact}
                                    name={route.name}
                                    element={
                                        <MainLayout>
                                            <route.element />
                                        </MainLayout>
                                    }
                                />
                            )
                        );
                    })}
                      <Route path="*" element={<View404 />} />
                </Routes>
            </BrowserRouter>
        );
    }
};

export default AppRouter;
