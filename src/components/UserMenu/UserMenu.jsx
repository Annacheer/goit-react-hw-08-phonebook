import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';
import css from './UserMenu.module.css';
import { useAuth } from 'components/hooks';
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from '@mui/material/styles';

export default function UserMenu() {
  const dispatch = useDispatch();
  const { user } = useAuth();

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
      <div className={css.wrapper}>
        <p className={css.username}>Welcome, {user.name}</p>
        <Button
          variant="contained"
          size="small"
          type="button"
          onClick={() => dispatch(authOperations.logOut())}
        >
          Logout
        </Button>
      </div>
    </ThemeProvider>
  );
}
