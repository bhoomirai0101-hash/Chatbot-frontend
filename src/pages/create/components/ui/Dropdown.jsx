export default function Dropdown({ 
  label = '',
  options = [],
  defaultValue = options[0],
  ...props 
}) {
  return (
    <select
      defaultValue={defaultValue}
      className="w-full bg-[#2a2a2a] border border-[#3a3a3a] text-white rounded-lg p-3 focus:outline-none focus:border-[#444444] cursor-pointer"
      {...props}
    >
      {options.map((option, idx) => (
        <option key={idx} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}
