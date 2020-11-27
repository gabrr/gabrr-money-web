import React from 'react'
import { useHistory } from 'react-router-dom'

const Home: React.FC = () => {

    const history = useHistory()

    const linkTo = (path: string) => {
        history.push(path)
    }

    return (
        <div>
            <h1>Home Page</h1>
            <button onClick={() => linkTo('/settings')} ></button>
        </div>
    )
}

export default Home