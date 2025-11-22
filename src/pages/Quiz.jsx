import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Quiz() {
  const navigate = useNavigate();
  const [editingId, setEditingId] = useState(null);
  const [answers, setAnswers] = useState({});
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const [questions, setQuestions] = useState([
    {
      id: 1,
      label: "Question 1",
      question: "Explain the concept of \"attention mechanism\" in the context of Transformer models.",
      type: "text",
      placeholder: "Type your detailed answer here..."
    },
    {
      id: 2,
      label: "Question 2",
      question: "Which of the following is NOT a type of generative model?",
      type: "multiple",
      options: [
        { text: "Generative Adversarial Network (GAN)", id: "gan" },
        { text: "Support Vector Machine (SVM)", id: "svm" },
        { text: "Variational Autoencoder (VAE)", id: "vae" },
        { text: "Diffusion Model", id: "diffusion" }
      ]
    },
    {
      id: 3,
      label: "Question 3",
      question: "Describe the difference between supervised and unsupervised learning, providing an example for each.",
      type: "text",
      placeholder: "Type your detailed answer here..."
    },
    {
      id: 4,
      label: "Question 4",
      question: "What is the primary purpose of a validation set in machine learning?",
      type: "multiple",
      options: [
        { text: "To train the final model", id: "train" },
        { text: "To evaluate the performance of the model on unseen data", id: "eval" },
        { text: "To tune hyperparameters of the model", id: "tune" },
        { text: "To increase the size of the training dataset", id: "increase" }
      ]
    }
  ]);

  const handleEditQuestion = (id, newQuestion) => {
    setQuestions(questions.map(q => q.id === id ? { ...q, question: newQuestion } : q));
    setEditingId(null);
  };

  const handleAnswer = (questionId, answer) => {
    setAnswers({ ...answers, [questionId]: answer });
  };

  return (
    <div className="min-h-screen bg-[#0d0d0d] py-12 px-6">
      <div className="max-w-2xl mx-auto">
        {/* Back Button */}
        <button 
          onClick={() => navigate('/create')}
          className="text-gray-400 hover:text-white transition mb-8 flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </button>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-2">Advanced AI Concepts Quiz</h1>
          <p className="text-gray-400">Test your knowledge on modern artificial intelligence.</p>
        </div>

        {/* Questions */}
        <div className="space-y-6">
          {questions.map((q) => (
            <div key={q.id} className="bg-[#1a1a1a] border border-[#333333] rounded-lg p-6">
              {/* Question Label and Edit Button */}
              <div className="flex items-center justify-between mb-3">
                <span className="text-blue-400 text-sm font-semibold">{q.label}</span>
                <button
                  onClick={() => setEditingId(editingId === q.id ? null : q.id)}
                  className="text-gray-400 hover:text-white transition"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4m4-6l-8 8m0 0l-4-4m4 4l4-4" />
                  </svg>
                </button>
              </div>

              {/* Question Text - Edit Mode */}
              {editingId === q.id ? (
                <div className="space-y-2 mb-4">
                  <textarea
                    defaultValue={q.question}
                    onBlur={(e) => handleEditQuestion(q.id, e.target.value)}
                    className="w-full bg-[#2a2a2a] border border-[#444444] text-white rounded-lg p-3 focus:outline-none focus:border-blue-500 resize-none"
                    rows="3"
                    autoFocus
                  />
                  <p className="text-xs text-gray-500">Press outside to save</p>
                </div>
              ) : (
                <h3 className="text-white font-semibold mb-4">{q.question}</h3>
              )}

              {/* Answer Area */}
              {q.type === 'text' ? (
                <textarea
                  placeholder={q.placeholder}
                  rows="4"
                  value={answers[q.id] || ''}
                  onChange={(e) => handleAnswer(q.id, e.target.value)}
                  className="w-full bg-[#2a2a2a] border border-[#3a3a3a] text-white rounded-lg p-4 focus:outline-none focus:border-[#444444] resize-none"
                />
              ) : (
                <div className="grid grid-cols-2 gap-3">
                  {q.options.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => handleAnswer(q.id, option.id)}
                      className={`px-4 py-3 rounded-lg transition text-sm text-left font-medium ${
                        answers[q.id] === option.id
                          ? 'bg-blue-600 border border-blue-500 text-white'
                          : 'bg-[#2a2a2a] hover:bg-[#333333] border border-[#3a3a3a] text-white'
                      }`}
                    >
                      {option.text}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Submit Button */}
        <div className="mt-12 flex justify-center">
          <button 
            onClick={() => setShowSuccessPopup(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition"
          >
            Submit Quiz
          </button>
        </div>
      </div>

      {/* Success Popup */}
      {showSuccessPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-[#1a1a1a] border border-[#333333] rounded-lg p-8 max-w-sm mx-auto text-center">
            {/* Success Icon */}
            <div className="mb-4 flex justify-center">
              <div className="bg-green-500 rounded-full p-3 w-16 h-16 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
            
            {/* Success Message */}
            <h2 className="text-2xl font-bold text-white mb-2">Successfully Submitted!</h2>
            <p className="text-gray-400 mb-6">Your quiz has been submitted successfully. Great job!</p>
            
            {/* Buttons */}
            <div className="flex gap-3">
              <button
                onClick={() => {
                  setShowSuccessPopup(false);
                  navigate('/create');
                }}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition"
              >
                Back to Create
              </button>
              <button
                onClick={() => {
                  setShowSuccessPopup(false);
                  setAnswers({});
                }}
                className="flex-1 bg-[#2a2a2a] hover:bg-[#333333] text-white px-4 py-2 rounded-lg font-semibold transition border border-[#3a3a3a]"
              >
                Retake Quiz
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
