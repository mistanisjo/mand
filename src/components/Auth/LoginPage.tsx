import React, { useState } from 'react';
import { Eye, EyeOff, Mail, Lock, ArrowRight, Loader2 } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { LoginCredentials } from '../../types/auth';

interface LoginPageProps {
  onSwitchToRegister: () => void;
  onClose: () => void;
}

export const LoginPage: React.FC<LoginPageProps> = ({ onSwitchToRegister, onClose }) => {
  const { login, isLoading, error } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState<LoginCredentials>({
    email: '',
    password: ''
  });
  const [formErrors, setFormErrors] = useState<Partial<LoginCredentials>>({});

  const validateForm = (): boolean => {
    const errors: Partial<LoginCredentials> = {};

    if (!formData.email) {
      errors.email = 'البريد الإلكتروني مطلوب';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'البريد الإلكتروني غير صحيح';
    }

    if (!formData.password) {
      errors.password = 'كلمة المرور مطلوبة';
    } else if (formData.password.length < 6) {
      errors.password = 'كلمة المرور يجب أن تكون 6 أحرف على الأقل';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    try {
      await login(formData);
      onClose();
    } catch (err) {
      // Error is handled by the context
    }
  };

  const handleInputChange = (field: keyof LoginCredentials, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear field error when user starts typing
    if (formErrors[field]) {
      setFormErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-orange-200/30 via-blue-200/20 to-purple-200/10 rounded-full blur-3xl opacity-60" />
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-orange-300/20 to-pink-300/15 rounded-full blur-2xl opacity-40" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tr from-blue-300/20 to-purple-300/15 rounded-full blur-2xl opacity-30" />
      </div>

      {/* Login Card */}
      <div className="w-full max-w-md relative">
        <div className="backdrop-blur-xl bg-white/80 rounded-3xl p-8 border border-white/40 shadow-2xl shadow-black/10 ring-1 ring-white/20">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent mb-2">
              مرحباً بعودتك
            </h1>
            <p className="text-gray-600">
              سجل دخولك للوصول إلى حسابك
            </p>
          </div>

          {/* Demo Credentials */}
          <div className="mb-6 p-4 bg-blue-50/50 rounded-2xl border border-blue-100/50">
            <p className="text-sm text-blue-700 font-medium mb-2">بيانات تجريبية:</p>
            <p className="text-xs text-blue-600">البريد: admin@mandolin.com</p>
            <p className="text-xs text-blue-600">كلمة المرور: password</p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-6 p-4 bg-red-50 rounded-2xl border border-red-100">
              <p className="text-sm text-red-600 text-center">{error}</p>
            </div>
          )}

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                البريد الإلكتروني
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className={`block w-full pr-10 pl-3 py-3 border rounded-2xl bg-gray-50/50 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-300/50 focus:bg-white/80 transition-all duration-200 ${
                    formErrors.email ? 'border-red-300 bg-red-50/50' : 'border-gray-200'
                  }`}
                  placeholder="أدخل بريدك الإلكتروني"
                  disabled={isLoading}
                />
              </div>
              {formErrors.email && (
                <p className="text-sm text-red-600">{formErrors.email}</p>
              )}
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                كلمة المرور
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={(e) => handleInputChange('password', e.target.value)}
                  className={`block w-full pr-10 pl-10 py-3 border rounded-2xl bg-gray-50/50 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-300/50 focus:bg-white/80 transition-all duration-200 ${
                    formErrors.password ? 'border-red-300 bg-red-50/50' : 'border-gray-200'
                  }`}
                  placeholder="أدخل كلمة المرور"
                  disabled={isLoading}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400 hover:text-gray-600 transition-colors duration-200"
                  disabled={isLoading}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
              {formErrors.password && (
                <p className="text-sm text-red-600">{formErrors.password}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex items-center justify-center space-x-2 space-x-reverse px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-2xl hover:from-orange-600 hover:to-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-all duration-200 shadow-lg shadow-orange-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  <span>جاري تسجيل الدخول...</span>
                </>
              ) : (
                <>
                  <ArrowRight className="h-5 w-5" />
                  <span>تسجيل الدخول</span>
                </>
              )}
            </button>
          </form>

          {/* Switch to Register */}
          <div className="mt-8 text-center">
            <p className="text-gray-600">
              ليس لديك حساب؟{' '}
              <button
                onClick={onSwitchToRegister}
                className="text-orange-500 hover:text-orange-600 font-medium transition-colors duration-200"
                disabled={isLoading}
              >
                إنشاء حساب جديد
              </button>
            </p>
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 left-4 p-2 rounded-xl text-gray-400 hover:text-gray-600 hover:bg-gray-100/50 transition-all duration-200"
            disabled={isLoading}
          >
            <ArrowRight className="h-5 w-5 rotate-180" />
          </button>
        </div>
      </div>
    </div>
  );
};