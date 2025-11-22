import Sidebar from '../Sidebar';
import PreviewPanel from '../PreviewPanel';
import { useNavigate } from 'react-router-dom';
import { ChatbotFormProvider, useChatbotForm } from '../../../context/ChatbotFormContext';
import { useCreateChatbot } from '../../../hooks/useCreateChatbot';

function MainLayoutContent() {
  const navigate = useNavigate();
  const { formData } = useChatbotForm();
  const { handleCreate, isLoading, error } = useCreateChatbot();

  return (
    <div className="flex flex-col h-screen bg-[#0d0d0d]">
      {/* Header */}
      <header className="border-b border-[#333333] px-6 py-4 flex items-center justify-between bg-[#0d0d0d]">
        <div className="flex items-center gap-4">
          <button onClick={() => navigate('/home')} className="text-gray-400 hover:text-white transition">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div>
            <h1 className="text-xl font-semibold text-white">
              {formData.chatbot_name || 'New GPT'}
            </h1>
            <p className="text-xs text-gray-500">● Draft</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          {error && (
            <span className="text-red-400 text-sm">{error}</span>
          )}
          <button 
            onClick={handleCreate}
            disabled={isLoading}
            className="bg-green-600 hover:bg-green-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white px-6 py-2 rounded-lg font-medium transition"
          >
            {isLoading ? 'Creating...' : 'Create'}
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <PreviewPanel />
      </div>
    </div>
  );
}

export default function MainLayout() {
  return (
    <ChatbotFormProvider>
      <MainLayoutContent />
    </ChatbotFormProvider>
  );
}
