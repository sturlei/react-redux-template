import {
    configureStore,
    getDefaultMiddleware
} from "@reduxjs/toolkit";
// middwares
import api from "./middleware/api";
import gql from "./middleware/gql";

// reducer
import reducer from "./reducer";

const storeConfig = () => configureStore( {
    middleware: [
        ...getDefaultMiddleware(),
        api,
        gql,
    ],
    reducer
} )

export default storeConfig;