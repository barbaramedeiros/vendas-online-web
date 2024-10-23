import Input from "../../../shared/inputs/input/input"
import { BackgroundImage, ContainerLoginScreen } from "../styles/loginScreen.styles";
import { ContainerLogin } from "../styles/loginScreen.styles";
import { LogoImage } from "../styles/loginScreen.styles";
import { LimitedContainer } from "../styles/loginScreen.styles";


const LoginScreen = () => {

    return (
        <div>
            <ContainerLoginScreen>
                <BackgroundImage src=".\public\background.png" />
                <LimitedContainer>
                    <ContainerLogin>
                        <LogoImage src=".\public\logo.jpg" />
                        <Input title="USUARIO"  />
                        <Input title="SENHA" />
                    </ContainerLogin>
                </LimitedContainer>
            </ContainerLoginScreen>
        </div>
    );
};

export default LoginScreen;