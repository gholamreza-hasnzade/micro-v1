import { notificationTypes } from "@constants/content";

export const initialState = {
    showNotification: false,
    type: notificationTypes.success,
    content: "",
};
