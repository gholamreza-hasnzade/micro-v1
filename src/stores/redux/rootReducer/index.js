import { drawerReduxSlice } from "@redux/slices/drawer/drawer-redux-slice";
import { clientReduxSlice } from "@redux/slices/client/client-redux-slice";
import { productReduxSlice } from "@redux/slices/product/product-redux-slice";
import { orderReduxSlice } from "@redux/slices/order/order-redux-slice";
const rootReducer = {
    drawer: drawerReduxSlice,
    client: clientReduxSlice,
    product: productReduxSlice,
    order: orderReduxSlice,
};

export default rootReducer;
