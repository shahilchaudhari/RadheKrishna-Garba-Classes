# RadheKrishna Garba Classes

## Overview

This is a full-stack web application for RadheKrishna Garba Classes, a dance academy offering traditional Garba dance instruction. The application serves as a landing page and registration system for potential students to learn about the classes and sign up for the 10-day Garba dance program. The project is built using a modern React frontend with Express.js backend architecture, designed to provide an elegant user experience for dance class registration.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development practices
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: Shadcn/ui component library built on Radix UI primitives for accessible, customizable components
- **Styling**: Tailwind CSS with custom design system including purple-themed colors and Google Fonts (Playfair Display, Inter, Dancing Script)
- **State Management**: TanStack Query (React Query) for server state management and API data fetching
- **Form Handling**: React Hook Form with Zod validation for type-safe form validation
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules for modern JavaScript features
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: Connect-pg-simple for PostgreSQL-backed session storage
- **Development**: TSX for TypeScript execution and hot reloading

### Data Storage Solutions
- **Primary Database**: PostgreSQL via Neon Database for production-ready, serverless database hosting
- **ORM**: Drizzle ORM with Drizzle-Kit for database migrations and schema management
- **Schema Location**: Shared schema definitions in `/shared/schema.ts` for type consistency between frontend and backend
- **In-Memory Fallback**: MemStorage implementation for development and testing scenarios

### Authentication and Authorization
- **Current State**: Basic user schema defined with username/password fields
- **Storage Interface**: Abstracted storage layer with methods for user creation and retrieval
- **Session Handling**: PostgreSQL-based session storage configured for production use
- **Security**: Prepared for session-based authentication with secure cookie handling

### Development and Build Process
- **Monorepo Structure**: Frontend (`/client`), backend (`/server`), and shared code (`/shared`) in single repository
- **Development**: Concurrent frontend and backend development with Vite dev server
- **Production Build**: Vite builds frontend to static files, ESBuild bundles backend for Node.js deployment
- **Path Aliases**: Configured aliases for clean imports (@/, @shared/, @assets/)

## External Dependencies

### UI and Styling
- **Shadcn/ui**: Complete component library with Radix UI primitives for accessible components
- **Tailwind CSS**: Utility-first CSS framework with custom configuration
- **Lucide React**: Icon library for consistent iconography
- **Google Fonts**: Typography with Playfair Display, Inter, and Dancing Script fonts
- **Class Variance Authority**: Type-safe variant management for component styling

### Database and ORM
- **Neon Database**: Serverless PostgreSQL database hosting
- **Drizzle ORM**: Type-safe ORM with automatic TypeScript type generation
- **Drizzle-Zod**: Integration between Drizzle schemas and Zod validation

### Form and Validation
- **React Hook Form**: Performance-focused form library with minimal re-renders
- **Zod**: TypeScript-first schema validation library
- **@hookform/resolvers**: Integration between React Hook Form and Zod

### Development Tools
- **Vite**: Fast build tool with hot module replacement
- **TSX**: TypeScript execution for development
- **ESBuild**: Fast JavaScript bundler for production builds
- **Replit Integration**: Development environment integration with Cartographer and error overlay plugins

### Utilities and Enhancements
- **Date-fns**: Date utility library for date manipulation
- **CLSX & Tailwind Merge**: Conditional class name utilities
- **Wouter**: Lightweight routing library
- **TanStack React Query**: Powerful data synchronization and caching library