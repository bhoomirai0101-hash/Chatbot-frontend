import PropTypes from 'prop-types';

export default function TextArea({ 
  placeholder = '',
  className = '',
  ...props 
}) {
  return (
    <textarea
      placeholder={placeholder}
      className={`w-full bg-[#2a2a2a] border border-[#3a3a3a] text-white rounded-lg p-4 focus:outline-none focus:border-[#444444] focus:ring-1 focus:ring-[#444444] resize-none ${className}`}
      {...props}
    />
  );
}

TextArea.propTypes = {
  placeholder: PropTypes.string,
  className: PropTypes.string,
}
