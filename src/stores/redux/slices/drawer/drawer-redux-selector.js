// * Import Redux tools
import { createSelector } from '@reduxjs/toolkit';



const selectDrawer = (state) => state.drawer;
const selectIsOpen = createSelector(selectDrawer, (drawer) => drawer.isOpen);
const selectIsOpenInMobile = createSelector(selectDrawer, (drawer) => drawer.isOpenInMobile);


export const drawerReduxSelector = {
    isOpen: selectIsOpen,
    isOpenInMobile: selectIsOpenInMobile
};