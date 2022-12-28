// * Import tools
import axios from "axios";

// * import callApi
import { requestMethodes } from "@constants/content";
import {
    callApi,
    endpoints,
} from "@components/config/app-configurations/callApi";

// * import redux
import { createAsyncThunk } from "@reduxjs/toolkit";

import { toastContainer } from "@helpers";
import { notificationTypes } from "@constants/content";

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
            total: response?.data?.total,
            current_page: response?.data?.current_page
                ? response?.data?.current_page
                : response?.current_page,
        };
    }
});

// * get by id product
export const getByIdProduct = createAsyncThunk("getByIdProduct", async (id) => {
    const { baseURL9000, v1 } = endpoints;
    const response = await callApi({
        baseURL: baseURL9000,
        url: `${v1}/product/${id}`,
        method: requestMethodes.get,
    });
    if (response?.status) {
        return {
            item: response.data?.data ? response.data?.data : response.data,
        };
    }
});

// * delete Product
export const deleteProduct = createAsyncThunk(
    "deleteProduct",
    async (id, { rejectWithValue, getState, dispatch }) => {
        const data = getState()?.product.datas;
        const { baseURL9000, v1 } = endpoints;
        const response = await callApi({
            baseURL: baseURL9000,
            url: `${v1}/product/${id}`,
            method: requestMethodes.delete,
        });
        if (response?.status) {
            return {
                datas: data,
                product_id: id,
            };
        }
    }
);

// * add to card
export const addToBasket = createAsyncThunk("addToBasket", async (bodyForm) => {
    try {
        const { baseURL9000, v1 } = endpoints;
        const { status } = await axios.post(
            `${baseURL9000}/${v1}/product/add-to-basket`,
            bodyForm
        );
        if (status === 200) {
            toastContainer(notificationTypes.success, "به صفحه اضافه گردید");
        }
    } catch (error) {
        toastContainer(notificationTypes.error, "error in sever");
    }
});
