# Chatbot Creation Integration - Architecture Documentation

## Overview
This document explains the refactored chatbot creation system using RTK Query, Redux, and modular architecture.

## Architecture Pattern

### 1. **Configuration Layer** (`src/config/api.config.js`)
- Single source of truth for all API endpoints
- Environment-based configuration
- Easy to maintain and update

### 2. **State Management** (`src/store/`)
- **authApi.js**: Authentication endpoints (login, callback, user info)
- **chatbotApi.js**: Chatbot CRUD operations and chat functionality
- **authSlice.js**: Auth state management
- **store.js**: Redux store configuration with all reducers

### 3. **Custom Hooks** (`src/hooks/`)
- **useCreateChatbot.js**: Encapsulates chatbot creation logic
  - Form validation
  - FormData preparation
  - API communication
  - Error handling
  - Navigation after success

### 4. **Context** (`src/context/`)
- **ChatbotFormContext.jsx**: Form state management
  - Centralized form data
  - Field update handlers
  - Optimized with useMemo

### 5. **Components** (Modular & < 500 lines)
- **MainLayout.jsx**: Main container (~60 lines)
- **Sidebar.jsx**: Form sections container
- **PreviewPanel.jsx**: Real-time preview
- **sections/**: Individual form sections
  - Instructions.jsx
  - ConversationStarters.jsx
  - Knowledge.jsx
  - RecommendedModel.jsx
  - Capabilities.jsx

## Data Flow

```
User Input → ChatbotFormContext → useCreateChatbot Hook
     ↓
Validation → FormData Preparation
     ↓
RTK Query (chatbotApi) → Backend API
     ↓
Success → Reset Form → Navigate to Home
```

## API Integration

### Backend Expectations (POST /chatbot/chatbots)
```javascript
{
  chatbot_name: string (required),
  description: string (required),
  instructions: string (required),
  conversation_starters: string[] (optional),
  is_quiz_mode: boolean (default: false),
  is_active: boolean (default: true),
  recommended_model: string (optional),
  file: File (required),
  quiz_file: File (optional)
}
```

### Response
```javascript
{
  message: "Chatbot created successfully",
  chatbot_id: number
}
```

## Environment Variables

Create `.env` file in frontend root:
```env
VITE_API_BASE_URL=http://localhost:8000
```

## Key Features

1. **No Hardcoded URLs**: All URLs managed through API_CONFIG
2. **RTK Query**: Automatic caching, refetching, and loading states
3. **Modular Code**: Each file < 500 lines
4. **Type Safety**: Proper error handling and validation
5. **Reusable Hooks**: Business logic separated from UI
6. **Optimized Performance**: useMemo, useCallback where needed

## Usage Example

```jsx
// In any component
import { useCreateChatbot } from '../hooks/useCreateChatbot';

function MyComponent() {
  const { handleCreate, isLoading, error } = useCreateChatbot();
  
  return (
    <button onClick={handleCreate} disabled={isLoading}>
      {isLoading ? 'Creating...' : 'Create Chatbot'}
    </button>
  );
}
```

## Future Enhancements

1. Add chat interface using `useChatWithChatbotMutation`
2. List chatbots using `useGetAllChatbotsQuery`
3. Update/Delete operations
4. Real-time chat history management

## Testing the Integration

1. Start backend: `uvicorn main:app --reload`
2. Start frontend: `npm run dev`
3. Navigate to `http://localhost:3000/create`
4. Fill all required fields (marked with *)
5. Upload knowledge file
6. Click "Create"
7. Backend automatically generates embeddings and stores in Qdrant

## Troubleshooting

- **CORS Issues**: Ensure backend allows `http://localhost:3000`
- **Auth Issues**: Check token is being sent in headers
- **File Upload**: Check file size limits and accepted formats
- **Network Issues**: Verify `VITE_API_BASE_URL` in .env
