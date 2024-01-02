import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';
import css from './UserMenu.module.css';
import { useAuth } from 'components/hooks';
import Button from '@mui/material/Button';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../theme';

export default function UserMenu() {
  const dispatch = useDispatch();
  const { user } = useAuth();

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
