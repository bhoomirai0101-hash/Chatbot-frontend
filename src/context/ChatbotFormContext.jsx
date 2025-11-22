import { createContext, useContext, useState, useMemo } from 'react';
import PropTypes from 'prop-types';

const ChatbotFormContext = createContext();

export const useChatbotForm = () => {
  const context = useContext(ChatbotFormContext);
  if (!context) {
    throw new Error('useChatbotForm must be used within ChatbotFormProvider');
  }
  return context;
};

export const ChatbotFormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    chatbot_name: '',
    description: '',
    instructions: '',
    conversation_starters: [''],
    is_quiz_mode: false,
    is_active: true,
    recommended_model: '',
    file: null,
    quiz_file: null,
  });

  const updateField = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const updateConversationStarter = (index, value) => {
    setFormData(prev => {
      const starters = [...prev.conversation_starters];
      starters[index] = value;
      return { ...prev, conversation_starters: starters };
    });
  };

  const addConversationStarter = () => {
    setFormData(prev => ({
      ...prev,
      conversation_starters: [...prev.conversation_starters, '']
    }));
  };

  const removeConversationStarter = (index) => {
    setFormData(prev => ({
      ...prev,
      conversation_starters: prev.conversation_starters.filter((_, i) => i !== index)
    }));
  };

  const resetForm = () => {
    setFormData({
      chatbot_name: '',
      description: '',
      instructions: '',
      conversation_starters: [''],
      is_quiz_mode: false,
      is_active: true,
      recommended_model: '',
      file: null,
      quiz_file: null,
    });
  };

  const value = useMemo(
    () => ({
      formData,
      updateField,
      updateConversationStarter,
      addConversationStarter,
      removeConversationStarter,
      resetForm,
    }),
    [formData]
  );

  return (
    <ChatbotFormContext.Provider value={value}>
      {children}
    </ChatbotFormContext.Provider>
  );
};

ChatbotFormProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
