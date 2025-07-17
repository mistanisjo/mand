# مندلين Design System

A comprehensive design system for the مندلين Arabic RTL service platform, following Apple-inspired minimalist design principles.

## 📋 Overview

This design system provides a complete set of guidelines, components, and patterns for building consistent, accessible, and beautiful interfaces for the مندلين platform.

## 🎯 Design Philosophy

- **Minimal & Clean**: Apple-inspired aesthetics with focus on simplicity
- **Customer-Centered**: Every design decision prioritizes user experience
- **Culturally Appropriate**: Proper Arabic RTL layout and typography
- **Accessible**: WCAG 2.1 AA compliant with inclusive design principles

## 📚 Documentation Structure

### Core Documentation
- [`design-system.md`](./design-system.md) - Complete design system specification
- [`component-examples.md`](./component-examples.md) - Implementation examples and code snippets

### Quick Reference

#### Colors
- **Primary**: #F97316 (Orange)
- **Categories**: Emerald, Rose, Blue, Purple
- **Neutrals**: Gray scale from 50-900

#### Typography
- **Font**: Tajawal (Arabic-optimized)
- **Weights**: 300, 400, 500, 700, 900
- **Scale**: 6xl (hero) down to xs (captions)

#### Spacing
- **System**: 8px base grid
- **Scale**: 0.25rem to 6rem
- **Responsive**: Mobile-first approach

## 🚀 Getting Started

1. **Review the Design System**: Start with [`design-system.md`](./design-system.md)
2. **Explore Components**: Check [`component-examples.md`](./component-examples.md)
3. **Implement**: Use the provided CSS classes and React components
4. **Test**: Ensure accessibility and RTL compatibility

## 🎨 Key Features

### Visual Design
- Glassmorphism effects with subtle transparency
- Gradient backgrounds and smooth transitions
- Category-specific color coding
- Minimal shadows and refined borders

### Interaction Design
- Subtle hover effects without scaling
- Smooth transitions (200-300ms)
- Clear focus states for accessibility
- Responsive touch targets (44px minimum)

### Layout System
- CSS Grid and Flexbox layouts
- 8px spacing system
- Responsive breakpoints
- RTL-optimized positioning

## 🔧 Implementation Guidelines

### CSS Custom Properties
```css
:root {
  --primary: #F97316;
  --spacing-md: 1rem;
  --radius-lg: 1.5rem;
  --shadow-md: 0 4px 12px rgba(0, 0, 0, 0.08);
}
```

### Component Structure
```jsx
<div className="category-card hover-lift">
  <div className="p-8 rounded-3xl bg-white/80 backdrop-blur-xl">
    {/* Component content */}
  </div>
</div>
```

### RTL Support
```css
[dir="rtl"] {
  text-align: right;
}

.rtl-space-x-reverse > * + * {
  margin-right: var(--space);
  margin-left: 0;
}
```

## ♿ Accessibility

### Standards Compliance
- WCAG 2.1 AA color contrast ratios
- Keyboard navigation support
- Screen reader compatibility
- Focus management

### Implementation
- Semantic HTML structure
- ARIA labels and descriptions
- Skip links for navigation
- Reduced motion support

## 📱 Responsive Design

### Breakpoints
- **Mobile**: 0-639px
- **Tablet**: 640-1023px
- **Desktop**: 1024px+

### Approach
- Mobile-first CSS
- Flexible grid systems
- Scalable typography
- Touch-friendly interactions

## 🎯 Quality Assurance

### Design Checklist
- [ ] Colors match defined palette
- [ ] Typography follows hierarchy
- [ ] Spacing uses 8px grid
- [ ] Accessibility standards met
- [ ] RTL layout verified

### Performance
- GPU-accelerated animations
- Optimized glassmorphism effects
- Efficient font loading
- Minimal CSS bundle size

## 🤝 Contributing

When contributing to this design system:

1. Follow established patterns
2. Test across all breakpoints
3. Verify RTL compatibility
4. Ensure accessibility compliance
5. Update documentation

## 📞 Support

For questions about implementation or design decisions, refer to:
- Design system documentation
- Component examples
- Accessibility guidelines
- RTL implementation notes

---

**Version**: 1.0.0  
**Last Updated**: 2025  
**Maintained by**: مندلين Design Team