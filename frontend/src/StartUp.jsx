
import { useEffect } from "react";
import { connect } from "react-redux";
// styles
import BaseStyle from "./style/BaseStyle";
import GlobalVariables from "./style/GlobalVariables";
import Themes from "./style/theme/Themes";
// sprites
import SpriteOneCollection from "./Sprites/SpriteOneCollection";
// components
import { gql } from "graphql-request";
// actions
import gqlRequest from "./store/gqlRequest";
// socket
import SocketPoint from "./socket";

const socket = new SocketPoint();
socket.add( 'connect', () => {
    console.log( 'Connected' );
} )


const StartUp = () => {
    const CurrnetTheme = Themes["Light - blue"];
    useEffect( () => {
        gqlRequest( {
            query: gql`query{dateNow}`,
        } )
    }, [] )
    return (
        <>
            <BaseStyle />
            <GlobalVariables />
            <CurrnetTheme />
            <SpriteOneCollection />
        </>
    )
}




// state.entities.settings.config
const mapStateToProps = ( state ) => ( {
} );
const mapDispatchToProps = ( dispatch ) => ( {
} )

export default connect( mapStateToProps, mapDispatchToProps )( StartUp );