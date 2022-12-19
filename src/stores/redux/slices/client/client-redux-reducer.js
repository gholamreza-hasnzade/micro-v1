/* getUsers */
export const getUsersPendingReduxReducer = (state, action) => {
    state.datas = [];
    state.total = 0;
    state.current_page = 0;
    state.last_page = 0;
    state.loading = false;
};

export const getUsersFulfilledReduxReducer = (state, action) => {
    state.datas = action?.payload?.datas;
    state.total = action?.payload?.total;
    state.current_page = action?.payload?.current_page;
    state.last_page = action?.payload?.last_page;
    state.loading = true;
};

export const getUsersRejectedReduxReducer = (state, action) => {
    state.datas = [];
    state.total = 0;
    state.current_page = 0;
    state.last_page = 0;
    state.loading = false;
};
/* getUsers */

/* get By Id Uset */
export const getByIdUserPendingReduxReducer = (state, action) => {
    state.data = {};
    state.loading = false;
};
export const getByIdUserFulfilledReduxReducer = (state, action) => {
    state.data = action?.payload?.data;
    state.loading = false;
};

export const getByIdUserRejectedReduxReducer = (state, action) => {
    state.data = {};
    state.loading = false;
};
/* get By Id Uset */
