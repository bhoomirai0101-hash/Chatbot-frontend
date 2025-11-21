import { useNavigate } from 'react-router-dom';

export default function Quiz() {
  const navigate = useNavigate();

  const questions = [
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
  ];

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
              {/* Question Label */}
              <div className="flex items-center justify-between mb-3">
                <span className="text-blue-400 text-sm font-semibold">{q.label}</span>
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4m4-6l-8 8m0 0l-4-4m4 4l4-4" />
                </svg>
              </div>

              {/* Question Text */}
              <h3 className="text-white font-semibold mb-4">{q.question}</h3>

              {/* Answer Area */}
              {q.type === 'text' ? (
                <textarea
                  placeholder={q.placeholder}
                  rows="4"
                  className="w-full bg-[#2a2a2a] border border-[#3a3a3a] text-white rounded-lg p-4 focus:outline-none focus:border-[#444444] resize-none"
                />
              ) : (
                <div className="grid grid-cols-2 gap-3">
                  {q.options.map((option) => (
                    <button
                      key={option.id}
                      className="bg-[#2a2a2a] hover:bg-[#333333] border border-[#3a3a3a] text-white px-4 py-3 rounded-lg transition text-sm text-left"
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
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition">
            Submit Quiz
          </button>
        </div>
      </div>
    </div>
  );
}
