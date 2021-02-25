import graphqlRequest from "graphql-request";
import * as actions from "../gqlActions";
import { url } from "../../URL";
const graphqlUrl = url + "graphql";

const api = ( {
    dispatch
} ) => next => async action => {
    if ( action.type !== actions.gqlCallBegan.type )
        return next( action );

    const {
        query,
        onStart,
        onSuccess,
        onError
    } = action.payload;

    if ( onStart ) dispatch( {
        type: onStart
    } )
    next( action );
    try {
        const response = await graphqlRequest( graphqlUrl,
            query
        )
        console.log( response );
        dispatch( actions.gqlCallSuccess( response ) )
        if ( onSuccess ) {

            dispatch( {
                type: onSuccess,
                payload: response
            } )
        }


    } catch ( error ) {
        dispatch( actions.gqlCallFailed( error.message ) )
        if ( onError ) {
            dispatch( {
                type: onError,
                payload: error.message
            } )

        }

    }
}
export default api