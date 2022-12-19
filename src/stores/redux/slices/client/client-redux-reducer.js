/* getUsers */
export const getUsersPendingReduxReducer = (state, action) => {
    state.datas = [];
    state.total = 0;
    state.current_page = 0;
    state.last_page = 0;
    state.loading = true;
};

export const getUsersFulfilledReduxReducer = (state, action) => {
    state.datas = action?.payload?.datas;
    state.total = action?.payload?.total;
    state.current_page = action?.payload?.current_page;
    state.last_page = action?.payload?.last_page;
    state.loading = false;
};

export const getUsersRejectedReduxReducer = (state, action) => {
    state.datas = [];
    state.total = 0;
    state.current_page = 0;
    state.last_page = 0;
    state.loading = true;
};
/* getUsers */

/* get By Id Uset */
export const getByIdUserPendingReduxReducer = (state, action) => {
    state.data = {};
    state.loading = true;
};
export const getByIdUserFulfilledReduxReducer = (state, action) => {
    state.data = action?.payload?.data;
    state.loading = false;
};
export const getByIdUserRejectedReduxReducer = (state, action) => {
    state.data = {};
    state.loading = true;
};
/* get By Id Uset */

/* delete User */
export const deleteUserPendingReduxReducer = (state, action) => {
    state.loading = true;
};
export const deleteUserFulfilledReduxReducer = (state, action) => {
    state.loading = false;
    console.log(action?.payload?.datas);
    const lists = action?.payload?.datas;
    state.datas = lists?.filter((item) => item.id !== action?.payload?.user_id);
    state.total = state.total - 1;
};
export const deleteUserRejectedReduxReducer = (state, action) => {
    state.loading = true;
};
/* delete User */
