# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server (runs on port 3000, opens browser automatically)
- `npm run build` - Build for production (TypeScript compilation + Vite build)
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint with TypeScript support
- `npm run type-check` - Run TypeScript type checking without emitting files

## Architecture Overview

This is a React/TypeScript resume website built with Vite, featuring:

### Core Technologies
- **React 19** with TypeScript
- **Material-UI (MUI)** for components and theming
- **Emotion** for styled components
- **Vite** for build tooling with React Compiler plugin
- **AWS Amplify** for deployment (configured in amplify.yml)

### Performance Architecture
The application implements sophisticated performance optimizations:

- **Lazy loading system**: Custom `LazyComponent` wrapper with Intersection Observer API for viewport-based loading
- **Component preloading**: `useComponentPreloader` hook for strategic component preloading
- **Performance monitoring**: `usePerformanceMonitor` hook tracks component load times
- **Bundle splitting**: Vendor chunks separated for React/DOM and MUI libraries
- **Skeleton UI**: Custom skeleton components for loading states

### Theme System
Dual-theme architecture with:
- Light/dark theme toggle via `useThemeMode` hook
- Dynamic gradient backgrounds that change with theme
- Custom MUI component overrides for cards and containers
- Persistent theme state management

### Component Structure
- **Lazy-loaded components**: CodeBlock, ResumeCards, BotExplainer with dedicated skeleton fallbacks
- **Layout layers**: Fixed background layer with animated stars, relative foreground content
- **Responsive design**: Mobile-first approach with breakpoint-specific styling

### Key Files
- `src/utils/LazyComponent.tsx` - Core lazy loading infrastructure
- `src/theme/theme.ts` - Theme definitions and MUI customizations
- `src/hooks/` - Performance and component preloading hooks
- `vite.config.js` - Build configuration with manual chunk splitting

The codebase uses path aliasing (`@/` maps to `./src`) and follows TypeScript strict mode conventions.