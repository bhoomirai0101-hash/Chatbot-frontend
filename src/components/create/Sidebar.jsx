import { useState } from 'react';
import Instructions from './sections/Instructions';
import ConversationStarters from './sections/ConversationStarters';
import Knowledge from './sections/Knowledge';
import RecommendedModel from './sections/RecommendedModel';
import Capabilities from './sections/Capabilities';
import Actions from './sections/Actions';

export default function Sidebar() {
  const [activeTab, setActiveTab] = useState('configure');

  return (
    <aside className="w-1/2 bg-[#1a1a1a] border-r border-[#333333] overflow-y-auto flex flex-col">
      {/* Tab Navigation */}
      <div className="border-b border-[#333333] flex gap-0 sticky top-0 bg-[#1a1a1a]">
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
      <div className="p-6 space-y-8 flex-1">
        {activeTab === 'create' && (
          <>
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
