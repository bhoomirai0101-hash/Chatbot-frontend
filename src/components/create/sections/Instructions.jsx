import { useChatbotForm } from '../../../context/ChatbotFormContext';

export default function Instructions() {
  const { formData, updateField } = useChatbotForm();

  return (
    <div className="space-y-3">
      <h3 className="text-white font-semibold">Instructions <span className="text-red-500">*</span></h3>
      <textarea
        value={formData.instructions}
        onChange={(e) => updateField('instructions', e.target.value)}
        placeholder="What does this chatbot do? How does it behave? What should it avoid doing?"
        rows="6"
        className="w-full bg-[#2a2a2a] border border-[#3a3a3a] text-white px-4 py-2 rounded-lg outline-none focus:border-[#4a4a4a] transition resize-none text-sm"
      />
      <p className="text-xs text-gray-400">
        Conversations with your chatbot can potentially include part or all of the instructions provided.
      </p>
    </div>
  );
}
