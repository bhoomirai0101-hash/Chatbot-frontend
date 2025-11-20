export default function TrendingCard({ item }) {
  return (
    <div className="bg-[#1a1a1a] border border-[#2b2b2b] rounded-lg p-4 hover:border-[#444444] transition cursor-pointer">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 flex items-center justify-center text-2xl rounded-full bg-gray-800 shrink-0">
          {item.icon}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-white truncate">{item.title}</h3>
            <span className="text-xs text-gray-500">#{item.rank}</span>
          </div>
          <p className="text-sm text-gray-400 mt-2 line-clamp-2">{item.description}</p>
          <p className="text-xs text-gray-500 mt-3">{item.creator}</p>
          {item.badges?.length > 0 && (
            <div className="flex gap-2 mt-3">
              {item.badges.map((b, i) => (
                <span key={i} className={`text-[10px] px-2 py-1 rounded ${b.color} text-white`}>
                  {b.text}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
