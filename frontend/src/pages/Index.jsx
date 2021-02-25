import styled from "styled-components";
import { connect } from "react-redux";
// actions

// components



const Index = () => {

    return (
        <PageWrapper>
            This is the Index page
        </PageWrapper>
    )
};

const PageWrapper = styled.div`
`;

// state.entities.settings.config
const mapStateToProps = ( state ) => ( {

} );
const mapDispatchToProps = ( dispatch ) => ( {

} )

export default connect( mapStateToProps, mapDispatchToProps )( Index );
