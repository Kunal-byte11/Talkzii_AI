
export interface ChatMessage {
  id: string;
  text: string;
  sender: 'user' | 'ai' | 'system';
  timestamp: number;
  isLoading?: boolean;
  isCrisis?: boolean;
  feedback?: 'liked' | 'disliked' | null; // For AI messages
  userPromptText?: string; // For AI messages, to store the user prompt that led to this response
}

export interface UserProfile {
  id: string; // Should match Supabase auth user ID (UUID)
  username: string;
  email: string; // Ensure email is always present from auth
  gender: 'male' | 'female' | 'prefer_not_to_say';
  created_at?: string;
  updated_at?: string;
}

