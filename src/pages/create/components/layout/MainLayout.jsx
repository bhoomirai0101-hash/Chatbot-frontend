import Sidebar from '../Sidebar';
import PreviewPanel from '../PreviewPanel';
import { useNavigate } from 'react-router-dom';

export default function MainLayout() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-screen bg-[#0d0d0d]">
      {/* Header */}
      <header className="border-b border-[#333333] px-6 py-4 flex items-center justify-between bg-[#0d0d0d]">
        <div className="flex items-center gap-4">
          <button onClick={() => navigate('/')} className="text-gray-400 hover:text-white transition">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div>
            <h1 className="text-xl font-semibold text-white">New GPT</h1>
            <p className="text-xs text-gray-500">● Draft</p>
          </div>
        </div>
        <button className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-2 rounded-lg font-medium transition">
          Create
        </button>
      </header>

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <PreviewPanel />
      </div>
    </div>
  );
}
