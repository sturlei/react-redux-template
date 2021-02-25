import axios from "axios";
import * as actions from "../apiActions";
import { url } from "../../URL";
const apiUrl = url + "api";

const api = ( {
    dispatch
} ) => next => async action => {
    if ( action.type !== actions.apiCallBegan.type )
        return next( action );

    const {
        baseURL,
        url,
        method,
        data,
        onStart,
        onSuccess,
        onError
    } = action.payload;
    console.log( {
        ...action.payload
    } );
    if ( onStart ) dispatch( {
        type: onStart
    } )
    next( action );
    try {
        const response = await axios.request( {
            baseURL: baseURL ? baseURL : apiUrl,
            url,
            method,
            data
        } )
        dispatch( actions.apiCallSuccess( response.data ) )
        if ( onSuccess ) {

            dispatch( {
                type: onSuccess,
                payload: response.data
            } )
        }


    } catch ( error ) {
        dispatch( actions.apiCallFailed( error.message ) )
        if ( onError ) {
            dispatch( {
                type: onError,
                payload: error.message
            } )

        }

    }
}
export default api