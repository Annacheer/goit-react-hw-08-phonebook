import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { authSelectors } from 'redux/auth';

function PublicRoute({ redirectTo = '/', restricted = false }) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  if (isLoggedIn && restricted) {
    return <Navigate to={redirectTo} />;
  }

  return <Outlet />;
}

export default PublicRoute;
