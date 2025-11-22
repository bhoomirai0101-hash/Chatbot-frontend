"use client"

import { useState } from "react"
import PropTypes from "prop-types"

export default function Sidebar({ onNavigate, currentPage }) {
  const [activeMenu, setActiveMenu] = useState("new-chat")

  const menuItems = [
    {
      icon: "M20 10c0 7.485-5.82 13.5-13 13.5S-6 17.485-6 10 -1.18-3.5 6-3.5s13 6.015 13 13.5z",
      label: "New chat",
      id: "new-chat",
    },
    {
      icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
      label: "Search chats",
      id: "search",
    },
    {
      icon: "M4 6h16M4 12h16M4 18h16",
      label: "Library",
      id: "library",
    },
    {
      icon: "M13 10V3L4 14h7v7l9-11h-7z",
      label: "GPTs",
      id: "gpts",
    },
    {
      icon: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7m-6 4l2 2m0 0l2-2m-2 2v-6m-8 6l2-2m0 0l-2-2m2 2v6",
      label: "Projects",
      id: "projects",
    },
  ]

  const chatHistory = [
    "New chat",
    "Extract chatbot UI steps",
    "Dmea",
    "Dmea",
    "AI exam prep curriculum",
    "Chatbot prompt rephrasing",
    "Free Copilot Alternatives",
    "Google Colab config logging",
    "Expert systems review",
    "Expert system notes",
    "Frame request",
    "Unit 3 exam prep",
    "Message refinement sugges...",
    "Chatbot features update",
    "Platinum sponsorship broch...",
    "Message framing request",
    "Prepare guest questions",
    "Bhoomi Rai",
  ]

  const handleMenuClick = (id) => {
    setActiveMenu(id)
    if (id === "gpts") {
      onNavigate("create")
    }
  }

  return (
    <aside className="w-64 bg-[#1a1a1a] border-r border-[#333333] flex flex-col h-screen">
      {/* Top Section */}
      <div className="p-4 border-b border-[#333333]">
        <div className="flex items-center gap-2 mb-4 text-gray-500 hover:text-white transition">
          <div className="w-6 h-6 rounded bg-gray-700"></div>
          <div className="w-6 h-6 rounded bg-gray-700"></div>
        </div>
      </div>

      {/* Menu Items */}
      <nav className="flex-1 overflow-y-auto">
        <div className="px-3 py-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleMenuClick(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition mb-1 ${
                activeMenu === item.id ? "bg-gray-800 text-white" : "text-gray-400 hover:bg-gray-800 hover:text-white"
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
              </svg>
              <span className="text-sm">{item.label}</span>
            </button>
          ))}
        </div>

        {/* Divider */}
        <div className="px-3 py-3">
          <div className="text-xs text-gray-600 font-semibold mb-3">Chats</div>
          {chatHistory.map((chat, idx) => (
            <div
              key={idx}
              className="text-xs text-gray-500 px-3 py-2 rounded hover:bg-gray-800 hover:text-gray-300 transition truncate cursor-pointer"
            >
              {chat}
            </div>
          ))}
        </div>
      </nav>

      {/* Bottom User Section */}
      <div className="p-4 border-t border-[#333333]">
        <div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-800 transition cursor-pointer">
          <div className="w-8 h-8 rounded-full bg-gray-700"></div>
          <span className="text-sm truncate">Bhoomi Rai</span>
        </div>
      </div>
    </aside>
  )
}

Sidebar.propTypes = {
  onNavigate: PropTypes.func.isRequired,
  currentPage: PropTypes.string,
}
