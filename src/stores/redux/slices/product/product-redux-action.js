// * import callApi
import { requestMethodes } from "@constants/content";
import {
    callApi,
    endpoints,
} from "@components/config/app-configurations/callApi";

// * import redux
import { createAsyncThunk } from "@reduxjs/toolkit";

// * get all products
export const getProducts = createAsyncThunk("getProducts", async (page) => {
    const { baseURL9000, v1 } = endpoints;
    const response = await callApi({
        baseURL: baseURL9000,
        url: `${v1}/product`,
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
            total: response?.data?.total
                ? response?.data?.total
                : response?.total,
            current_page: response?.data?.current_page
                ? response?.data?.current_page
                : response?.current_page,
        };
    }
});
