import { useState } from 'react';
import { useChatbotForm } from '../../context/ChatbotFormContext';
import Instructions from './sections/Instructions';
import ConversationStarters from './sections/ConversationStarters';
import Knowledge from './sections/Knowledge';
import RecommendedModel from './sections/RecommendedModel';
import Capabilities from './sections/Capabilities';
import Actions from './sections/Actions';

export default function Sidebar() {
  const [activeTab, setActiveTab] = useState('configure');
  const { formData, updateField } = useChatbotForm();

  return (
    <aside className="w-1/2 bg-[#1a1a1a] border-r border-[#333333] overflow-y-auto flex flex-col">
      {/* Tab Navigation */}
      <div className="border-b border-[#333333] flex gap-0 sticky top-0 bg-[#1a1a1a] z-10">
        <button
          onClick={() => setActiveTab('create')}
          className={`flex-1 px-4 py-3 font-medium transition-all text-center ${
            activeTab === 'create'
              ? 'text-white bg-[#2a2a2a]'
              : 'text-gray-400 hover:text-gray-300 bg-[#1a1a1a]'
          }`}
        >
          Create
        </button>
        <button
          onClick={() => setActiveTab('configure')}
          className={`flex-1 px-4 py-3 font-medium transition-all text-center ${
            activeTab === 'configure'
              ? 'text-white bg-[#2a2a2a]'
              : 'text-gray-400 hover:text-gray-300 bg-[#1a1a1a]'
          }`}
        >
          Configure
        </button>
      </div>

      {/* Content Sections */}
      <div className="p-6 space-y-6 flex-1">
        {activeTab === 'create' && (
          <>
            {/* Name Field */}
            <div className="space-y-3">
              <h3 className="text-white font-semibold">Name <span className="text-red-500">*</span></h3>
              <input
                type="text"
                value={formData.chatbot_name}
                onChange={(e) => updateField('chatbot_name', e.target.value)}
                placeholder="Enter chatbot name..."
                className="w-full bg-[#2a2a2a] border border-[#3a3a3a] text-white px-4 py-2 rounded-lg outline-none focus:border-[#4a4a4a] transition"
              />
            </div>

            {/* Description Field */}
            <div className="space-y-3">
              <h3 className="text-white font-semibold">Description <span className="text-red-500">*</span></h3>
              <textarea
                value={formData.description}
                onChange={(e) => updateField('description', e.target.value)}
                placeholder="Describe what this chatbot does..."
                rows="3"
                className="w-full bg-[#2a2a2a] border border-[#3a3a3a] text-white px-4 py-2 rounded-lg outline-none focus:border-[#4a4a4a] transition resize-none"
              />
            </div>

            <Instructions />
            <ConversationStarters />
            <Knowledge />
            <RecommendedModel />
            <Capabilities />
            <Actions />
          </>
        )}
        {activeTab === 'configure' && (
          <>
            {/* Name Field */}
            <div className="space-y-3">
              <h3 className="text-white font-semibold">Name <span className="text-red-500">*</span></h3>
              <input
                type="text"
                value={formData.chatbot_name}
                onChange={(e) => updateField('chatbot_name', e.target.value)}
                placeholder="Enter chatbot name..."
                className="w-full bg-[#2a2a2a] border border-[#3a3a3a] text-white px-4 py-2 rounded-lg outline-none focus:border-[#4a4a4a] transition"
              />
            </div>

            {/* Description Field */}
            <div className="space-y-3">
              <h3 className="text-white font-semibold">Description <span className="text-red-500">*</span></h3>
              <textarea
                value={formData.description}
                onChange={(e) => updateField('description', e.target.value)}
                placeholder="Describe what this chatbot does..."
                rows="3"
                className="w-full bg-[#2a2a2a] border border-[#3a3a3a] text-white px-4 py-2 rounded-lg outline-none focus:border-[#4a4a4a] transition resize-none"
              />
            </div>

            <Instructions />
            <ConversationStarters />
            <Knowledge />
            <RecommendedModel />
            <Capabilities />
            <Actions />
          </>
        )}
      </div>
    </aside>
  );
}
