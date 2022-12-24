// * import callApi
import { requestMethodes } from "@constants/content";
import {
    callApi,
    endpoints,
} from "@components/config/app-configurations/callApi";

// * import redux
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getOrders = createAsyncThunk("getOrders", async (page) => {
    const { baseURL, v1 } = endpoints;
    const response = await callApi({
        baseURL: baseURL,
        url: `${v1}/order`,
        method: requestMethodes.get,
        params: {
            page: page,
        },
    });
    if (response?.status) {
        return {
            datas: response.data?.data ? response.data?.data : response.data,
            last_page: response?.data?.last_page
                ? response?.data?.last_page
                : response?.last_page,
            total: response?.data?.total,
            current_page: response?.data?.current_page
                ? response?.data?.current_page
                : response?.current_page,
        };
    }
});
