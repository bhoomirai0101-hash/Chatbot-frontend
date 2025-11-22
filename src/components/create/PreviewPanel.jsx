export default function PreviewPanel() {
  return (
    <main className="flex-1 w-1/2 flex flex-col bg-[#1a1a1a] border-l border-[#333333]">
      {/* Top Controls */}
      <div className="border-b border-[#333333] flex items-center justify-between px-6 py-4 text-gray-300 bg-[#0d0d0d]">
        <div className="flex-1"></div>
        <div className="flex items-center gap-6">
          <button className="hover:text-white">Preview</button>
          <button className="hover:text-white flex items-center gap-2">
            Model 5.1
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        </div>
      </div>

      {/* Preview Content Area */}
      <div className="flex-1 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4 text-gray-500">
          <svg className="w-16 h-16 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m0 0l8 4m-8-4v10l8 4m0-10l8 4m0 0v10l-8 4m0-10l-8 4" />
          </svg>
          <p>Preview area</p>
        </div>
      </div>

      {/* Chat Input */}
      <div className="border-t border-[#333333] p-6 bg-[#1a1a1a]">
        <div className="flex items-center gap-3 bg-[#2a2a2a] rounded-lg px-4 py-3">
          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          <input 
            type="text" 
            placeholder="Ask anything"
            className="bg-transparent flex-1 text-white outline-none placeholder-gray-500"
          />
          <button className="text-gray-400 hover:text-white">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.5 1.5H5.75A4.25 4.25 0 001.5 5.75v8.5A4.25 4.25 0 005.75 18.5h8.5a4.25 4.25 0 004.25-4.25v-4.75" />
            </svg>
          </button>
        </div>
      </div>
    </main>
  );
}
