# Testing SSO Implementation

## Quick Test Steps

### 1. Start Backend Server
```bash
cd ChatBot
# Activate virtual environment if needed
# On Windows PowerShell:
.\myvenv\Scripts\Activate.ps1

# Run the server
uvicorn main:app --reload
```

Backend should be running at: `http://localhost:8000`

### 2. Start Frontend Development Server
```bash
cd Frontend/Chatbot-frontend
npm run dev
```

Frontend should be running at: `http://localhost:5173`

### 3. Test Authentication Flow

1. **Open Browser**: Navigate to `http://localhost:5173`
   - Should automatically redirect to `/login` page

2. **Login Page**: 
   - You should see a clean login page with "Sign in with Microsoft" button
   - Click the button

3. **Microsoft Login**:
   - Browser will redirect to Microsoft Azure AD login page
   - Enter your Microsoft credentials
   - Grant permissions if prompted

4. **Callback & Redirect**:
   - After successful authentication, you'll be redirected to the callback page
   - Brief loading state while processing authentication
   - Automatically redirected to home page

5. **Authenticated Home Page**:
   - You should see the main GPTs explorer page
   - Top right corner shows your user avatar and name
   - Click on your name/avatar to see user menu with logout option

6. **Logout**:
   - Click logout in the user menu
   - Should be redirected back to login page
   - Token removed from localStorage

### 4. Test Token Persistence

1. Login successfully
2. Refresh the page (F5)
3. Should remain logged in (not redirected to login)
4. User information should persist

### 5. Test Protected Routes

1. Logout if logged in
2. Try to manually navigate to `http://localhost:5173/`
3. Should be automatically redirected to `/login`
4. After login, should be redirected back to home

## Expected Behavior Checklist

- ✅ Unauthenticated users redirected to login
- ✅ Login button redirects to Microsoft OAuth
- ✅ Successful login creates user in database
- ✅ Token stored in localStorage
- ✅ User info displayed in header
- ✅ Token persists across page refreshes
- ✅ Logout clears token and redirects to login
- ✅ Protected routes inaccessible without auth
- ✅ Invalid/expired tokens trigger logout

## Debugging

### Check Browser Console
- Open DevTools (F12)
- Look for any error messages
- Check Network tab for API calls

### Check Redux State
- Install Redux DevTools extension
- View auth state (user, token, isAuthenticated)

### Check localStorage
- Open DevTools > Application > Local Storage
- Should see 'token' key with JWT value

### Backend Logs
- Check terminal running uvicorn
- Look for authentication-related logs
- Verify database user creation

## Common Issues

### Issue: "Redirect URI mismatch"
- Check Azure AD app registration
- Ensure redirect URI is exactly: `http://localhost:8000/auth/callback`

### Issue: "CORS error"
- Verify backend CORS middleware includes frontend URL
- Check `main.py` allows `http://localhost:5173`

### Issue: "Token validation failed"
- Check JWT_SECRET_KEY in backend .env
- Ensure it's consistent

### Issue: "User not redirected after login"
- Check browser console for JavaScript errors
- Verify all routes are properly configured

## API Testing (Optional)

### Test endpoints with curl:

```bash
# Get login URL (will redirect)
curl -L http://localhost:8000/auth/login

# Test /me endpoint (replace TOKEN with actual JWT)
curl -H "Authorization: Bearer TOKEN" http://localhost:8000/auth/me

# Test logout
curl http://localhost:8000/auth/logout
```

## Database Verification

After successful login, check database for user record:

```sql
SELECT * FROM users WHERE email = 'your-email@example.com';
```

Should show:
- id
- email
- name
- microsoft_id
- is_active (true)
- created_at
- last_login
