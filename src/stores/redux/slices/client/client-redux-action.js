// * import callApi
import { requestMethodes } from "@constants/content";
import {
    callApi,
    endpoints,
} from "@components/config/app-configurations/callApi";

// * import redux
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getUsers = createAsyncThunk("getUsers", async () => {
    const { baseURL9000, v1 } = endpoints;
    const response = await callApi({
        baseURL: baseURL9000,
        url: `${v1}/user`,
        method: requestMethodes.get,
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

export const getBytUser = createAsyncThunk("getUser", async (params) => {
    const { baseURL9000, v1 } = endpoints;
    const response = await callApi({
        baseURL: baseURL9000,
        url: `${v1}/user`,
        method: requestMethodes.get,
    });
    console.log(response);
})