import { drawerReduxSlice } from "@redux/slices/drawer/drawer-redux-slice";
import { notificationSlice } from "@redux/slices/notification/notification-redux-slice";
import { clientReduxSlice } from "@redux/slices/client/client-redux-slice";
import { productReduxSlice } from "@redux/slices/product/product-redux-slice";
const rootReducer = {
    drawer: drawerReduxSlice,
    client: clientReduxSlice,
    product: productReduxSlice,
    notification: notificationSlice,
};

export default rootReducer;
