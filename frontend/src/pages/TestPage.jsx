
import styled from "styled-components";



const TestPage = () => {


    return (
        <PageContainer>
            Test Page
        </PageContainer>

    )
}

const PageContainer = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

`


export default TestPage;