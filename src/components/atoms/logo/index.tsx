import React from 'react'
import styled from 'styled-components';
import logo from "../../../assets/gabrr-money-logo.png";

const Logo: React.FC = () => <Img src={logo} className='logo' alt="gabrr money logo"/>

export default Logo

const Img = styled.img`
    width: 100%;
    max-width: 100px;
`