import styled from "styled-components";

export const BackgroundImage = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    object-fit: cover;
    z-index: 1;
`;

export const ContainerLogin = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction:column;
    background-color: #d9d9d9;
    width: 100%;
    height: 100vh;
    max-width: 646px;
    position: absolute;
    z-index:2;
    
`;

export const LogoImage = styled.img``;

export const LimitedContainer = styled.div`
    display:flex;
    justify-content: center;
    width:100%;
    max-width: 498px;
    
`;

export const ContainerLoginScreen = styled.div`
    width:100%;
    display: flex;
    justify-content: right;
`;