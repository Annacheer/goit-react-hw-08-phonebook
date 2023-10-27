import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';

export const useAuth = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const isRefreshing = useSelector(authSelectors.getIsFetchingCurrent);
  const user = useSelector(authSelectors.getUsername);

  return {
    isLoggedIn,
    isRefreshing,
    user,
  };
};
