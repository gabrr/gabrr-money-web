// libraries
import React from 'react'
import styled from "styled-components";
import { COLORS, Logo } from '../../atoms';

interface Props {
    loading: boolean
}

const AppLoadingState: React.FC<Props> = ({ loading }) => {
    return (
        <Div loading={loading}>
            <Logo/>
            <div className="bottom_text">gabrr money</div>
        </Div>
    )
}

export default AppLoadingState

const Div = styled.div<Props>`
    position: absolute;
    width: 100vw;
    height: 100vh;
    left: 0;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .bottom_text {
        margin-top: 50px;
        width: max-content;
        font-weight: 600;
        font-size: 20px;
        color: ${COLORS.primary}
    }
`