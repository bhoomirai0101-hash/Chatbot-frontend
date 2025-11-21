import { useNavigate } from 'react-router-dom'

export default function Header() {
  const navigate = useNavigate()

  return (
    <header className="bg-[#1a1a1a] border-b border-[#333333] px-6 py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h2 className="text-xl font-semibold cursor-pointer" onClick={() => navigate('/')}>Explore GPTs</h2>
        <div className="flex items-center gap-3">
          <button className="text-gray-300 hover:text-white transition text-sm">
            My GPTs
          </button>
          <button onClick={() => navigate('/create')} className="bg-white text-black px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 transition flex items-center gap-2">
            <span>+</span>
            Create
          </button>
        </div>
      </div>
    </header>
  )
}
