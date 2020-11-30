// libraries
import React from 'react'
import styled from 'styled-components';

// assets
import logo from "../../../assets/apple-logo.png";

interface Props {
    className?: string
}

const AppleLogo: React.FC<Props> = ({ className }) => <Img src={logo} className={className} alt="apple logo"/>

export default AppleLogo

const Img = styled.img`
    width: 30px;
    height: 30px;
`