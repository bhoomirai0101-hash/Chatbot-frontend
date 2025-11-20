import GPTCard from './GPTCard'

export default function FeaturedSection() {
  const featured = [
    {
      id: 1,
      title: 'Video AI by invideo',
      description: '4.0 ⭐ · AI video maker GPT (Supercharged with Sora 2) · generate engaging videos with...',
      creator: 'By invideo.io',
      icon: '🎥',
      bgColor: 'from-purple-600 to-blue-600'
    },
    {
      id: 2,
      title: 'Expedia',
      description: 'Bring your trip plans to life – get there, stay there, find things to see and do.',
      creator: 'By expedia.com',
      icon: '✈️',
      bgColor: 'from-yellow-400 to-yellow-600'
    },
    {
      id: 3,
      title: 'Canva',
      description: 'Effortlessly design anything: presentations, logos, social media posts and more.',
      creator: 'By community builder',
      icon: '🎨',
      bgColor: 'from-blue-400 to-blue-600'
    },
    {
      id: 4,
      title: 'Scholar AI',
      description: 'AI Research Assistant – search and review 200M+ scientific papers, patents, and books. Research...',
      creator: 'By community builder',
      icon: '🔬',
      bgColor: 'from-teal-400 to-teal-600'
    },
  ]

  return (
    <section className="mb-16">
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Featured</h2>
        <p className="text-gray-500">Curated top picks from this week</p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {featured.map((gpt) => (
          <GPTCard key={gpt.id} gpt={gpt} />
        ))}
      </div>
    </section>
  )
}
