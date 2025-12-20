# Architecture Decision Records

## Project Overview

This is a Next.js client application for Bookn, built with React 19, TypeScript, and Tailwind CSS.

## Technology Stack Decisions

### Next.js 16 with App Router

- Chosen for modern React patterns and server-side rendering capabilities
- App router provides better file-based routing and layout system

### shadcn/ui Integration

- Added NavigationMenu component for consistent UI patterns
- Provides accessible, customizable components with Radix UI primitives

### Tailwind CSS v4

- Latest version for improved performance and developer experience
- Provides utility-first CSS approach for rapid styling

## Component Architecture

### Header Component Structure

- Created modular Header component in app/components/
- Integrated with MainComponent for consistent layout
- Added navigation items for user interaction

### File Organization

- app/components/ for application-specific components
- components/ui/ for reusable UI components from shadcn
- lib/utils.ts for shared utility functions

### Component Development Pattern

- Components are created as individual files
- Integration follows incremental approach
- Focus on modular, reusable components

