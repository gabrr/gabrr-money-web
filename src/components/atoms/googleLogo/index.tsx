// libraries
import React from 'react'
import styled from 'styled-components';

// assets
import logo from "../../../assets/google-logo.png";

interface Props {
    className?: string
}

const Logo: React.FC<Props> = ({ className }) => <Img src={logo} className={className} alt="google logo"/>

export default Logo

const Img = styled.img`
    width: 30px;
    height: 30px;
`