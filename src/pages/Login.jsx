import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsAuthenticated } from '../store/authSlice';
import { API_CONFIG } from '../config/api.config';

export default function Login() {
  const navigate = useNavigate();
  const isAuthenticated = useSelector(selectIsAuthenticated);

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  const handleMicrosoftLogin = () => {
    // Redirect to backend auth endpoint which will redirect to Microsoft
    globalThis.location.href = `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.AUTH.LOGIN}`;
  };

  return (
    <div className="min-h-screen bg-[#0d0d0d] flex items-center justify-center px-4">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-2">Welcome to GPTs</h1>
          <p className="text-gray-400 text-lg">
            Sign in to continue to your custom ChatGPT experience
          </p>
        </div>

        <div className="bg-[#1a1a1a] rounded-lg p-8 shadow-xl border border-gray-800">
          <div className="space-y-6">
            <button
              onClick={handleMicrosoftLogin}
              className="w-full flex items-center justify-center gap-3 bg-white hover:bg-gray-100 text-gray-900 font-semibold py-3 px-4 rounded-lg transition-colors duration-200"
            >
              <svg className="w-5 h-5" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0" y="0" width="10" height="10" fill="#F25022"/>
                <rect x="11" y="0" width="10" height="10" fill="#7FBA00"/>
                <rect x="0" y="11" width="10" height="10" fill="#00A4EF"/>
                <rect x="11" y="11" width="10" height="10" fill="#FFB900"/>
              </svg>
              Sign in with Microsoft
            </button>

            <div className="text-center text-sm text-gray-500">
              <p>Secure authentication via Microsoft Azure AD</p>
            </div>
          </div>
        </div>

        <div className="text-center text-sm text-gray-400">
          <p>
            By signing in, you agree to our Terms of Service and Privacy Policy
          </p>
        </div>
      </div>
    </div>
  );
}
