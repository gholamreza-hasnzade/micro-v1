// *  get all product Reducer
export const getProductsPendingReduxReducer = (state, action) => {
    state.datas = [];
    state.total = 0;
    state.current_page = 0;
    state.last_page = 0;
    state.loading = true;
};

export const getProductsFulfilledReduxReducer = (state, action) => {
    console.log(action?.payload);
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
// * get all product Reducer

// * get by id product  Reducer
export const getByIdProductPendingReduxReducer = (state, action) => {
    state.item = {};
    state.loading = true;
};

export const getByIdProductFulfilledReduxReducer = (state, action) => {
    state.item = action?.payload?.item;
    state.loading = false;
};

export const getByIdProductRejectedReduxReducer = (state, action) => {
    state.item = {};
    state.loading = true;
};
// * get by id product  Reducer

// * delete product  Reducer
export const deleteProductPendingReduxReducer = (state, action) => {
    state.loading = true;
};

export const deleteProductFulfilledReduxReducer = (state, action) => {
    state.loading = false;
    const lists = action?.payload?.datas;
    state.datas = lists?.filter(
        (item) => item.id !== action?.payload?.product_id
    );
    state.total = state.total - 1;
};
export const deleteProductRejectedReduxReducer = (state, action) => {
    state.loading = true;
};
// * delete product  Reducer
