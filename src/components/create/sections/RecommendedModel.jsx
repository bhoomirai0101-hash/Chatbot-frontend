import Dropdown from '../ui/Dropdown';

export default function RecommendedModel() {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <h3 className="text-white font-semibold">Recommended Model</h3>
        <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
        </svg>
      </div>
      <p className="text-xs text-gray-400">
        Recommend a model to the user, which should be used by default for best results.
      </p>
      <Dropdown 
        options={['No Recommended Model - Users will use any model they prefer', 'GPT-4 Turbo', 'GPT-4', 'GPT-3.5']}
      />
    </div>
  );
}
