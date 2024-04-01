import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import useAuth from '../../../../../hooks/useAuth';

const AdminRoute = ({ children, ...rest }) => {
    const { user, admin, isLoading3 } = useAuth();
    let location = useLocation()
    if (isLoading3) {
        return (
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        )
    }

    if (user.email && admin) {
        return children;
    }
    console.log(user)
    return (
        <Navigate to='/' state={{ from: location }} />
    );
    // return user.email && admin ? children : <Navigate to="/" state={{ from: location }} />

}

export default AdminRoute