// libraries
import React from 'react'
import styled from "styled-components";

// components
import Logo from '../../atoms/logo';
import { LoginButton } from '../../molecules';

const Login: React.FC = () => {
    return (
        <Div>
            <Logo className="gabrr_logo"/>
            <h1>Seja muito bem-vindo!</h1>
            <LoginButton type="google" className="login_button" />
            <LoginButton type="apple" className="login_button" />
        </Div>
    )
}

export default Login

const Div = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .gabrr_logo {
        margin-top: 15vh;
    }

    h1 {
        margin-bottom: 20vh; 
    }

    .login_button {
        margin: 9px auto;    
    }

`