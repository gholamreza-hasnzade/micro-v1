//* get all Orders
export const getOrdersPendingReduxReducer = (state, action) => {
    state.datas = [];
    state.total = 0;
    state.current_page = 0;
    state.last_page = 0;
    state.loading = true;
};

export const getOrdersFulfilledReduxReducer = (state, action) => {
    state.datas = action?.payload?.datas;
    state.total = action?.payload?.total;
    state.current_page = action?.payload?.current_page;
    state.last_page = action?.payload?.last_page;
    state.loading = false;
};

export const getOrdersRejectedReduxReducer = (state, action) => {
    state.datas = [];
    state.total = 0;
    state.current_page = 0;
    state.last_page = 0;
    state.loading = true;
};
//* get all Orders
