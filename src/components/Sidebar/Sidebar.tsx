import React, { useState } from 'react';
import { Menu, X, Plus, MessageCircle, Trash2, Calendar, Shield, Heart, Building, Hotel } from 'lucide-react';
import { useConversations } from '../../contexts/ConversationContext';
import { useAuth } from '../../contexts/AuthContext';
import { Conversation } from '../../types/conversation';

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

const categoryIcons = {
  government: Shield,
  ngos: Heart,
  hospitals: Building,
  hotels: Hotel
};

const categoryColors = {
  government: 'text-emerald-500',
  ngos: 'text-rose-500',
  hospitals: 'text-blue-500',
  hotels: 'text-purple-500'
};

const formatTimestamp = (timestamp: Date): string => {
  const now = new Date();
  const diff = now.getTime() - timestamp.getTime();
  const minutes = Math.floor(diff / (1000 * 60));
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  if (minutes < 60) {
    return `منذ ${minutes} دقيقة`;
  } else if (hours < 24) {
    return `منذ ${hours} ساعة`;
  } else {
    return `منذ ${days} يوم`;
  }
};

const ConversationItem: React.FC<{ 
  conversation: Conversation; 
  isActive: boolean; 
  onSelect: () => void;
  onDelete: () => void;
}> = ({ conversation, isActive, onSelect, onDelete }) => {
  const [showDeleteButton, setShowDeleteButton] = useState(false);
  const CategoryIcon = conversation.category ? categoryIcons[conversation.category] : MessageCircle;
  const categoryColor = conversation.category ? categoryColors[conversation.category] : 'text-gray-500';

  return (
    <div
      className={`group relative p-4 rounded-2xl cursor-pointer transition-all duration-200 ${
        isActive 
          ? 'bg-orange-50 border border-orange-200 shadow-sm' 
          : 'hover:bg-gray-50 border border-transparent'
      }`}
      onClick={onSelect}
      onMouseEnter={() => setShowDeleteButton(true)}
      onMouseLeave={() => setShowDeleteButton(false)}
    >
      <div className="flex items-start space-x-3 space-x-reverse">
        <div className={`flex-shrink-0 p-2 rounded-xl bg-gray-100 ${categoryColor}`}>
          <CategoryIcon className="h-4 w-4" />
        </div>
        
        <div className="flex-1 min-w-0">
          <h3 className={`text-sm font-medium truncate ${
            isActive ? 'text-orange-900' : 'text-gray-900'
          }`}>
            {conversation.title}
          </h3>
          <p className={`text-xs mt-1 truncate ${
            isActive ? 'text-orange-600' : 'text-gray-500'
          }`}>
            {conversation.lastMessage}
          </p>
          <div className="flex items-center justify-between mt-2">
            <span className={`text-xs ${
              isActive ? 'text-orange-500' : 'text-gray-400'
            }`}>
              {formatTimestamp(conversation.timestamp)}
            </span>
            <span className={`text-xs px-2 py-1 rounded-full ${
              isActive 
                ? 'bg-orange-100 text-orange-600' 
                : 'bg-gray-100 text-gray-500'
            }`}>
              {conversation.messageCount} رسالة
            </span>
          </div>
        </div>
      </div>

      {showDeleteButton && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onDelete();
          }}
          className="absolute top-2 left-2 p-1.5 rounded-lg bg-red-50 text-red-500 hover:bg-red-100 transition-colors duration-200 opacity-0 group-hover:opacity-100"
          aria-label="حذف المحادثة"
        >
          <Trash2 className="h-3 w-3" />
        </button>
      )}
    </div>
  );
};

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onToggle }) => {
  const { conversations, currentConversation, selectConversation, deleteConversation, createConversation } = useConversations();
  const { user } = useAuth();

  const handleNewConversation = () => {
    createConversation('محادثة جديدة');
  };

  const handleDeleteConversation = (id: string) => {
    if (window.confirm('هل أنت متأكد من حذف هذه المحادثة؟')) {
      deleteConversation(id);
    }
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
          onClick={onToggle}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed top-0 right-0 h-full z-50 transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        lg:translate-x-0 lg:static lg:z-auto
        w-80 bg-white/95 backdrop-blur-xl border-l border-gray-200/50 shadow-2xl
      `}>
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200/50">
          <h2 className="text-lg font-bold text-gray-900">المحادثات</h2>
          <div className="flex items-center space-x-2 space-x-reverse">
            <button
              onClick={handleNewConversation}
              className="p-2 rounded-xl bg-orange-500 text-white hover:bg-orange-600 transition-colors duration-200 shadow-lg shadow-orange-500/25"
              aria-label="محادثة جديدة"
            >
              <Plus className="h-4 w-4" />
            </button>
            <button
              onClick={onToggle}
              className="p-2 rounded-xl bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors duration-200 lg:hidden"
              aria-label="إغلاق الشريط الجانبي"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* User Info */}
        {user && (
          <div className="p-6 border-b border-gray-200/50">
            <div className="flex items-center space-x-3 space-x-reverse">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white font-medium">
                {user.avatar ? (
                  <img 
                    src={user.avatar} 
                    alt={user.name}
                    className="w-full h-full rounded-full object-cover"
                  />
                ) : (
                  user.name.charAt(0)
                )}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">
                  {user.name}
                </p>
                <p className="text-xs text-gray-500 truncate">
                  {user.email}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Conversations List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-2">
          {conversations.length === 0 ? (
            <div className="text-center py-12">
              <MessageCircle className="h-12 w-12 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 text-sm">لا توجد محادثات بعد</p>
              <button
                onClick={handleNewConversation}
                className="mt-4 px-4 py-2 bg-orange-500 text-white rounded-xl hover:bg-orange-600 transition-colors duration-200 text-sm"
              >
                ابدأ محادثة جديدة
              </button>
            </div>
          ) : (
            conversations.map((conversation) => (
              <ConversationItem
                key={conversation.id}
                conversation={conversation}
                isActive={currentConversation?.id === conversation.id}
                onSelect={() => selectConversation(conversation.id)}
                onDelete={() => handleDeleteConversation(conversation.id)}
              />
            ))
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-200/50">
          <div className="flex items-center justify-center space-x-2 space-x-reverse text-xs text-gray-500">
            <Calendar className="h-3 w-3" />
            <span>آخر تحديث: اليوم</span>
          </div>
        </div>
      </div>
    </>
  );
};

// Hamburger Menu Button Component
export const SidebarToggle: React.FC<{ isOpen: boolean; onToggle: () => void }> = ({ 
  isOpen, 
  onToggle 
}) => {
  return (
    <button
      onClick={onToggle}
      className="fixed top-4 right-4 z-50 p-3 rounded-2xl bg-white/90 backdrop-blur-md border border-gray-200/50 shadow-lg hover:bg-white transition-all duration-200 lg:hidden"
      aria-label={isOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
    >
      {isOpen ? (
        <X className="h-5 w-5 text-gray-700" />
      ) : (
        <Menu className="h-5 w-5 text-gray-700" />
      )}
    </button>
  );
};