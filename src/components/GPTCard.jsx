export default function GPTCard({ gpt }) {
  return (
    <div className="bg-[#1a1a1a] border border-[#333333] rounded-lg p-4 hover:border-[#555555] transition cursor-pointer group">
      <div className="flex items-start gap-4">
        <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${gpt.bgColor} flex items-center justify-center text-4xl flex-shrink-0`}>
          {gpt.icon}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-white group-hover:text-blue-400 transition">{gpt.title}</h3>
          <p className="text-sm text-gray-400 mt-2 line-clamp-2">{gpt.description}</p>
          <p className="text-xs text-gray-500 mt-3">{gpt.creator}</p>
        </div>
      </div>
    </div>
  )
}
