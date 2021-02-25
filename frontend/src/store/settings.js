import {
    createSlice
} from "@reduxjs/toolkit";
// import * as ls from "local-storage";



const slice = createSlice( {

    name: 'settings',
    initialState: {
        loading: false,
        config: {},
    },
    reducers: {

    },
} );



export const actions = slice.actions;
export default slice.reducer;