import { drawerReduxSlice } from "@redux/slices/drawer/drawer-redux-slice";
import { notificationSlice } from "@redux/slices/notification/notification-redux-slice";
const rootReducer = {
    drawer: drawerReduxSlice,
    notification: notificationSlice,
};

export default rootReducer;
