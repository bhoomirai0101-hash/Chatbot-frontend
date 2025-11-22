import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGetCurrentUserQuery } from '../store/authApi';
import { setUser, logout, selectToken } from '../store/authSlice';
import PropTypes from 'prop-types';

function AuthProvider({ children }) {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  
  const { data: userData, error } = useGetCurrentUserQuery(undefined, {
    skip: !token, // Only run query if token exists
  });

  useEffect(() => {
    if (userData) {
      dispatch(setUser(userData));
    }
    
    if (error) {
      // Token is invalid, logout user
      dispatch(logout());
    }
  }, [userData, error, dispatch]);

  return children;
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;
