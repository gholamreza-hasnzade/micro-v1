/* eslint-disable no-var */
/* eslint-disable object-shorthand */
/* eslint-disable no-unused-vars */
// * import tools
import axios from "axios";

// * import constants
import { bodyTypes } from "@constants/content";
// * import endpoints
let dispatch = null;
export const setDispatch = (d) => {
    dispatch = d;
};
export const callApi = async (requestData) => {
    const { url, body, method, bodyType, params, baseURL } = requestData;
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
            baseURL: baseURL,
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
        if (response?.status === 500) {
            console.log(response);
          /*   dispatch(
                notification({
                    showNotification: true,
                    type: notificationTypes.error,
                    content: "Server Error",
                })
            ); */
        } else if (response?.status === "warning") {
            const message = Object.values(response?.data?.status?.message)[0];
            console.log(message);
            /* dispatch(
                notification({
                    showNotification: true,
                    type: notificationTypes.warning,
                    content: message,
                })
            ); */
        } else return response?.data;
    } catch (error) {
        // Error 😨
        console.log(error);
        if (error.response?.data?.status?.type === "warning") {
            const message = Object.values(
                error.response?.data?.status?.message
            )[0];
           
          /*   dispatch(
                notification({
                    showNotification: true,
                    type: notificationTypes.warning,
                    content: message,
                })
            ); */
        }

        if (error.response?.status === 500) {
            console.log(error);
           /*  dispatch(
                notification({
                    showNotification: true,
                    type: notificationTypes.error,
                    content: "Server Error",
                })
            ); */
        }

        /*
         * The request was made and the server responded with a
         * status code that falls out of the range of 2xx
         */
        return error?.response?.data;
    }
};
