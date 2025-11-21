export default function TabButton({ 
  active = false, 
  children,
  ...props 
}) {
  return (
    <button
      className={`px-6 py-3 font-medium transition-all border-b-2 ${
        active
          ? 'text-white border-white'
          : 'text-gray-400 border-transparent hover:text-gray-300'
      }`}
      {...props}
    >
      {children}
    </button>
  );
}
