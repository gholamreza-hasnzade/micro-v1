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

export const deletePendingReduxReducer = (state, action) => {
    state.loading = true;
};
export const deleteFulfilledReduxReducer = (state, action) => {
    state.loading = false;
    console.log(action?.payload?.order_id);
    const lists = action?.payload?.datas;
    state.datas = lists?.filter(
        (item) => item.id !== action?.payload?.order_id
    );
    console.log(state.datas);
    state.total = state.total - 1;
};

export const deleteRejectedReduxReducer = (state, action) => {
    state.loading = true;
};
