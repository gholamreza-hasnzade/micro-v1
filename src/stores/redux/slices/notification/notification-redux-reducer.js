export const notificationReduxReducer = (state, action) => {
    state.showNotification = action.payload.showNotification;
    state.type = action.payload.type;
    state.content = action.payload.content;
};
