import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCredentials } from '../store/authSlice';

export default function AuthCallback() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = searchParams.get('token');
    const userParam = searchParams.get('user');
    
    if (!token || !userParam) {
      console.error('No token or user data found');
      setError('Authentication failed: Missing credentials');
      setTimeout(() => navigate('/login'), 2000);
      return;
    }

    try {
      // Parse user data from URL parameter
      const user = JSON.parse(decodeURIComponent(userParam));
      
      // Store credentials in Redux store and localStorage
      dispatch(setCredentials({
        user,
        token,
      }));

      // Redirect to home page
      navigate('/');
    } catch (err) {
      console.error('Authentication failed:', err);
      setError('Authentication failed: Invalid data');
      setTimeout(() => navigate('/login'), 2000);
    }
  }, [searchParams, navigate, dispatch]);

  if (error) {
    return (
      <div className="min-h-screen bg-[#0d0d0d] flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="text-red-500 text-xl">❌</div>
          <p className="text-white text-lg">Authentication failed</p>
          <p className="text-gray-400">{error}</p>
          <button
            onClick={() => navigate('/login')}
            className="mt-4 bg-white text-gray-900 px-6 py-2 rounded-lg hover:bg-gray-100"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0d0d0d] flex items-center justify-center">
      <div className="text-center space-y-4">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-white mx-auto"></div>
        <p className="text-white text-lg">Completing authentication...</p>
      </div>
    </div>
  );
}
