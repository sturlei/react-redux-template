import styled from "styled-components";
import { connect } from "react-redux";

// actions


const SettingsMiniPage = () => {


    return (
        <Wrapper>
            Mini page {'{Settings}'}
        </Wrapper>
    )
};

const Wrapper = styled.div`
`;


const mapStateToProps = ( state ) => ( {

} );
const mapDispatchToProps = ( dispatch ) => ( {

} )

export default connect( mapStateToProps, mapDispatchToProps )( SettingsMiniPage );