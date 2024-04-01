import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import useAuth from '../../../../../hooks/useAuth'

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading2 } = useAuth();
    let location = useLocation()
    if (isLoading2) {
        return (
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        )
    }

    if (user.email) {
        return children;
    }

    return (
        <Navigate to='/register' state={{ from: location }} />
    );
    // return user.email ? children : <Navigate to="/register" state={{ from: location }} />

};

export default PrivateRoute
