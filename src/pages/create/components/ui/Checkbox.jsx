export default function Checkbox({ 
  label = '',
  checked = false,
  ...props 
}) {
  return (
    <label className="flex items-center gap-3 cursor-pointer">
      <input 
        type="checkbox" 
        checked={checked}
        className="w-4 h-4 bg-slate-900 border border-slate-700 rounded cursor-pointer accent-slate-500"
        {...props}
      />
      <span className="text-gray-300">{label}</span>
    </label>
  );
}
