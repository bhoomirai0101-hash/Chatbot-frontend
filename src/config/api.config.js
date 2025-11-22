// API Configuration - Single source of truth for all API URLs
export const API_CONFIG = {
  BASE_URL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000',
  ENDPOINTS: {
    // Auth endpoints
    AUTH: {
      LOGIN: '/auth/login',
      CALLBACK: '/auth/callback',
      LOGOUT: '/auth/logout',
      CURRENT_USER: '/auth/me',
    },
    // Chatbot endpoints
    CHATBOT: {
      BASE: '/chatbot/chatbots',
      BY_ID: (id) => `/chatbot/chatbots/${id}`,
      CHAT: (id) => `/chatbot/chatbots/${id}/chat`,
    },
  },
  TIMEOUTS: {
    DEFAULT: 30000, // 30 seconds
    UPLOAD: 120000, // 2 minutes for file uploads
  },
};
