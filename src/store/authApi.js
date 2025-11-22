import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_CONFIG } from '../config/api.config';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_CONFIG.BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['User'],
  endpoints: (builder) => ({
    // Get Microsoft login URL
    getLoginUrl: builder.query({
      query: () => API_CONFIG.ENDPOINTS.AUTH.LOGIN,
      transformResponse: (response) => {
        // This will be a redirect, so we handle it differently
        return response;
      },
    }),
    
    // Handle OAuth callback
    handleCallback: builder.mutation({
      query: (code) => ({
        url: `${API_CONFIG.ENDPOINTS.AUTH.CALLBACK}?code=${code}`,
        method: 'GET',
      }),
      invalidatesTags: ['User'],
    }),
    
    // Get current user info
    getCurrentUser: builder.query({
      query: () => API_CONFIG.ENDPOINTS.AUTH.CURRENT_USER,
      providesTags: ['User'],
    }),
    
    // Logout
    logout: builder.mutation({
      query: () => ({
        url: API_CONFIG.ENDPOINTS.AUTH.LOGOUT,
        method: 'GET',
      }),
      invalidatesTags: ['User'],
    }),
  }),
});

export const {
  useGetLoginUrlQuery,
  useHandleCallbackMutation,
  useGetCurrentUserQuery,
  useLogoutMutation,
} = authApi;
