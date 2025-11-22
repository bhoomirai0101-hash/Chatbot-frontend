import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { logout } from '../store/authSlice';
import { useLogoutMutation } from '../store/authApi';

export default function Header() {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const { user } = useAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [logoutMutation] = useLogoutMutation();

  const handleLogout = async () => {
    try {
      await logoutMutation().unwrap();
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      dispatch(logout());
      navigate('/login');
    }
  };

  return (
    <header className="bg-[#1a1a1a] border-b border-[#333333] px-6 py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h2 className="text-xl font-semibold cursor-pointer" onClick={() => navigate('/home')}>Explore GPTs</h2>
        <div className="flex items-center gap-3">
          <button className="text-gray-300 hover:text-white transition text-sm">
            My GPTs
          </button>
          <button 
            onClick={() => navigate('/create')}
            className="bg-white text-black px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 transition flex items-center gap-2"
          >
            <span>+</span>{' '}
            Create
          </button>
          
          {/* User Menu */}
          <div className="relative">
            <button
              onClick={() => setShowUserMenu(!showUserMenu)}
              className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-[#2a2a2a] transition"
            >
              <div className="w-8 h-8 rounded-full bg-linear-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-semibold">
                {user?.name?.charAt(0) || 'U'}
              </div>
              <span className="text-sm text-gray-300">{user?.name || 'User'}</span>
            </button>

            {showUserMenu && (
              <div className="absolute right-0 mt-2 w-56 bg-[#2a2a2a] rounded-lg shadow-xl border border-gray-700 py-2 z-50">
                <div className="px-4 py-2 border-b border-gray-700">
                  <p className="text-sm font-semibold text-white">{user?.name}</p>
                  <p className="text-xs text-gray-400 truncate">{user?.email}</p>
                </div>
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-[#333333] transition"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
