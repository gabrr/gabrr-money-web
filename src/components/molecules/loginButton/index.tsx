// libraries
import React from 'react'
import { useHistory } from 'react-router-dom';
import styled from "styled-components";
import auth from '../../../auth';

// constants
import { TEXTS, LOGOS, _COLORS } from './helpers';


interface Props {
    type?: string,
    className?: string
}


const LoginButton: React.FC<Props> = ({ type = 'apple', className }) => {
    const history = useHistory()

    const handleLogin = () => {
        auth.login(() => history.push('/'))
    }

    return (
        <Div type={type} className={className} onClick={handleLogin}>
            <p className="login_button_text">{TEXTS[type]}</p>
            <div className="login_button_logo">{LOGOS[type]}</div>
        </Div>
    )
}

export default LoginButton

const Div = styled.div<Props>`
    height: 40px;
    width: 90%;
    max-width: 320px;
    display: flex;
    cursor: pointer;
    justify-content: space-between;
    align-items: center;
    background-color: ${({ type }: any) => _COLORS.background[type]};
    color: ${({ type }: any) => _COLORS.text[type]};
    border-radius: 8px;
    padding: 7px 0 7px 20px;
    font-size: 16px;

    .login_button_logo {
        background-color: ${({ type }: any) => _COLORS.buttonBg[type]};
        height: 40px;
        padding: 7px 26px;
        display: flex;
        align-items: center;
        border-radius: 8px;
    }

`