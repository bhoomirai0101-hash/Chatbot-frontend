import Checkbox from '../ui/Checkbox';

export default function Capabilities() {
  const capabilities = [
    { id: 'web-search', label: 'Web Search', checked: true },
    { id: 'canvas', label: 'Canvas', checked: true },
    { id: 'image-gen', label: 'Image Generation', checked: true },
    { id: 'code-interpreter', label: 'Code Interpreter & Data Analysis', checked: false },
  ];

  return (
    <div className="space-y-4">
      <h3 className="text-white font-semibold">Capabilities</h3>
      <div className="space-y-3">
        {capabilities.map(cap => (
          <Checkbox 
            key={cap.id}
            label={cap.label}
            checked={cap.checked}
          />
        ))}
      </div>
    </div>
  );
}
