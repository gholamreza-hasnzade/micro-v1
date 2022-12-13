export const drawerReduxReducer = (state) => {
    state.isOpen = !state.isOpen;
};

export const drawerMobileReduxReducer = (state) => {
    state.isOpenInMobile = !state.isOpenInMobile;
};
