import React from 'react'
import styled from 'styled-components'
import { DATA } from '../../../utils/mocks/cards'
import { COLORS } from '../../atoms'

const Home: React.FC = () => {


    return (
        <Div>
            <h1>Home Page</h1>
            <div className="card_container">
                {
                    DATA.map(({ title, valueSpent, budget }) => <div className="card">
                        <div className="card_title"> {title} </div>
                        <CardValueSpent budget={budget} valueSpent={valueSpent} > R$ {valueSpent} </CardValueSpent>
                    </div>)
                } 
            </div>

        </Div>
    )
}

export default Home

const Div = styled.div`
    color: ${COLORS.textForLightBg};

    h1 {
        text-align: center;
        margin-top: 30px;
    }

    .card_container {
        width: 95%;
        margin: auto;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 3vw;
    }
    .card {
        background-color: white;
        border-radius: 15px;
        padding: 20px 0 20px 0;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        box-shadow: 0 0 13px -10px rgba(0, 0, 0, 0.4);

        .card_title {
            margin-bottom: 10px;
        }
    }
`

interface CardValueSpentProps {
    budget: number,
    valueSpent: number,
}

const CardValueSpent = styled.div<CardValueSpentProps>`
    color: ${({ budget, valueSpent }) => budget > valueSpent ? COLORS.positive : COLORS.negative}
`