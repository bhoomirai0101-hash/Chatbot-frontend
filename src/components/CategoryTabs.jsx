import { useState } from 'react'

export default function CategoryTabs() {
  const [activeTab, setActiveTab] = useState('top-picks')
  
  const categories = [
    { id: 'top-picks', label: 'Top Picks' },
    { id: 'writing', label: 'Writing' },
    { id: 'productivity', label: 'Productivity' },
    { id: 'research', label: 'Research & Analysis' },
    { id: 'education', label: 'Education' },
    { id: 'lifestyle', label: 'Lifestyle' },
    { id: 'dalle', label: 'DALL-E' },
    { id: 'programming', label: 'Programming' },
  ]

  return (
    <div className="mb-12">
      <div className="flex gap-8 border-b border-[#333333] overflow-x-auto pb-0">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveTab(cat.id)}
            className={`pb-3 px-1 text-sm font-medium whitespace-nowrap transition ${
              activeTab === cat.id
                ? 'text-white border-b-2 border-white'
                : 'text-gray-500 hover:text-gray-300'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>
    </div>
  )
}
