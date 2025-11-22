import { useChatbotForm } from '../../../context/ChatbotFormContext';

export default function RecommendedModel() {
  const { formData, updateField } = useChatbotForm();

  const models = [
    { value: '', label: 'No Recommended Model' },
    { value: 'gemini-1.5-flash', label: 'Gemini 1.5 Flash' },
    { value: 'gemini-1.5-pro', label: 'Gemini 1.5 Pro' },
    { value: 'gemini-2.0-flash-exp', label: 'Gemini 2.0 Flash (Experimental)' },
  ];

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <h3 className="text-white font-semibold">Recommended Model</h3>
        <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
        </svg>
      </div>
      <p className="text-xs text-gray-400">
        Select a model that will be used by default for best results.
      </p>
      <select
        value={formData.recommended_model}
        onChange={(e) => updateField('recommended_model', e.target.value)}
        className="w-full bg-[#2a2a2a] border border-[#3a3a3a] text-white px-4 py-2 rounded-lg outline-none focus:border-[#4a4a4a] transition text-sm"
      >
        {models.map(model => (
          <option key={model.value} value={model.value}>
            {model.label}
          </option>
        ))}
      </select>
    </div>
  );
}
