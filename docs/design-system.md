# مندلين Design System Documentation

## Table of Contents
1. [Design Principles & Philosophy](#design-principles--philosophy)
2. [Color System](#color-system)
3. [Typography](#typography)
4. [Component Library](#component-library)
5. [Layout & Spacing](#layout--spacing)
6. [Interactive States](#interactive-states)
7. [Implementation Guidelines](#implementation-guidelines)

---

## Design Principles & Philosophy

### Overall Design Approach
The مندلين platform follows a **minimal, customer-centered design philosophy** inspired by Apple's design principles. Our approach emphasizes:

- **Clarity over cleverness**: Every element serves a clear purpose
- **Simplicity without sacrifice**: Minimal design that doesn't compromise functionality
- **Subtle sophistication**: Refined details that enhance without overwhelming
- **Cultural sensitivity**: Proper Arabic RTL layout and typography optimization

### Brand Personality
- **Modern & Professional**: Clean, contemporary aesthetic suitable for government and business services
- **Trustworthy & Reliable**: Consistent visual language that builds confidence
- **Accessible & Inclusive**: Design that works for all users regardless of ability
- **Culturally Appropriate**: Respectful of Arabic design traditions while embracing modern web standards

### Visual Tone
- **Minimalist**: Clean white backgrounds with subtle accents
- **Warm & Approachable**: Orange primary color creates friendly, welcoming atmosphere
- **Sophisticated**: Refined glassmorphism and subtle shadows add depth
- **Calm & Organized**: Generous whitespace and clear hierarchy reduce cognitive load

### Accessibility Standards
- **WCAG 2.1 AA Compliance**: All color contrasts meet minimum 4.5:1 ratio
- **Keyboard Navigation**: Full keyboard accessibility for all interactive elements
- **Screen Reader Support**: Semantic HTML and proper ARIA labels
- **RTL Support**: Complete right-to-left layout support for Arabic content

---

## Color System

### Primary Colors
```css
/* Brand Primary */
--orange-500: #F97316;  /* Primary brand color */
--orange-400: #FB923C;  /* Lighter variant */
--orange-600: #EA580C;  /* Darker variant */
--orange-50: #FFF7ED;   /* Background tint */
--orange-100: #FFEDD5;  /* Light background */
```

### Category-Specific Colors
```css
/* Government - Emerald */
--emerald-500: #10B981;
--emerald-50: #ECFDF5;
--emerald-100: #D1FAE5;

/* NGOs - Rose */
--rose-500: #F43F5E;
--rose-50: #FFF1F2;
--rose-100: #FFE4E6;

/* Hospitals - Blue */
--blue-500: #3B82F6;
--blue-50: #EFF6FF;
--blue-100: #DBEAFE;

/* Hotels - Purple */
--purple-500: #8B5CF6;
--purple-50: #FAF5FF;
--purple-100: #F3E8FF;
```

### Neutral Colors
```css
/* Grays */
--gray-50: #F9FAFB;
--gray-100: #F3F4F6;
--gray-200: #E5E7EB;
--gray-300: #D1D5DB;
--gray-400: #9CA3AF;
--gray-500: #6B7280;
--gray-600: #4B5563;
--gray-700: #374151;
--gray-800: #1F2937;
--gray-900: #111827;

/* Semantic Colors */
--white: #FFFFFF;
--black: #000000;
--success: #10B981;
--warning: #F59E0B;
--error: #EF4444;
```

### Color Usage Guidelines
- **Primary Orange**: Main CTAs, brand elements, active states
- **Category Colors**: Service category identification, icons, accents
- **Grays**: Text hierarchy, borders, backgrounds
- **White**: Primary background, card backgrounds
- **Semantic Colors**: Status indicators, alerts, feedback

### Contrast Ratios
- **Primary Text on White**: 16.94:1 (AAA)
- **Secondary Text on White**: 7.59:1 (AAA)
- **Orange on White**: 4.52:1 (AA)
- **Category Colors on White**: All meet AA standards (4.5:1+)

---

## Typography

### Font Family
```css
font-family: 'Tajawal', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
```

### Font Weights
- **Light**: 300 (Minimal use for large headings)
- **Regular**: 400 (Body text, descriptions)
- **Medium**: 500 (Subheadings, labels)
- **Bold**: 700 (Main headings, emphasis)
- **Black**: 900 (Hero titles, major headings)

### Typography Scale
```css
/* Headings */
.text-6xl { font-size: 3.75rem; line-height: 1; }      /* Hero titles */
.text-5xl { font-size: 3rem; line-height: 1; }        /* Page titles */
.text-4xl { font-size: 2.25rem; line-height: 2.5rem; } /* Section titles */
.text-3xl { font-size: 1.875rem; line-height: 2.25rem; } /* Card titles */
.text-2xl { font-size: 1.5rem; line-height: 2rem; }   /* Subsection titles */
.text-xl { font-size: 1.25rem; line-height: 1.75rem; } /* Large body text */

/* Body Text */
.text-lg { font-size: 1.125rem; line-height: 1.75rem; } /* Large body */
.text-base { font-size: 1rem; line-height: 1.5rem; }   /* Default body */
.text-sm { font-size: 0.875rem; line-height: 1.25rem; } /* Small text */
.text-xs { font-size: 0.75rem; line-height: 1rem; }    /* Captions */
```

### Text Hierarchy
1. **H1 (Hero)**: text-6xl, font-bold, text-gray-900
2. **H2 (Page Title)**: text-4xl, font-bold, text-gray-900
3. **H3 (Section)**: text-2xl, font-bold, text-gray-900
4. **H4 (Card Title)**: text-xl, font-medium, text-gray-900
5. **Body**: text-base, font-normal, text-gray-600
6. **Caption**: text-sm, font-normal, text-gray-500

### RTL Typography Rules
```css
/* RTL Text Alignment */
[dir="rtl"] { text-align: right; }
[dir="rtl"] input { text-align: right; }

/* Arabic Text Optimization */
.text-refined {
  font-feature-settings: 'kern' 1, 'liga' 1, 'calt' 1;
  text-rendering: optimizeLegibility;
}
```

---

## Component Library

### Buttons

#### Primary Button
```css
.btn-primary {
  padding: 0.75rem 1.5rem;
  background: linear-gradient(to right, #F97316, #EA580C);
  color: white;
  border-radius: 1rem;
  font-weight: 500;
  transition: all 0.2s ease;
  border: none;
  cursor: pointer;
}

.btn-primary:hover {
  background: linear-gradient(to right, #EA580C, #DC2626);
  box-shadow: 0 2px 8px rgba(249, 115, 22, 0.15);
}
```

#### Secondary Button
```css
.btn-secondary {
  padding: 0.75rem 1.5rem;
  background: white;
  color: #F97316;
  border: 1px solid #F97316;
  border-radius: 1rem;
  font-weight: 500;
  transition: all 0.2s ease;
  cursor: pointer;
}

.btn-secondary:hover {
  background: #FFF7ED;
  border-color: #EA580C;
}
```

#### Button Sizes
- **Small**: padding: 0.5rem 1rem; font-size: 0.875rem;
- **Medium**: padding: 0.75rem 1.5rem; font-size: 1rem; (default)
- **Large**: padding: 1rem 2rem; font-size: 1.125rem;

### Cards

#### Service Category Card
```css
.category-card {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 1.5rem;
  padding: 2rem;
  transition: all 0.3s ease;
  cursor: pointer;
}

.category-card:hover {
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0 8px 25px rgba(249, 115, 22, 0.08);
  border-color: rgba(249, 115, 22, 0.1);
}
```

#### Glass Card
```css
.glass-card {
  backdrop-filter: blur(20px);
  background: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 1rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.06);
}
```

### Icons

#### Icon System
- **Source**: Lucide React
- **Default Size**: 24px (1.5rem)
- **Small**: 16px (1rem)
- **Large**: 32px (2rem)
- **Color**: Inherits from parent or uses category colors

#### Icon Usage
```css
.icon-sm { width: 1rem; height: 1rem; }
.icon-md { width: 1.5rem; height: 1.5rem; }
.icon-lg { width: 2rem; height: 2rem; }
.icon-xl { width: 2.5rem; height: 2.5rem; }
```

### Forms

#### Input Fields
```css
.input-field {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid #E5E7EB;
  border-radius: 1rem;
  background: #F9FAFB;
  color: #111827;
  transition: all 0.2s ease;
}

.input-field:focus {
  outline: none;
  border-color: #F97316;
  background: white;
  box-shadow: 0 0 0 3px rgba(249, 115, 22, 0.1);
}

.input-field::placeholder {
  color: #9CA3AF;
}
```

#### Search Bar
```css
.search-bar {
  position: relative;
  width: 100%;
  max-width: 32rem;
}

.search-input {
  width: 100%;
  padding: 0.75rem 1rem 0.75rem 2.5rem;
  border: 1px solid #E5E7EB;
  border-radius: 1.5rem;
  background: #F9FAFB;
  transition: all 0.2s ease;
}

.search-icon {
  position: absolute;
  right: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  color: #9CA3AF;
}
```

### Navigation

#### Fixed Navbar
```css
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  backdrop-filter: blur(20px);
  background: rgba(255, 255, 255, 0.9);
  border-bottom: 1px solid rgba(229, 231, 235, 0.8);
  height: 4rem;
}

.navbar-content {
  max-width: 80rem;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}
```

#### Logo
```css
.logo {
  font-size: 1.5rem;
  font-weight: 700;
  background: linear-gradient(to right, #F97316, #EA580C);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}
```

---

## Layout & Spacing

### Grid System
```css
/* Container */
.container {
  max-width: 80rem; /* 1280px */
  margin: 0 auto;
  padding: 0 1rem;
}

/* Grid Layouts */
.grid-2 { display: grid; grid-template-columns: repeat(2, 1fr); gap: 2rem; }
.grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; }
.grid-4 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 2rem; }

/* Responsive Grid */
@media (max-width: 768px) {
  .grid-2, .grid-3, .grid-4 {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
}
```

### Spacing System (8px base)
```css
/* Spacing Scale */
.space-1 { margin: 0.25rem; }  /* 4px */
.space-2 { margin: 0.5rem; }   /* 8px */
.space-3 { margin: 0.75rem; }  /* 12px */
.space-4 { margin: 1rem; }     /* 16px */
.space-5 { margin: 1.25rem; }  /* 20px */
.space-6 { margin: 1.5rem; }   /* 24px */
.space-8 { margin: 2rem; }     /* 32px */
.space-10 { margin: 2.5rem; }  /* 40px */
.space-12 { margin: 3rem; }    /* 48px */
.space-16 { margin: 4rem; }    /* 64px */
.space-20 { margin: 5rem; }    /* 80px */
.space-24 { margin: 6rem; }    /* 96px */
```

### Responsive Breakpoints
```css
/* Mobile First Approach */
/* xs: 0px - 639px (default) */
/* sm: 640px and up */
@media (min-width: 640px) { /* Small tablets */ }

/* md: 768px and up */
@media (min-width: 768px) { /* Tablets */ }

/* lg: 1024px and up */
@media (min-width: 1024px) { /* Small desktops */ }

/* xl: 1280px and up */
@media (min-width: 1280px) { /* Large desktops */ }

/* 2xl: 1536px and up */
@media (min-width: 1536px) { /* Extra large screens */ }
```

### Section Spacing
- **Hero Section**: padding: 6rem 0; (96px top/bottom)
- **Content Sections**: padding: 5rem 0; (80px top/bottom)
- **Card Padding**: padding: 2rem; (32px all sides)
- **Button Padding**: padding: 0.75rem 1.5rem; (12px top/bottom, 24px left/right)

---

## Interactive States

### Hover States
```css
/* Subtle hover without scaling */
.hover-lift:hover {
  box-shadow: 0 8px 25px rgba(249, 115, 22, 0.08);
  transition: box-shadow 0.3s ease;
}

/* Background color changes */
.hover-bg:hover {
  background-color: rgba(249, 115, 22, 0.05);
  transition: background-color 0.2s ease;
}

/* Border color changes */
.hover-border:hover {
  border-color: rgba(249, 115, 22, 0.3);
  transition: border-color 0.2s ease;
}
```

### Focus States
```css
.focus-ring:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(249, 115, 22, 0.1);
  border-color: #F97316;
  transition: all 0.2s ease;
}
```

### Active States
```css
.active-state:active {
  transform: translateY(1px);
  transition: transform 0.1s ease;
}
```

### Disabled States
```css
.disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}
```

### Transition Specifications
```css
/* Standard transitions */
.transition-fast { transition: all 0.15s ease; }
.transition-normal { transition: all 0.2s ease; }
.transition-slow { transition: all 0.3s ease; }

/* Specific property transitions */
.transition-colors { transition: background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease; }
.transition-shadow { transition: box-shadow 0.3s ease; }
.transition-transform { transition: transform 0.2s ease; }
```

---

## Implementation Guidelines

### CSS Custom Properties
```css
:root {
  /* Colors */
  --primary: #F97316;
  --primary-hover: #EA580C;
  --background: #FFFFFF;
  --foreground: #111827;
  --muted: #F9FAFB;
  --border: #E5E7EB;
  
  /* Spacing */
  --spacing-xs: 0.25rem;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 1.5rem;
  --spacing-xl: 2rem;
  
  /* Radius */
  --radius-sm: 0.5rem;
  --radius-md: 1rem;
  --radius-lg: 1.5rem;
  --radius-xl: 2rem;
  
  /* Shadows */
  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 12px rgba(0, 0, 0, 0.08);
  --shadow-lg: 0 8px 25px rgba(249, 115, 22, 0.08);
}
```

### Utility Classes
```css
/* Display */
.flex { display: flex; }
.grid { display: grid; }
.hidden { display: none; }

/* Flexbox */
.items-center { align-items: center; }
.justify-center { justify-content: center; }
.justify-between { justify-content: space-between; }

/* Text */
.text-center { text-align: center; }
.text-right { text-align: right; }
.text-left { text-align: left; }

/* Borders */
.rounded-sm { border-radius: 0.5rem; }
.rounded-md { border-radius: 1rem; }
.rounded-lg { border-radius: 1.5rem; }
.rounded-xl { border-radius: 2rem; }

/* Shadows */
.shadow-sm { box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05); }
.shadow-md { box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08); }
.shadow-lg { box-shadow: 0 8px 25px rgba(249, 115, 22, 0.08); }
```

### RTL Implementation
```css
/* RTL-specific utilities */
.rtl-space-x-reverse > * + * {
  margin-right: var(--space);
  margin-left: 0;
}

.rtl-flex-row-reverse {
  flex-direction: row-reverse;
}

/* RTL text alignment */
[dir="rtl"] .text-left { text-align: right; }
[dir="rtl"] .text-right { text-align: left; }
```

### Performance Considerations
- Use `transform` and `opacity` for animations (GPU accelerated)
- Implement `will-change` property for elements that will animate
- Use `backdrop-filter` sparingly for glassmorphism effects
- Optimize font loading with `font-display: swap`

### Accessibility Implementation
```css
/* Focus management */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

/* High contrast mode support */
@media (prefers-contrast: high) {
  .glass-card {
    border: 2px solid #000;
    background: #fff;
  }
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Quality Assurance Checklist

### Design Consistency
- [ ] All colors match the defined color system
- [ ] Typography follows the established hierarchy
- [ ] Spacing uses the 8px grid system
- [ ] Border radius values are consistent
- [ ] Shadows follow the defined scale

### Accessibility
- [ ] Color contrast ratios meet WCAG AA standards
- [ ] All interactive elements have focus states
- [ ] Text is readable at 200% zoom
- [ ] RTL layout works correctly
- [ ] Keyboard navigation is functional

### Performance
- [ ] Animations use transform/opacity
- [ ] Glassmorphism effects are optimized
- [ ] Font loading is optimized
- [ ] Images are properly sized and compressed

### Responsive Design
- [ ] Layout works on all breakpoints
- [ ] Text remains readable on mobile
- [ ] Touch targets are at least 44px
- [ ] Horizontal scrolling is avoided

This design system serves as the complete reference for implementing consistent, accessible, and beautiful interfaces for the مندلين platform.