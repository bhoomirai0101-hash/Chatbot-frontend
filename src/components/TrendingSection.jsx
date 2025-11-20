import TrendingCard from './TrendingCard'

export default function TrendingSection() {
  const trending = [
    {
      id: 1,
      rank: 1,
      title: 'Scholar GPT',
      description: 'Enhance research with 200+ resources and built-in reading skills. Access Google Scholar, PubMed, bioRxiv, arXiv...',
      creator: 'By scholar.ai',
      icon: '🎓',
      badges: []
    },
    {
      id: 2,
      rank: 2,
      title: 'Fitness, Workout & Diet - PhD Coach',
      description: 'IMPROVE QUICKLY ⚡ Get Bonus Gift 🎁 Receive turn-key fitness & workout support plus advanced diet & nutrition...',
      creator: 'By Newegin PhD',
      icon: '💪',
      badges: [
        { text: 'IMPROVE QUICKLY', color: 'bg-green-500' },
        { text: 'Get Bonus Gift', color: 'bg-red-500' }
      ]
    },
  ]

  return (
    <section>
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Trending</h2>
        <p className="text-gray-500">Most popular GPTs by our community</p>
      </div>
      <div className="space-y-4">
        {trending.map((item) => (
          <TrendingCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  )
}
