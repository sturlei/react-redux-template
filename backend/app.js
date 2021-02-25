//builtIn
const fs = require( 'fs' );
const path = require( 'path' );
const express = require( 'express' );
const app = express();
const apolloServer = require( './apolloserver' )
// apollo


//MIDDLEWARES
app.use( express.json() );


//ROUTE USE

app.use( express.static( path.join( __dirname, '../', 'frontend', 'build' ) ) );
app.use( apolloServer )
app.get( '*', function ( req, res ) {
    res.sendFile( path.join( __dirname, '../', 'frontend', 'build', 'index.html' ) );

} );

//----------------------------------------------------------------
module.exports = app;