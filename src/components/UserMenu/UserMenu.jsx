import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';
import css from './UserMenu.module.css';
import { useAuth } from 'components/hooks';

export default function UserMenu() {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {user.name}</p>
      <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Logout
      </button>
    </div>
  );
}
