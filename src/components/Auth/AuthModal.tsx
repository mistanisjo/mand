import React, { useState } from 'react';
import { LoginPage } from './LoginPage';
import { RegisterPage } from './RegisterPage';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: 'login' | 'register';
}

export const AuthModal: React.FC<AuthModalProps> = ({ 
  isOpen, 
  onClose, 
  initialMode = 'login' 
}) => {
  const [mode, setMode] = useState<'login' | 'register'>(initialMode);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      {mode === 'login' ? (
        <LoginPage
          onSwitchToRegister={() => setMode('register')}
          onClose={onClose}
        />
      ) : (
        <RegisterPage
          onSwitchToLogin={() => setMode('login')}
          onClose={onClose}
        />
      )}
    </div>
  );
};