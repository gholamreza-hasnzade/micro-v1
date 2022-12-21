/* get all product Reducer */
export const getProductsPendingReduxReducer = (state, action) => {
    state.datas = [];
    state.total = 0;
    state.current_page = 0;
    state.last_page = 0;
    state.loading = true;
};

export const getProductsFulfilledReduxReducer = (state, action) => {
    console.log( action?.payload);
    state.datas = action?.payload?.datas;
    state.total = action?.payload?.total;
    state.current_page = action?.payload?.current_page;
    state.last_page = action?.payload?.last_page;
    state.loading = false;
};

export const getProductsRejectedReduxReducer = (state, action) => {
    state.datas = [];
    state.total = 0;
    state.current_page = 0;
    state.last_page = 0;
    state.loading = true;
};
/* get all product Reducer */
