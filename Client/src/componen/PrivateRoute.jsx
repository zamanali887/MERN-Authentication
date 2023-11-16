import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useAuthcontexts } from '../context/Authcontexts';

export default function PrivateRoute({ Component }) {
    const { isAuthenticated } = useAuthcontexts() || {};
    console.log('isAuthenticated', isAuthenticated)
    const getToken = localStorage.getItem("authToken")
    console.log('getToken', getToken)
    const location = useLocation()

    if (!isAuthenticated)
        return <Navigate to="auth/login" state={{ from: location.pathname }} replace />
   
    return (
        <Component />
    )
}
