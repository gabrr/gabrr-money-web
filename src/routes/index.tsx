// libraries
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// types and hooks
import { StateTypes } from '../redux/stateTypes'
import { useSelector } from 'react-redux'

// compoments
import PrivateRoutes from "./privateRoutes"
// import PublicRoutes from "./publicRoutes"


const Routes = () => {
    return (
        <Router>
            <Switch>
                <PrivateRoutes exact path="/" component={() => <h1>oi testando aqui</h1> } />
            </Switch>
        </Router>
    )
}

export default Routes