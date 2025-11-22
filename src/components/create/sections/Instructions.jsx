import TextArea from '../ui/TextArea';

export default function Instructions() {
  return (
    <div className="space-y-3">
      <h3 className="text-white font-semibold">Instructions</h3>
      <TextArea 
        placeholder="What does this GPT do? How does it behave? What should it avoid doing?"
        rows="6"
      />
      <p className="text-xs text-gray-400">
        Conversations with your GPT can potentially include part or all of the instructions provided.
      </p>
    </div>
  );
}
