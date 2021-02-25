

import moment from "moment";
const app = require( "./app" );
const port = 8080;

const http = require( 'http' ).Server( app );
const io = require( 'socket.io' )( http, {
    cors: {
        origin: "*",
    }
} );


io.on( 'connection', socket => {

} )


http.listen( port, () => {
    console.log( `Open at http://localhost:${port}/` );
} )