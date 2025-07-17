import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { AuthContextType, User, LoginCredentials, RegisterCredentials } from '../types/auth';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Dummy authentication service
const authService = {
  async login(credentials: LoginCredentials): Promise<User> {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Dummy validation
    if (credentials.email === 'admin@mandolin.com' && credentials.password === 'password') {
      const user: User = {
        id: '1',
        email: credentials.email,
        name: 'مستخدم تجريبي',
        avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
        createdAt: new Date()
      };
      localStorage.setItem('mandolin_user', JSON.stringify(user));
      return user;
    }
    throw new Error('بيانات الدخول غير صحيحة');
  },

  async register(credentials: RegisterCredentials): Promise<User> {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1200));
    
    // Dummy validation
    if (credentials.password !== credentials.confirmPassword) {
      throw new Error('كلمات المرور غير متطابقة');
    }
    
    if (credentials.password.length < 6) {
      throw new Error('كلمة المرور يجب أن تكون 6 أحرف على الأقل');
    }

    const user: User = {
      id: Date.now().toString(),
      email: credentials.email,
      name: credentials.name,
      createdAt: new Date()
    };
    
    localStorage.setItem('mandolin_user', JSON.stringify(user));
    return user;
  },

  logout(): void {
    localStorage.removeItem('mandolin_user');
  },

  getCurrentUser(): User | null {
    const userData = localStorage.getItem('mandolin_user');
    return userData ? JSON.parse(userData) : null;
  }
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Check for existing user on mount
    const currentUser = authService.getCurrentUser();
    setUser(currentUser);
    setIsLoading(false);
  }, []);

  const login = async (credentials: LoginCredentials): Promise<void> => {
    setIsLoading(true);
    setError(null);
    
    try {
      const user = await authService.login(credentials);
      setUser(user);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'حدث خطأ أثناء تسجيل الدخول');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (credentials: RegisterCredentials): Promise<void> => {
    setIsLoading(true);
    setError(null);
    
    try {
      const user = await authService.register(credentials);
      setUser(user);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'حدث خطأ أثناء إنشاء الحساب');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = (): void => {
    authService.logout();
    setUser(null);
    setError(null);
  };

  const value: AuthContextType = {
    user,
    login,
    register,
    logout,
    isLoading,
    error
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};