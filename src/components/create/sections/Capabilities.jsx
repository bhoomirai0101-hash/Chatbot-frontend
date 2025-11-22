import { useChatbotForm } from '../../../context/ChatbotFormContext';

export default function Capabilities() {
  const { formData, updateField } = useChatbotForm();

  return (
    <div className="space-y-4">
      <h3 className="text-white font-semibold">Settings</h3>
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <input
            id="is-active"
            type="checkbox"
            checked={formData.is_active}
            onChange={(e) => updateField('is_active', e.target.checked)}
            className="w-4 h-4 rounded bg-[#2a2a2a] border-[#3a3a3a] text-blue-600 focus:ring-blue-500 focus:ring-2"
          />
          <label htmlFor="is-active" className="text-sm text-gray-300">Activate chatbot immediately</label>
        </div>
        <p className="text-xs text-gray-400 pl-7">
          When enabled, the chatbot will be available for use right after creation.
        </p>
      </div>
    </div>
  );
}
