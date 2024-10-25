import styled from "styled-components";
import { Space, Typography } from "antd";

const { Text, Link, Title } = Typography;

export const BackgroundImage = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    object-fit: cover;
    z-index: -1;
    margin:0px;
    
    
`;

export const ContainerLogin = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #d9d9d9;
    flex-direction: column;  
    width: 100%;
    height: 100vh;
    max-width: 646px;
    position: absolute;
    // z-index:0;
    top:0;
    right:0;
    padding:22px;
    
`;

export const LogoImage = styled.img`
width: 202px;
height: 202px;
`;

export const TitleLogin = styled(Title)`
    

`;

export const LimitedContainer = styled.div`
    width:100%;
    max-width: 498px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    
`;

export const ContainerLoginScreen = styled.div`
    width:100%;
    display: flex;
    justify-content: right;
    
`;