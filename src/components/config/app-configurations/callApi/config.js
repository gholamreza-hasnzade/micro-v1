const serverURL = process.env.REACT_APP_BACKEND_URL;
const prefix = process.env.REACT_APP_PREFIX;

export const endpoints = {
    baseURL: serverURL,
    v1: `${serverURL}/${prefix}`,
};
