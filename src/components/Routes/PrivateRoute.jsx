import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Navigate, useNavigate } from 'react-router-dom';
import LinearProgress from '@mui/material/LinearProgress';


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)

    if (loading) {
        return <LinearProgress />
    }

    if (user) {
        return children
    }
    return <Navigate to={'/login'}></Navigate>

};

export default PrivateRoute;