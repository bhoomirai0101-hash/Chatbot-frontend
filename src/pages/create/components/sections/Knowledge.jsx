import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Knowledge() {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    setUploadedFiles([...uploadedFiles, ...files]);
  };

  const handleRemoveFile = (index) => {
    setUploadedFiles(uploadedFiles.filter((_, i) => i !== index));
  };

  const handleSubmit = () => {
    if (uploadedFiles.length > 0) {
      navigate('/quiz');
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="space-y-3">
      <h3 className="text-white font-semibold">Knowledge</h3>
      <p className="text-sm text-gray-400">
        Conversations with your GPT can potentially reveal part or all of the files uploaded.
      </p>
      
      <input 
        ref={fileInputRef}
        type="file" 
        multiple 
        onChange={handleFileUpload}
        className="hidden"
      />
      
      <button 
        type="button"
        onClick={handleUploadClick}
        className="bg-[#2a2a2a] hover:bg-[#333333] border border-[#3a3a3a] text-white px-4 py-2 rounded-lg font-medium transition-colors cursor-pointer"
      >
        Upload files
      </button>

      {/* Uploaded Files List */}
      {uploadedFiles.length > 0 && (
        <div className="mt-4 space-y-2">
          <p className="text-xs text-gray-500">Uploaded files:</p>
          <div className="space-y-2 max-h-40 overflow-y-auto">
            {uploadedFiles.map((file, index) => (
              <div key={index} className="bg-[#2a2a2a] border border-[#3a3a3a] rounded p-2 flex items-center justify-between">
                <span className="text-xs text-gray-300 truncate">{file.name}</span>
                <button
                  type="button"
                  onClick={() => handleRemoveFile(index)}
                  className="text-gray-400 hover:text-red-400 transition"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            ))}
          </div>

          {/* Submit Button */}
          <button
            type="button"
            onClick={handleSubmit}
            className="w-full mt-3 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors text-sm"
          >
            Submit
          </button>
        </div>
      )}
    </div>
  );
}
