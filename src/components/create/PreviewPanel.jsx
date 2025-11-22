import { useChatbotForm } from '../../context/ChatbotFormContext';

export default function PreviewPanel() {
  const { formData } = useChatbotForm();

  return (
    <main className="flex-1 w-1/2 flex flex-col bg-[#1a1a1a] border-l border-[#333333]">
      {/* Top Controls */}
      <div className="border-b border-[#333333] flex items-center justify-between px-6 py-4 text-gray-300 bg-[#0d0d0d]">
        <div className="flex-1"></div>
        <div className="flex items-center gap-6">
          <span className="text-sm">Preview</span>
          <span className="text-sm">
            {formData.recommended_model || 'No model selected'}
          </span>
        </div>
      </div>

      {/* Preview Content Area */}
      <div className="flex-1 overflow-y-auto p-6">
        <div className="max-w-2xl mx-auto space-y-6">
          {/* Chatbot Info */}
          <div className="bg-[#2a2a2a] rounded-lg p-6 border border-[#3a3a3a]">
            <h2 className="text-xl font-semibold text-white mb-2">
              {formData.chatbot_name || 'Untitled Chatbot'}
            </h2>
            <p className="text-gray-400 text-sm mb-4">
              {formData.description || 'No description provided'}
            </p>
            
            {formData.instructions && (
              <div className="mt-4 pt-4 border-t border-[#3a3a3a]">
                <h3 className="text-sm font-medium text-gray-300 mb-2">Instructions</h3>
                <p className="text-sm text-gray-400">{formData.instructions}</p>
              </div>
            )}

            {formData.conversation_starters.some(s => s.trim()) && (
              <div className="mt-4 pt-4 border-t border-[#3a3a3a]">
                <h3 className="text-sm font-medium text-gray-300 mb-3">Conversation Starters</h3>
                <div className="space-y-2">
                  {formData.conversation_starters
                    .filter(s => s.trim())
                    .map((starter, idx) => (
                      <div key={idx} className="bg-[#1a1a1a] rounded px-3 py-2 text-sm text-gray-300">
                        {starter}
                      </div>
                    ))}
                </div>
              </div>
            )}

            <div className="mt-4 pt-4 border-t border-[#3a3a3a] flex items-center gap-4 text-xs text-gray-500">
              {formData.file && (
                <div className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span>Knowledge file uploaded</span>
                </div>
              )}
              {formData.is_quiz_mode && (
                <div className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  <span>Quiz mode enabled</span>
                </div>
              )}
              {formData.is_active && (
                <div className="flex items-center gap-1">
                  <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-green-400">Active</span>
                </div>
              )}
            </div>
          </div>

          {/* Sample Chat Message */}
          <div className="space-y-4">
            <div className="bg-[#2a2a2a] rounded-lg p-4 border border-[#3a3a3a]">
              <p className="text-sm text-gray-300">
                This is how your chatbot will appear to users. Fill in the form on the left to see the preview update.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Input */}
      <div className="border-t border-[#333333] p-6 bg-[#1a1a1a]">
        <div className="flex items-center gap-3 bg-[#2a2a2a] rounded-lg px-4 py-3">
          <input 
            type="text" 
            placeholder="Preview chat input..."
            disabled
            className="bg-transparent flex-1 text-gray-500 outline-none placeholder-gray-600 cursor-not-allowed"
          />
        </div>
      </div>
    </main>
  );
}
