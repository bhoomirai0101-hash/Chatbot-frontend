export default function Button({ 
  children, 
  variant = 'primary', 
  className = '',
  ...props 
}) {
  const baseStyles = 'px-4 py-2 rounded-lg font-medium transition-colors';
  
  const variants = {
    primary: 'bg-slate-700 hover:bg-slate-600 text-white',
    secondary: 'bg-slate-900 hover:bg-slate-800 text-white border border-slate-700',
    ghost: 'hover:bg-slate-700 text-gray-300 hover:text-white',
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
