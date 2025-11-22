import { useChatbotForm } from '../../../context/ChatbotFormContext';

export default function ConversationStarters() {
  const { formData, updateConversationStarter, addConversationStarter, removeConversationStarter } = useChatbotForm();

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="text-white font-semibold">Conversation starters</h3>
        <button
          onClick={addConversationStarter}
          className="text-sm text-blue-400 hover:text-blue-300 transition"
        >
          + Add
        </button>
      </div>
      <div className="space-y-2">
        {formData.conversation_starters.map((starter, index) => (
          <div key={index} className="bg-[#2a2a2a] border border-[#3a3a3a] rounded-lg p-3 flex items-center gap-2">
            <input 
              type="text" 
              value={starter}
              onChange={(e) => updateConversationStarter(index, e.target.value)}
              placeholder="Add conversation starter..."
              className="bg-transparent text-white outline-none flex-1 text-sm"
            />
            {formData.conversation_starters.length > 1 && (
              <button 
                onClick={() => removeConversationStarter(index)}
                className="text-gray-400 hover:text-red-400 transition"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
