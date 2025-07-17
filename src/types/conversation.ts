export interface Message {
  id: string;
  content: string;
  timestamp: Date;
  isUser: boolean;
}

export interface Conversation {
  id: string;
  title: string;
  lastMessage: string;
  timestamp: Date;
  messageCount: number;
  category?: 'government' | 'ngos' | 'hospitals' | 'hotels';
}

export interface ConversationContextType {
  conversations: Conversation[];
  currentConversation: Conversation | null;
  createConversation: (title: string, category?: string) => Conversation;
  selectConversation: (id: string) => void;
  deleteConversation: (id: string) => void;
  updateConversation: (id: string, updates: Partial<Conversation>) => void;
}