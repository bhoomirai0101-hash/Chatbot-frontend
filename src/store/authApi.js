import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = 'http://localhost:8000';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
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
      query: () => '/auth/login',
      transformResponse: (response) => {
        // This will be a redirect, so we handle it differently
        return response;
      },
    }),
    
    // Handle OAuth callback
    handleCallback: builder.mutation({
      query: (code) => ({
        url: `/auth/callback?code=${code}`,
        method: 'GET',
      }),
      invalidatesTags: ['User'],
    }),
    
    // Get current user info
    getCurrentUser: builder.query({
      query: () => '/auth/me',
      providesTags: ['User'],
    }),
    
    // Logout
    logout: builder.mutation({
      query: () => ({
        url: '/auth/logout',
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
