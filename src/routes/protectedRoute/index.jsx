// libraries
import React from 'react'
import { 
    Route,
    Redirect
} from 'react-router-dom'

// functions
import auth from '../../auth'

const ProtectedRoute = ({ component, path, ...rest }) => (
    <Route {...rest} render={props => 
        auth.isAuthenticated() ? (
            <Route path={path} component={component} />
        ) : (
            <Redirect to={{ pathname: "/login", state: {from: props.location} }} />
        )
    } 
    />    
)

export default ProtectedRoute