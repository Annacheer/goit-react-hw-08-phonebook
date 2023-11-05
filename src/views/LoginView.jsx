import React from 'react';
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/auth';
import css from './LoginView.module.css';

export default function LoginView() {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      authOperations.logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: '#1976d2',
        contrastText: '#fff',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div>
        <h1>Login Page</h1>

        <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
          <label className={css.label}>
            Email
            <input type="email" name="email" />
          </label>
          <label className={css.label}>
            Password
            <input type="password" name="password" />
          </label>
          <Button variant="contained" color="primary" type="submit">
            Log In
          </Button>
        </form>
      </div>
    </ThemeProvider>
  );
}
