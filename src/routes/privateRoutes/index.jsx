// libraries
import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom"

// components
import { Home } from '../../components/pages'

const PrivateRoutes = ({ exact, path, component, isAuthenticated }) => {
    return (
        <Route exact path="/" component={() => <h1>oi</h1> } />
    )
}

export default PrivateRoutes