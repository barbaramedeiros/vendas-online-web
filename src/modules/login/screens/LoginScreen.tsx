import Input from "../../../shared/inputs/input/Input";
import { BackgroundImage, ContainerLoginScreen, TitleLogin } from "../styles/loginScreen.styles";
import { ContainerLogin } from "../styles/loginScreen.styles";
import { LogoImage } from "../styles/loginScreen.styles";
import { LimitedContainer } from "../styles/loginScreen.styles";
import Button from "../../../shared/buttons/button/Button";
import { useState } from "react";

const LoginScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value)
    }
     const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
         setPassword(event.target.value);
     };
    const handleLogin = () => {
         alert(({username, password}))
     }

    return (
        <div>
            <ContainerLoginScreen>
                <BackgroundImage src=".\public\background.png" />
                <LimitedContainer>
                    <ContainerLogin>
                        <LogoImage src=".\public\logo.jpg" />
                        <TitleLogin level={2} type="secondary">
                            LOGIN
                        </TitleLogin>
                        <Input title="USUARIO" margin=" 32px 0px 0px" onChange={handleUsername} value={username} />
                        <Input type='password' title="SENHA" margin=" 32px 0px 0px" onChange={handlePassword} value={password}/>
                        <Button type="primary" onClick={handleLogin}>ENTRAR</Button>
                    </ContainerLogin>
                </LimitedContainer>
            </ContainerLoginScreen>
        </div>
    );
};

export default LoginScreen;