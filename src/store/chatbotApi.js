import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_CONFIG } from '../config/api.config';

export const chatbotApi = createApi({
  reducerPath: 'chatbotApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_CONFIG.BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
    timeout: API_CONFIG.TIMEOUTS.DEFAULT,
  }),
  tagTypes: ['Chatbot', 'ChatHistory'],
  endpoints: (builder) => ({
    // Create new chatbot with documents
    createChatbot: builder.mutation({
      query: (formData) => ({
        url: API_CONFIG.ENDPOINTS.CHATBOT.BASE,
        method: 'POST',
        body: formData,
        timeout: API_CONFIG.TIMEOUTS.UPLOAD,
      }),
      invalidatesTags: ['Chatbot'],
    }),

    // Get chatbot by ID
    getChatbot: builder.query({
      query: (id) => API_CONFIG.ENDPOINTS.CHATBOT.BY_ID(id),
      providesTags: (result, error, id) => [{ type: 'Chatbot', id }],
    }),

    // Get all chatbots
    getAllChatbots: builder.query({
      query: () => API_CONFIG.ENDPOINTS.CHATBOT.BASE,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Chatbot', id })),
              { type: 'Chatbot', id: 'LIST' },
            ]
          : [{ type: 'Chatbot', id: 'LIST' }],
    }),

    // Chat with chatbot
    chatWithChatbot: builder.mutation({
      query: ({ chatbotId, query, conversation_history }) => ({
        url: API_CONFIG.ENDPOINTS.CHATBOT.CHAT(chatbotId),
        method: 'POST',
        body: { query, conversation_history },
      }),
      invalidatesTags: (result, error, { chatbotId }) => [
        { type: 'ChatHistory', id: chatbotId },
      ],
    }),

    // Update chatbot
    updateChatbot: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: API_CONFIG.ENDPOINTS.CHATBOT.BY_ID(id),
        method: 'PATCH',
        body: patch,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: 'Chatbot', id }],
    }),

    // Delete chatbot
    deleteChatbot: builder.mutation({
      query: (id) => ({
        url: API_CONFIG.ENDPOINTS.CHATBOT.BY_ID(id),
        method: 'DELETE',
      }),
      invalidatesTags: (result, error, id) => [
        { type: 'Chatbot', id },
        { type: 'Chatbot', id: 'LIST' },
      ],
    }),
  }),
});

export const {
  useCreateChatbotMutation,
  useGetChatbotQuery,
  useGetAllChatbotsQuery,
  useChatWithChatbotMutation,
  useUpdateChatbotMutation,
  useDeleteChatbotMutation,
} = chatbotApi;
