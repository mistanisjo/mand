# Component Implementation Examples

## Button Examples

### Primary Button
```jsx
<button className="px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-2xl hover:from-orange-600 hover:to-orange-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
  تسجيل الدخول
</button>
```

### Secondary Button
```jsx
<button className="px-6 py-3 bg-white text-orange-500 border border-orange-500 rounded-2xl hover:bg-orange-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
  إلغاء
</button>
```

## Card Examples

### Service Category Card
```jsx
<div className="group relative overflow-hidden rounded-3xl transition-all duration-300 cursor-pointer bg-emerald-50 hover:bg-emerald-100 border border-emerald-100 hover:border-opacity-60 hover:shadow-lg">
  <div className="relative p-8 h-full flex flex-col">
    <div className="flex items-center justify-between mb-6">
      <div className="p-4 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 text-white shadow-md">
        <Shield className="h-8 w-8" />
      </div>
      <div className="text-left">
        <div className="flex items-center space-x-2 space-x-reverse">
          <Users className="h-5 w-5 text-gray-500" />
          <span className="text-2xl font-bold text-gray-900">156</span>
        </div>
        <p className="text-sm text-gray-500">وكيل متاح</p>
      </div>
    </div>
    
    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors duration-300">
      الحكومة
    </h3>
    
    <p className="text-gray-600 mb-6 flex-grow">
      الخدمات الحكومية والإدارية
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
      
      <div className="w-2 h-2 bg-green-500 rounded-full" />
    </div>
  </div>
</div>
```

### Glass Card
```jsx
<div className="backdrop-blur-xl bg-white/80 rounded-3xl p-6 border border-gray-100 shadow-lg">
  <div className="flex items-center space-x-4 space-x-reverse">
    <Search className="h-6 w-6 text-orange-500 flex-shrink-0" />
    <input
      type="text"
      className="flex-1 bg-transparent text-lg placeholder-gray-500 text-gray-900 focus:outline-none"
      placeholder="ابحث عن الخدمة التي تحتاجها..."
    />
    <button className="px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-2xl hover:from-orange-600 hover:to-orange-700 transition-all duration-200">
      بحث
    </button>
  </div>
</div>
```

## Form Examples

### Search Input
```jsx
<div className="relative max-w-2xl mx-auto">
  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
    <Search className="h-5 w-5 text-gray-400" />
  </div>
  <input
    type="text"
    className="block w-full pr-10 pl-3 py-2 border border-gray-200 rounded-2xl bg-gray-50 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent focus:bg-white transition-all duration-200"
    placeholder="ابحث عن الخدمات..."
  />
</div>
```

### Text Input with Label
```jsx
<div className="space-y-2">
  <label className="block text-sm font-medium text-gray-700">
    البريد الإلكتروني
  </label>
  <input
    type="email"
    className="block w-full px-3 py-2 border border-gray-200 rounded-xl bg-gray-50 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent focus:bg-white transition-all duration-200"
    placeholder="أدخل بريدك الإلكتروني"
  />
</div>
```

## Navigation Examples

### Fixed Navbar
```jsx
<nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/90 border-b border-gray-100">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex items-center justify-between h-16">
      {/* Logo */}
      <div className="flex items-center">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
          مندلين
        </h1>
      </div>

      {/* Search Bar */}
      <div className="flex-1 max-w-2xl mx-8">
        <div className="relative">
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full pr-10 pl-3 py-2 border border-gray-200 rounded-2xl bg-gray-50 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent focus:bg-white transition-all duration-200"
            placeholder="ابحث عن الخدمات..."
          />
        </div>
      </div>

      {/* Action Button */}
      <div className="flex items-center">
        <button className="flex items-center space-x-2 space-x-reverse px-4 py-2 rounded-2xl bg-orange-500 hover:bg-orange-600 text-white transition-colors duration-200">
          <User className="h-4 w-4" />
          <span>تسجيل الدخول</span>
        </button>
      </div>
    </div>
  </div>
</nav>
```

## Layout Examples

### Hero Section
```jsx
<section className="relative overflow-hidden">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
    <div className="text-center">
      <h1 className="text-6xl sm:text-7xl font-bold text-gray-900 mb-6">
        مرحباً بكم في{' '}
        <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
          مندلين
        </span>
      </h1>
      <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
        منصة شاملة للوصول إلى جميع الخدمات في مكان واحد
      </p>
      
      {/* Hero Search Bar */}
      <div className="max-w-2xl mx-auto mb-16">
        <div className="relative">
          <div className="backdrop-blur-xl bg-white/80 rounded-3xl p-6 border border-gray-100 shadow-lg">
            <div className="flex items-center space-x-4 space-x-reverse">
              <Search className="h-6 w-6 text-orange-500 flex-shrink-0" />
              <input
                type="text"
                className="flex-1 bg-transparent text-lg placeholder-gray-500 text-gray-900 focus:outline-none"
                placeholder="ابحث عن الخدمة التي تحتاجها..."
              />
              <button className="px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-2xl hover:from-orange-600 hover:to-orange-700 transition-all duration-200">
                بحث
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

### Grid Layout
```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
  {categories.map((category) => (
    <CategoryCard key={category.id} category={category} />
  ))}
</div>
```

## Responsive Examples

### Mobile-First Grid
```css
/* Mobile: Single column */
.service-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

/* Tablet: Two columns */
@media (min-width: 768px) {
  .service-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
}

/* Desktop: Two columns with larger gap */
@media (min-width: 1024px) {
  .service-grid {
    gap: 2rem;
  }
}
```

### Responsive Typography
```css
/* Mobile */
.hero-title {
  font-size: 2.5rem;
  line-height: 1.1;
}

/* Tablet */
@media (min-width: 640px) {
  .hero-title {
    font-size: 3.5rem;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .hero-title {
    font-size: 4.5rem;
  }
}
```

## Animation Examples

### Fade In Animation
```css
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in {
  animation: fadeIn 0.4s ease-out;
}
```

### Hover Effects
```css
/* Subtle lift effect */
.hover-lift {
  transition: all 0.3s ease;
}

.hover-lift:hover {
  box-shadow: 0 8px 25px rgba(249, 115, 22, 0.08);
}

/* Background color transition */
.hover-bg {
  transition: background-color 0.2s ease;
}

.hover-bg:hover {
  background-color: rgba(249, 115, 22, 0.05);
}
```

## Accessibility Examples

### Focus States
```css
.focus-ring:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(249, 115, 22, 0.1);
  border-color: #F97316;
}
```

### Screen Reader Support
```jsx
<button 
  className="sr-only"
  aria-label="البحث في الخدمات"
>
  <Search className="h-5 w-5" />
  <span className="sr-only">بحث</span>
</button>
```

### Skip Links
```jsx
<a 
  href="#main-content" 
  className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-orange-500 text-white px-4 py-2 rounded-md z-50"
>
  تخطي إلى المحتوى الرئيسي
</a>
```