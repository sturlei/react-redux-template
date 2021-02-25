import {
    createAction
} from "@reduxjs/toolkit";

export const gqlCallBegan = createAction( "gql/callBegan" );
export const gqlCallSuccess = createAction( "gql/callSuccess" );
export const gqlCallFailed = createAction( "gql/callFailed" );