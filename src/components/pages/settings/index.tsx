import React from 'react'
import { useHistory } from 'react-router-dom'

const Settings: React.FC = () => {
    const history = useHistory()

    const linkTo = (path: string) => {
        history.push(path)
    }

    return (
        <div>
           <h1>Settings page</h1> 
           <button onClick={() => linkTo('/')} ></button>
        </div>
    )
}

export default Settings