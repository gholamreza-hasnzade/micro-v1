import HomeRoute from "@components/config/app-configurations/routers/route/home/home-route";
import ClientRoute from "@components/config/app-configurations/routers/route/client/client-route";
import ProductRoute from "@components/config/app-configurations/routers/route/product/product-route";

const RoutesPage = [...HomeRoute, ...ClientRoute, ...ProductRoute];

export { RoutesPage };