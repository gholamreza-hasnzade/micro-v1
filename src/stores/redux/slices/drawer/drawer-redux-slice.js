// * Import Tools
import { createSlice } from '@reduxjs/toolkit';


// * Import Redux 
import { drawerReduxInitialState } from './drawer-redux-initial-state';
import { drawerMobileReduxReducer, drawerReduxReducer } from './drawer-redux-reducer';

const drawerSlice = createSlice({
    name: 'drawer',
    initialState: drawerReduxInitialState,
    reducers: {
        openDrawerToggle: drawerReduxReducer,
        openDrawerToggleInMobile: drawerMobileReduxReducer
    }
});


export const { openDrawerToggle, openDrawerToggleInMobile } = drawerSlice.actions;
export const  drawerReduxSlice = drawerSlice.reducer;
