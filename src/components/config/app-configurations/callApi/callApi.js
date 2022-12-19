/* eslint-disable no-var */
/* eslint-disable object-shorthand */
/* eslint-disable no-unused-vars */
// * import tools
import axios from "axios";

// * import constants
import { bodyTypes, notificationTypes } from "@constants/content";
// * import endpoints
import { endpoints } from "./config";

// ** Notification
import { notification } from "@redux/slices/notification/notification-redux-slice";

let dispatch = null;
export const setDispatch = (d) => {
    dispatch = d;
};

const callApi = async (requestData) => {
    const { url, body, method, bodyType, params } = requestData;
    let data;
    let ContentType;

    if (bodyType === bodyTypes.formData) {
        const bodyFormData = new FormData();

        Object.keys(body).forEach((item) =>
            bodyFormData.append(item, body[item])
        );

        data = bodyFormData;
        ContentType = "multipart/form-data";
    } else {
        data = body;
        ContentType = "application/json";
    }

    try {
        const response = await axios({
            url: url,

            method: method,

            baseURL: `${endpoints.v1}`,

            headers: {
                "X-Requested-With": "XMLHttpRequest",
                "Content-Type": ContentType,
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods":
                    "GET, POST, OPTIONS, PUT, PATCH, DELETE",
                "Access-Control-Allow-Headers":
                    "Origin, X-Requested-With, Content-Type, Accept",
            },

            data: data,

            params: params,
        });
        if (response?.data?.status?.code === 500) {
            dispatch(
                notification({
                    showNotification: true,
                    type: notificationTypes.error,
                    content: "Server Error",
                })
            );
        } else if (response?.data?.status?.type === "warning") {
            const message = Object.values(response?.data?.status?.message)[0];
            dispatch(
                notification({
                    showNotification: true,
                    type: notificationTypes.warning,
                    content: message,
                })
            );
        } else return response?.data;
    } catch (error) {
        // Error 😨
        if (error.response?.data?.status?.type === "warning") {
            const message = Object.values(
                error.response?.data?.status?.message
            )[0];
            dispatch(
                notification({
                    showNotification: true,
                    type: notificationTypes.warning,
                    content: message,
                })
            );
        }

        if (error.response?.status === 500) {
            dispatch(
                notification({
                    showNotification: true,
                    type: notificationTypes.error,
                    content: "Server Error",
                })
            );
        }

        /*
         * The request was made and the server responded with a
         * status code that falls out of the range of 2xx
         */
        return error?.response?.data;
    }
};

export default callApi;
