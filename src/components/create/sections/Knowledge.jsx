import { useRef } from 'react';
import { useChatbotForm } from '../../../context/ChatbotFormContext';

export default function Knowledge() {
  const { formData, updateField } = useChatbotForm();
  const fileInputRef = useRef(null);
  const quizFileInputRef = useRef(null);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      updateField('file', file);
    }
  };

  const handleQuizFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      updateField('quiz_file', file);
    }
  };

  const handleRemoveFile = () => {
    updateField('file', null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleRemoveQuizFile = () => {
    updateField('quiz_file', null);
    if (quizFileInputRef.current) {
      quizFileInputRef.current.value = '';
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-white font-semibold">Knowledge <span className="text-red-500">*</span></h3>
        <p className="text-sm text-gray-400 mt-1">
          Upload documents that the chatbot will use to answer questions.
        </p>
      </div>
      
      {/* Main Knowledge File */}
      <div className="space-y-2">
        <input 
          ref={fileInputRef}
          type="file" 
          onChange={handleFileUpload}
          accept=".txt,.pdf,.doc,.docx"
          className="hidden"
        />
        
        <button 
          type="button"
          onClick={() => fileInputRef.current?.click()}
          className="bg-[#2a2a2a] hover:bg-[#333333] border border-[#3a3a3a] text-white px-4 py-2 rounded-lg font-medium transition-colors text-sm"
        >
          {formData.file ? 'Change File' : 'Upload Knowledge File'}
        </button>

        {formData.file && (
          <div className="bg-[#2a2a2a] border border-[#3a3a3a] rounded p-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm text-gray-300">{formData.file.name}</span>
            </div>
            <button
              type="button"
              onClick={handleRemoveFile}
              className="text-gray-400 hover:text-red-400 transition"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        )}
      </div>

      {/* Quiz Mode Toggle */}
      <div className="flex items-center gap-3 pt-2">
        <input
          id="quiz-mode"
          type="checkbox"
          checked={formData.is_quiz_mode}
          onChange={(e) => updateField('is_quiz_mode', e.target.checked)}
          className="w-4 h-4 rounded bg-[#2a2a2a] border-[#3a3a3a] text-blue-600 focus:ring-blue-500 focus:ring-2"
        />
        <label htmlFor="quiz-mode" className="text-sm text-gray-300">Enable Quiz Mode</label>
      </div>

      {/* Quiz File Upload (only show if quiz mode enabled) */}
      {formData.is_quiz_mode && (
        <div className="space-y-2 pl-7 border-l-2 border-[#3a3a3a]">
          <p className="text-xs text-gray-400">Upload quiz questions file (optional)</p>
          
          <input 
            ref={quizFileInputRef}
            type="file" 
            onChange={handleQuizFileUpload}
            accept=".txt,.json"
            className="hidden"
          />
          
          <button 
            type="button"
            onClick={() => quizFileInputRef.current?.click()}
            className="bg-[#2a2a2a] hover:bg-[#333333] border border-[#3a3a3a] text-white px-4 py-2 rounded-lg font-medium transition-colors text-sm"
          >
            {formData.quiz_file ? 'Change Quiz File' : 'Upload Quiz File'}
          </button>

          {formData.quiz_file && (
            <div className="bg-[#2a2a2a] border border-[#3a3a3a] rounded p-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm text-gray-300">{formData.quiz_file.name}</span>
              </div>
              <button
                type="button"
                onClick={handleRemoveQuizFile}
                className="text-gray-400 hover:text-red-400 transition"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
