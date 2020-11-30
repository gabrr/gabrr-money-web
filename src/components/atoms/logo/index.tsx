import React from 'react'
import styled from 'styled-components';
import logo from "../../../assets/gabrr-money-logo.png";

interface Props {
    className?: string
}

const Logo: React.FC<Props> = ({ className }) => <Img className={className} src={logo} alt="gabrr money logo"/>

export default Logo

const Img = styled.img`
    width: 100%;
    max-width: 100px;
`