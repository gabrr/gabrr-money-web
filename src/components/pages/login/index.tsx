import React from 'react'
import styled from "styled-components";
import Logo from '../../atoms/logo';

const Login: React.FC = () => {
    return (
        <Div>
            <Logo/>
            <h1>Seja muito bem-vindo!</h1>
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

    .logo {
        margin-top: 15vh;
    }

`