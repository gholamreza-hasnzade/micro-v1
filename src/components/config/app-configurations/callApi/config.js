const serverURL = process.env.REACT_APP_BASE_URL;

export const endpoints = {
    baseURL: serverURL,
    v1: `${serverURL}/api/v1`,
};
