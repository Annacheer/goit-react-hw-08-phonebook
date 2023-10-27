import React, { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import Container from './components/Container';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import { authOperations } from './redux/auth';
import { useAuth } from 'components/hooks';
import { Layout } from 'components/Layout';

const HomeView = lazy(() => import('./views/HomeView'));
const RegisterView = lazy(() => import('./views/Register'));
const LoginView = lazy(() => import('./views/Login'));
const ContactsView = lazy(() => import('./views/ContactsView'));

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      {isRefreshing ? (
        <h1>Refreshing user...</h1>
      ) : (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomeView />} />
            <Route
              path="/register"
              element={
                <PublicRoute
                  redirectTo="/contacts"
                  component={<RegisterView />}
                />
              }
            />
            <Route
              path="/login"
              element={
                <PublicRoute redirectTo="/contacts" component={<LoginView />} />
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute
                  redirectTo="/login"
                  component={<ContactsView />}
                />
              }
            />
          </Route>
        </Routes>
      )}
    </Container>
  );
};

export default App;
