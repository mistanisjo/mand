import React, { useState, useEffect } from 'react';
import { Search, User, LogOut, MapPin, Phone, Users, Building, Heart, Hotel, Shield, Menu, X } from 'lucide-react';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { ConversationProvider } from './contexts/ConversationContext';
import { Sidebar } from './components/Sidebar/Sidebar';
import { AuthModal } from './components/Auth/AuthModal';

const AppContent: React.FC = () => {
  const { user, logout } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');

  const categories = [
    {
      id: 'government',
      name: 'الحكومة',
      icon: Shield,
      color: 'from-emerald-500 to-emerald-600',
      bgColor: 'bg-emerald-50/30',
      borderColor: 'border-emerald-100/50',
      hoverBg: 'hover:bg-emerald-50/50',
      agents: 156,
      description: 'الخدمات الحكومية والإدارية'
    },
    {
      id: 'ngos',
      name: 'المنظمات غير الحكومية',
      icon: Heart,
      color: 'from-rose-500 to-rose-600',
      bgColor: 'bg-rose-50/30',
      borderColor: 'border-rose-100/50',
      hoverBg: 'hover:bg-rose-50/50',
      agents: 89,
      description: 'المنظمات الخيرية والتطوعية'
    },
    {
      id: 'hospitals',
      name: 'المستشفيات',
      icon: Building,
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50/30',
      borderColor: 'border-blue-100/50',
      hoverBg: 'hover:bg-blue-50/50',
      agents: 234,
      description: 'الخدمات الطبية والصحية'
    },
    {
      id: 'hotels',
      name: 'الفنادق',
      icon: Hotel,
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50/30',
      borderColor: 'border-purple-100/50',
      hoverBg: 'hover:bg-purple-50/50',
      agents: 127,
      description: 'خدمات الضيافة والإقامة'
    }
  ];

  const handleAuthClick = () => {
    if (user) {
      logout();
    } else {
      setAuthMode('login');
      setAuthModalOpen(true);
    }
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Close sidebar when clicking outside
  const handleOverlayClick = () => {
    setSidebarOpen(false);
  };

  // Close sidebar on escape key
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && sidebarOpen) {
        setSidebarOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscapeKey);
    return () => document.removeEventListener('keydown', handleEscapeKey);
  }, [sidebarOpen]);

  // Prevent body scroll when sidebar is open on mobile
  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [sidebarOpen]);

  // Close sidebar when window resizes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSidebarOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50 relative overflow-hidden" dir="rtl">
      {/* Sidebar Overlay with Glass Effect */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 transition-all duration-300 ease-in-out"
          onClick={handleOverlayClick}
          aria-label="إغلاق الشريط الجانبي"
        />
      )}

      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onToggle={toggleSidebar} />

      {/* Auth Modal */}
      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        initialMode={authMode}
      />

      {/* Main Content */}
      <div className="relative">
        {/* Enhanced Background Gradient */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          {/* Main central gradient */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-orange-200/40 via-blue-200/30 to-purple-200/20 rounded-full blur-3xl opacity-60" />
          
          {/* Secondary gradients for depth */}
          <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-orange-300/30 to-pink-300/20 rounded-full blur-3xl opacity-50" />
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tr from-blue-300/30 to-purple-300/20 rounded-full blur-3xl opacity-40" />
          
          {/* Accent gradients */}
          <div className="absolute top-1/3 left-10 w-64 h-64 bg-gradient-to-r from-emerald-200/25 to-teal-200/20 rounded-full blur-2xl opacity-30" />
          <div className="absolute bottom-1/3 right-10 w-72 h-72 bg-gradient-to-l from-rose-200/25 to-orange-200/20 rounded-full blur-2xl opacity-35" />
        </div>

        {/* Fixed Navbar with Enhanced Glass Effect */}
        <nav className="fixed top-0 left-0 right-0 z-30 backdrop-blur-xl bg-white/70 border-b border-white/20 shadow-lg shadow-black/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Left side - Sidebar Toggle */}
              <div className="flex items-center">
                <button
                  onClick={toggleSidebar}
                  className="p-2 rounded-xl bg-gray-100/80 text-gray-600 hover:bg-gray-200/80 hover:text-gray-800 transition-all duration-200 backdrop-blur-sm border border-gray-200/50 shadow-sm"
                  aria-label={sidebarOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
                  aria-expanded={sidebarOpen}
                >
                  {sidebarOpen ? (
                    <X className="h-5 w-5" />
                  ) : (
                    <Menu className="h-5 w-5" />
                  )}
                </button>
              </div>

              {/* Center - Logo */}
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                    مندلين
                  </h1>
                </div>
              </div>

              {/* Right side - Search and Auth */}
              <div className="flex items-center space-x-3 space-x-reverse">
                {/* Enhanced Search Bar - Hidden on mobile, shown on tablet+ */}
                <div className="hidden md:block">
                  <div className="relative">
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <Search className="h-4 w-4 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      className="block w-64 pr-9 pl-3 py-2 border border-white/30 rounded-xl backdrop-blur-md bg-white/60 placeholder-gray-500 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-300/50 focus:bg-white/80 transition-all duration-300 shadow-sm"
                      placeholder="بحث سريع..."
                    />
                  </div>
                </div>

                {/* User Info - Hidden on mobile */}
                {user && (
                  <div className="hidden lg:flex items-center space-x-2 space-x-reverse text-sm text-gray-700">
                    <span>مرحباً، {user.name}</span>
                  </div>
                )}

                {/* Auth Button */}
                <button
                  onClick={handleAuthClick}
                  className="flex items-center space-x-2 space-x-reverse px-4 py-2 rounded-xl bg-orange-500 hover:bg-orange-600 text-white transition-colors duration-200 shadow-lg shadow-orange-500/25 text-sm"
                >
                  {user ? (
                    <>
                      <LogOut className="h-4 w-4" />
                      <span className="hidden sm:inline">خروج</span>
                    </>
                  ) : (
                    <>
                      <User className="h-4 w-4" />
                      <span className="hidden sm:inline">دخول</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="relative pt-16">
          {/* Hero Section with Enhanced Glass Search */}
          <section className="relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
              <div className="text-center">
                <h1 className="hero-title text-6xl sm:text-7xl font-bold text-gray-900 mb-6">
                  مرحباً بكم في{' '}
                  <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                    مندلين
                  </span>
                </h1>
                <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
                  منصة شاملة للوصول إلى جميع الخدمات في مكان واحد
                </p>
                
                {/* Enhanced Hero Search Bar with Liquid Glass */}
                <div className="max-w-2xl mx-auto mb-16">
                  <div className="relative">
                    <div className="liquid-glass-search rounded-3xl p-6 shadow-2xl shadow-black/10">
                      <div className="flex items-center space-x-4 space-x-reverse">
                        <Search className="h-6 w-6 text-orange-500 flex-shrink-0" />
                        <input
                          type="text"
                          className="flex-1 bg-transparent text-lg placeholder-gray-500 text-gray-900 focus:outline-none"
                          placeholder="ابحث عن الخدمة التي تحتاجها..."
                        />
                        <button className="px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-2xl hover:from-orange-600 hover:to-orange-700 transition-all duration-200 shadow-lg shadow-orange-500/30 hover-lift">
                          بحث
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-500 mb-2">156</div>
                    <div className="text-sm text-gray-600">خدمة حكومية</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-rose-500 mb-2">89</div>
                    <div className="text-sm text-gray-600">منظمة خيرية</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-500 mb-2">234</div>
                    <div className="text-sm text-gray-600">مستشفى</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-500 mb-2">127</div>
                    <div className="text-sm text-gray-600">فندق</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Enhanced Service Categories with Modern Glass Cards */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  فئات الخدمات
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  اختر الفئة المناسبة للوصول إلى الخدمات المطلوبة بسهولة وسرعة
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {categories.map((category) => {
                  const Icon = category.icon;
                  return (
                    <div
                      key={category.id}
                      className="group relative overflow-hidden rounded-3xl transition-all duration-300 cursor-pointer category-glass modern-card-border enhanced-ring hover-lift"
                    >
                      {/* Enhanced inner glow with gradient */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-white/10 opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                      
                      {/* Content */}
                      <div className="relative p-8 h-full flex flex-col">
                        <div className="flex items-center justify-between mb-6">
                          <div className={`p-4 rounded-2xl bg-gradient-to-br ${category.color} text-white shadow-lg shadow-black/20 group-hover:shadow-xl group-hover:shadow-black/30 transition-shadow duration-300`}>
                            <Icon className="h-8 w-8" />
                          </div>
                          <div className="text-left">
                            <div className="flex items-center space-x-2 space-x-reverse">
                              <Users className="h-5 w-5 text-gray-500" />
                              <span className="text-2xl font-bold text-gray-900">
                                {category.agents}
                              </span>
                            </div>
                            <p className="text-sm text-gray-500">وكيل متاح</p>
                          </div>
                        </div>
                        
                        <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors duration-300">
                          {category.name}
                        </h3>
                        
                        <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
                          {category.description}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4 space-x-reverse text-sm text-gray-500">
                            <div className="flex items-center space-x-1 space-x-reverse">
                              <MapPin className="h-4 w-4" />
                              <span>متوفر في جميع المدن</span>
                            </div>
                            <div className="flex items-center space-x-1 space-x-reverse">
                              <Phone className="h-4 w-4" />
                              <span>دعم 24/7</span>
                            </div>
                          </div>
                          
                          <div className="flex items-center space-x-2 space-x-reverse">
                            <div className="w-2 h-2 bg-green-500 rounded-full shadow-lg shadow-green-500/50 animate-pulse" />
                            <span className="text-xs text-green-600 font-medium">متاح الآن</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-20 bg-gradient-to-r from-gray-50/50 to-blue-50/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  لماذا مندلين؟
                </h2>
                <p className="text-xl text-gray-600">
                  نقدم لك تجربة متميزة في الوصول للخدمات
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center p-8 rounded-2xl glass-card hover-lift">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Search className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">بحث ذكي</h3>
                  <p className="text-gray-600">
                    ابحث عن أي خدمة بسهولة باستخدام نظام البحث الذكي المتطور
                  </p>
                </div>

                <div className="text-center p-8 rounded-2xl glass-card hover-lift">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">آمن وموثوق</h3>
                  <p className="text-gray-600">
                    جميع الخدمات معتمدة ومراجعة لضمان أعلى مستويات الأمان والجودة
                  </p>
                </div>

                <div className="text-center p-8 rounded-2xl glass-card hover-lift">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Phone className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">دعم مستمر</h3>
                  <p className="text-gray-600">
                    فريق دعم متاح على مدار الساعة لمساعدتك في أي استفسار أو مشكلة
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="relative py-16 border-t border-white/20 backdrop-blur-sm bg-white/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h3 className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent mb-4">
                  مندلين
                </h3>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                  منصة شاملة لجميع الخدمات في مكان واحد. نسعى لتسهيل الوصول إلى الخدمات الحكومية والخاصة بأفضل تجربة ممكنة.
                </p>
                
                <div className="flex items-center justify-center space-x-6 space-x-reverse text-sm text-gray-500">
                  <span>© 2025 مندلين. جميع الحقوق محفوظة.</span>
                  <span>•</span>
                  <span>صنع بـ ❤️ في السعودية</span>
                </div>
              </div>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
};

function App() {
  return (
    <AuthProvider>
      <ConversationProvider>
        <AppContent />
      </ConversationProvider>
    </AuthProvider>
  );
}

export default App;