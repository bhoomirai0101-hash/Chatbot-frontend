import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../store/authSlice';

export const useAuth = () => {
  const user = useSelector(selectCurrentUser);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const token = useSelector((state) => state.auth.token);

  return {
    user,
    isAuthenticated,
    token,
  };
};
