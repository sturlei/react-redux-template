import * as actions from "./gqlActions";
import { store } from "../index";
const gqlRequest = ( obj ) =>
    store.dispatch( actions.gqlCallBegan( obj ) )

export default gqlRequest;