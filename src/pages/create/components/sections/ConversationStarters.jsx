export default function ConversationStarters() {
  return (
    <div className="space-y-3">
      <h3 className="text-white font-semibold">Conversation starters</h3>
      <div className="bg-[#2a2a2a] border border-[#3a3a3a] rounded-lg p-4 min-h-20 flex items-center justify-between">
        <input 
          type="text" 
          placeholder="Add conversation starter..."
          className="bg-transparent text-gray-400 outline-none flex-1"
        />
        <button className="text-gray-400 hover:text-white">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}
