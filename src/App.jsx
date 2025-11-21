import { Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import CategoryTabs from './components/CategoryTabs'
import FeaturedSection from './components/FeaturedSection'
import TrendingSection from './components/TrendingSection'
import GPTConfig from './pages/create/GPTConfig'
import Quiz from './pages/Quiz'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={
        <div className="flex h-screen bg-[#0d0d0d]">
          <Sidebar />
          <main className="flex-1 overflow-y-auto">
            <Header />
            <div className="max-w-6xl mx-auto px-6 py-8">
              <div className="text-center mb-12">
                <h1 className="text-5xl font-bold mb-4">GPTs</h1>
                <p className="text-gray-400 text-lg">
                  Discover and create custom versions of ChatGPT that combine instructions, extra knowledge,
                  and any combination of skills.
                </p>
              </div>
              
              <SearchBar />
              <CategoryTabs />
              <FeaturedSection />
              <TrendingSection />
            </div>
          </main>
        </div>
      } />
      <Route path="/create" element={<GPTConfig />} />
      <Route path="/quiz" element={<Quiz />} />
    </Routes>
  )
}
