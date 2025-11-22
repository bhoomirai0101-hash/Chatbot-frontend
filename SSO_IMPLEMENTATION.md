# SSO Implementation Guide

## Overview
This application uses Microsoft Azure AD for Single Sign-On (SSO) authentication with JWT token-based session management.

## Architecture

### Backend (FastAPI)
- **Auth Routes** (`/auth/*`):
  - `GET /auth/login` - Redirects to Microsoft login page
  - `GET /auth/callback` - Handles OAuth callback, creates/updates user, generates JWT token
  - `GET /auth/me` - Returns current authenticated user info
  - `GET /auth/logout` - Logout endpoint

### Frontend (React + Redux Toolkit)
- **Redux Store**: 
  - `authSlice` - Manages user state, token, and authentication status
  - `authApi` - RTK Query API for auth endpoints
  
- **Pages**:
  - `/login` - Login page with Microsoft SSO button
  - `/auth/callback` - Handles OAuth redirect from backend
  - `/` - Protected home page (requires authentication)

- **Components**:
  - `AuthProvider` - Validates token on app load
  - `ProtectedRoute` - Wrapper for routes requiring authentication
  - `Header` - Displays user info and logout button

## Authentication Flow

1. User clicks "Sign in with Microsoft" button on `/login`
2. Frontend redirects to `http://localhost:8000/auth/login`
3. Backend redirects to Microsoft Azure AD login page
4. User authenticates with Microsoft
5. Microsoft redirects back to `http://localhost:8000/auth/callback?code=...`
6. Backend:
   - Exchanges code for access token
   - Fetches user info from Microsoft Graph API
   - Creates/updates user in database
   - Generates JWT token
   - Redirects to `http://localhost:5173/auth/callback?token=...&user=...`
7. Frontend:
   - Extracts token and user data from URL
   - Stores in Redux store and localStorage
   - Redirects to home page

## Setup Instructions

### Backend Setup

1. Install dependencies:
   ```bash
   cd ChatBot
   pip install -r requirements.txt
   ```

2. Configure environment variables in `.env`:
   ```env
   # Microsoft Azure AD SSO Configuration
   MICROSOFT_CLIENT_ID=your-client-id
   MICROSOFT_TENANT_ID=your-tenant-id
   MICROSOFT_CLIENT_SECRET=your-client-secret
   MICROSOFT_REDIRECT_URI=http://localhost:8000/auth/callback
   MICROSOFT_AUTHORITY=https://login.microsoftonline.com/your-tenant-id

   # JWT Configuration
   JWT_SECRET_KEY=your-secret-key-here
   JWT_ALGORITHM=HS256
   JWT_EXPIRATION_MINUTES=1440
   ```

3. Run the backend:
   ```bash
   uvicorn main:app --reload
   ```

### Frontend Setup

1. Install dependencies:
   ```bash
   cd Frontend/Chatbot-frontend
   npm install
   ```

2. Run the frontend:
   ```bash
   npm run dev
   ```

3. Access the application at `http://localhost:5173`

## Features

✅ Microsoft Azure AD SSO authentication
✅ JWT token-based session management
✅ Automatic token validation on app load
✅ Protected routes requiring authentication
✅ User profile display in header
✅ Logout functionality
✅ Automatic redirect to login for unauthenticated users
✅ Token persistence in localStorage

## Security Notes

- JWT tokens are stored in localStorage
- All API calls include JWT token in Authorization header
- Token expiration is set to 24 hours (configurable)
- Backend validates JWT signature on protected endpoints
- CORS is configured to allow frontend origin

## API Endpoints

### Auth Endpoints

#### GET /auth/login
Redirects to Microsoft login page.

#### GET /auth/callback?code={code}
Handles OAuth callback from Microsoft.

**Response**: Redirects to frontend with token
```
http://localhost:5173/auth/callback?token={jwt_token}&user={user_json}
```

#### GET /auth/me
Returns current user information.

**Headers**: 
```
Authorization: Bearer {jwt_token}
```

**Response**:
```json
{
  "id": 1,
  "email": "user@example.com",
  "name": "John Doe",
  "microsoft_id": "...",
  "is_active": true,
  "created_at": "2024-01-01T00:00:00",
  "last_login": "2024-01-01T00:00:00"
}
```

#### GET /auth/logout
Logout endpoint.

**Response**:
```json
{
  "message": "Logged out successfully"
}
```

## Troubleshooting

### Issue: Redirect URI mismatch
**Solution**: Ensure `MICROSOFT_REDIRECT_URI` in `.env` matches the redirect URI configured in Azure AD app registration.

### Issue: Token validation fails
**Solution**: Check that `JWT_SECRET_KEY` is consistent and not changed between server restarts.

### Issue: CORS errors
**Solution**: Verify that frontend URL is included in CORS allowed origins in `main.py`.

### Issue: User not redirected after login
**Solution**: Check browser console for errors and ensure frontend callback route is properly configured.
