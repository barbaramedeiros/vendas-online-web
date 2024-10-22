import { BackgroundImage } from "../styles/loginScreen.styles";
import { ContainerLogin } from "../styles/loginScreen.styles";
import { LogoImage } from "../styles/loginScreen.styles";
import { LimitedContainer } from "../styles/loginScreen.styles";
const LoginScreen = () => {

    return (
        <div>
            <BackgroundImage src=".\public\background.png" />
            <LimitedContainer>
                <ContainerLogin>
                    <LogoImage src=".\public\logo.jpg" />
                </ContainerLogin>
            </LimitedContainer>
        </div>
    );
};

export default LoginScreen;