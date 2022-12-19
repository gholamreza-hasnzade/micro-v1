import { processUrl } from "@constants/content";

const { serverUrl, prefix, serverUrl9000 } = processUrl;

export const endpoints = {
    baseURL: serverUrl,
    baseURL9000: serverUrl9000,
    v1: `${prefix}`,
};
