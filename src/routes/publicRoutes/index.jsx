// libraries
import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom"

// components
import { Login } from '../../components/pages'


const PrivateRoutes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={<Login />} />
            </Switch>
        </Router>
    )
}

export default PrivateRoutes