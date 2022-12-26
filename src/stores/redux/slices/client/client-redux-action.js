// * import callApi
import { requestMethodes } from "@constants/content";
import {
    callApi,
    endpoints,
} from "@components/config/app-configurations/callApi";

// * import redux
import { createAsyncThunk } from "@reduxjs/toolkit";

/* get all User  */
export const getUsers = createAsyncThunk("getUsers", async (page) => {
    const { baseURL9000, v1 } = endpoints;
    const response = await callApi({
        baseURL: baseURL9000,
        url: `${v1}/user`,
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

/* get User By id */
export const getByIdUser = createAsyncThunk("getByIdUser", async (id) => {
    const { baseURL9000, v1 } = endpoints;
    const response = await callApi({
        baseURL: baseURL9000,
        url: `${v1}/user/${id}`,
        method: requestMethodes.get,
    });
    if (response?.status) {
        return {
            data: response.data?.data ? response.data?.data : response.data,
        };
    }
});

/* delete User By id */
export const deleteUser = createAsyncThunk(
    "deleteUser",
    async (id, { rejectWithValue, getState, dispatch }) => {
        const data = getState()?.client.datas;
        const { baseURL9000, v1 } = endpoints;
        const response = await callApi({
            baseURL: baseURL9000,
            url: `${v1}/user/${id}`,
            method: requestMethodes.delete,
        });
        if (response?.status) {
            return {
                datas: data,
                user_id: id,
            };
        }
    }
);