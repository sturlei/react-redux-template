import styled from "styled-components";

const Page404 = () => {
    return (
        <PageWarper>
            404 Page
        </PageWarper>
    )
}


const PageWarper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    background-image: url("/assets/404/dots.svg");
    background-position: right center;
    background-size: auto 100%;
    background-repeat: no-repeat;
`;

export default Page404;