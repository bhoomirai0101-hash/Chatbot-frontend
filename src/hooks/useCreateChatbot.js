import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCreateChatbotMutation } from '../store/chatbotApi';
import { useChatbotForm } from '../context/ChatbotFormContext';

/**
 * Custom hook for creating chatbots with validation and error handling
 * Handles form submission, validation, and API communication
 */
export const useCreateChatbot = () => {
  const navigate = useNavigate();
  const { formData, resetForm } = useChatbotForm();
  const [createChatbot, { isLoading, error: apiError }] = useCreateChatbotMutation();
  const [validationError, setValidationError] = useState(null);

  const validateForm = useCallback(() => {
    if (!formData.chatbot_name?.trim()) {
      return 'Chatbot name is required';
    }
    if (!formData.description?.trim()) {
      return 'Description is required';
    }
    if (!formData.instructions?.trim()) {
      return 'Instructions are required';
    }
    if (!formData.file) {
      return 'Please upload a knowledge file';
    }
    return null;
  }, [formData]);

  const prepareFormData = useCallback(() => {
    const formDataToSend = new FormData();
    formDataToSend.append('chatbot_name', formData.chatbot_name);
    formDataToSend.append('description', formData.description);
    formDataToSend.append('instructions', formData.instructions);
    formDataToSend.append('is_quiz_mode', formData.is_quiz_mode.toString());
    formDataToSend.append('is_active', formData.is_active.toString());

    // Add conversation starters (filter empty ones)
    const validStarters = formData.conversation_starters.filter(s => s?.trim());
    if (validStarters.length > 0) {
      // Always append as multiple keys, even if only one
      for (const starter of validStarters) {
        formDataToSend.append('conversation_starters', starter);
      }
    }

    // Add recommended model if set
    if (formData.recommended_model) {
      formDataToSend.append('recommended_model', formData.recommended_model);
    }

    // Add files
    formDataToSend.append('file', formData.file);
    if (formData.quiz_file) {
      formDataToSend.append('quiz_file', formData.quiz_file);
    }

    return formDataToSend;
  }, [formData]);

  const handleCreate = useCallback(async () => {
    // Validate form
    const error = validateForm();
    if (error) {
      setValidationError(error);
      return;
    }

    setValidationError(null);

    try {
      const formDataToSend = prepareFormData();
      const result = await createChatbot(formDataToSend).unwrap();

      console.log('Chatbot created successfully:', result);
      resetForm();
      
      // Show success message
      alert(`Chatbot created successfully! ID: ${result.chatbot_id}`);
      
      // Navigate to home
      navigate('/home');
    } catch (err) {
      console.error('Error creating chatbot:', err);
      // Extract error message properly
      let errorMsg = 'Failed to create chatbot';
      if (err.data?.detail) {
        if (Array.isArray(err.data.detail)) {
          errorMsg = err.data.detail.map(e => e.msg).join(', ');
        } else if (typeof err.data.detail === 'string') {
          errorMsg = err.data.detail;
        }
      } else if (err.message) {
        errorMsg = err.message;
      }
      setValidationError(errorMsg);
    }
  }, [validateForm, prepareFormData, createChatbot, resetForm, navigate]);

  const errorMessage = validationError || 
    (apiError?.data?.detail ? 
      (Array.isArray(apiError.data.detail) ? 
        apiError.data.detail.map(e => e.msg).join(', ') : 
        apiError.data.detail) : 
      apiError?.message);

  return {
    handleCreate,
    isLoading,
    error: errorMessage,
  };
};
