import React, { createContext, useContext, useState, ReactNode } from 'react';
import { ConversationContextType, Conversation } from '../types/conversation';

const ConversationContext = createContext<ConversationContextType | undefined>(undefined);

// Dummy conversation data
const initialConversations: Conversation[] = [
  {
    id: '1',
    title: 'استعلام عن الخدمات الحكومية',
    lastMessage: 'كيف يمكنني تجديد جواز السفر؟',
    timestamp: new Date(Date.now() - 1000 * 60 * 30), // 30 minutes ago
    messageCount: 5,
    category: 'government'
  },
  {
    id: '2',
    title: 'حجز موعد في المستشفى',
    lastMessage: 'أريد حجز موعد مع طبيب القلب',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
    messageCount: 3,
    category: 'hospitals'
  },
  {
    id: '3',
    title: 'معلومات عن المنظمات الخيرية',
    lastMessage: 'ما هي المنظمات المتاحة للتبرع؟',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24), // 1 day ago
    messageCount: 8,
    category: 'ngos'
  },
  {
    id: '4',
    title: 'حجز فندق',
    lastMessage: 'أبحث عن فندق في الرياض',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2), // 2 days ago
    messageCount: 12,
    category: 'hotels'
  }
];

interface ConversationProviderProps {
  children: ReactNode;
}

export const ConversationProvider: React.FC<ConversationProviderProps> = ({ children }) => {
  const [conversations, setConversations] = useState<Conversation[]>(initialConversations);
  const [currentConversation, setCurrentConversation] = useState<Conversation | null>(null);

  const createConversation = (title: string, category?: string): Conversation => {
    const newConversation: Conversation = {
      id: Date.now().toString(),
      title,
      lastMessage: 'محادثة جديدة',
      timestamp: new Date(),
      messageCount: 0,
      category: category as any
    };

    setConversations(prev => [newConversation, ...prev]);
    setCurrentConversation(newConversation);
    return newConversation;
  };

  const selectConversation = (id: string): void => {
    const conversation = conversations.find(c => c.id === id);
    if (conversation) {
      setCurrentConversation(conversation);
    }
  };

  const deleteConversation = (id: string): void => {
    setConversations(prev => prev.filter(c => c.id !== id));
    if (currentConversation?.id === id) {
      setCurrentConversation(null);
    }
  };

  const updateConversation = (id: string, updates: Partial<Conversation>): void => {
    setConversations(prev => 
      prev.map(c => c.id === id ? { ...c, ...updates } : c)
    );
    
    if (currentConversation?.id === id) {
      setCurrentConversation(prev => prev ? { ...prev, ...updates } : null);
    }
  };

  const value: ConversationContextType = {
    conversations,
    currentConversation,
    createConversation,
    selectConversation,
    deleteConversation,
    updateConversation
  };

  return (
    <ConversationContext.Provider value={value}>
      {children}
    </ConversationContext.Provider>
  );
};

export const useConversations = (): ConversationContextType => {
  const context = useContext(ConversationContext);
  if (context === undefined) {
    throw new Error('useConversations must be used within a ConversationProvider');
  }
  return context;
};