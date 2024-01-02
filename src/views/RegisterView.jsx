import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';
import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/auth';
import css from './RegisterView.module.css';

export default function RegisterView() {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      authOperations.register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <ThemeProvider theme={theme}>
      <div>
        <h1>Registration page</h1>

        <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
          <label className={css.label}>
            Username
            <TextField
              variant="outlined"
              sx={{
                '& .MuiInputBase-input': {
                  padding: '8px',
                },
              }}
              type="text"
              name="name"
            />
          </label>
          <label className={css.label}>
            Email
            <TextField
              variant="outlined"
              sx={{
                '& .MuiInputBase-input': {
                  padding: '8px',
                },
              }}
              type="email"
              name="email"
            />
          </label>
          <label className={css.label}>
            Password
            <TextField
              variant="outlined"
              sx={{
                '& .MuiInputBase-input': {
                  padding: '8px',
                },
              }}
              type="password"
              name="password"
            />
          </label>
          <Button variant="contained" color="primary" type="submit">
            Register
          </Button>
        </form>
      </div>
    </ThemeProvider>
  );
}
