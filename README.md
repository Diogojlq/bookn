# Bookn

A booking management application built with a modern full-stack architecture.

## Overview

Bookn is a comprehensive booking system that allows users to manage and reserve time slots. The application features a clean, responsive interface with both client and server components.

## Architecture

This project follows a monorepo structure with separate client and server applications:

- **Client**: Next.js frontend with React, TypeScript, and Tailwind CSS
- **Server**: Express.js backend with TypeScript and Prisma ORM
- **Database**: PostgreSQL

## Tech Stack

### Client

- Next.js 16.0.10
- React 19.2.1
- TypeScript
- Tailwind CSS
- Shadcn components

### Server

- Express.js
- TypeScript
- Prisma ORM
- PostgreSQL
- Node.js

## Project Structure

```
bookn/
├── client/                 # Next.js frontend application
│   ├── app/                # App router pages and layouts
│   ├── components/         # Reusable React components
│   ├── lib/                # Utility functions
│   └── public/             # Static assets
├── server/                 # Express.js backend application
│   ├── src/                # Server source code
│   ├── prisma/             # Database schema and migrations
│   └── generated/          # Prisma generated client
└── docker-compose.yaml     # Docker configuration
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- PostgreSQL database
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd bookn
```

2. Install dependencies:

```bash
npm install
cd client && npm install
cd ../server && npm install
```

3. Set up environment variables:

```bash
# In server directory
cp .env.example .env
# Configure your database connection in .env
```

4. Set up the database:

```bash
cd server
npx prisma generate
npx prisma db push
```

### Running the Application

Start both client and server concurrently:

```bash
npm run dev
```

Or run them individually:

```bash
# Start client only
npm run client

# Start server only
npm run server
```

The client will be available at `http://localhost:3000` and the server at `http://localhost:5000`.

## Database Schema

The application uses two main models:

- **User**: Stores user information including email, name, and authentication data
- **Slot**: Manages booking slots with date, time ranges, and availability status

## Scripts

- `npm run dev`: Start both client and server in development mode
- `npm run client`: Start only the client application
- `npm run server`: Start only the server application
- `npm run build`: Build the client for production
- `npm run start`: Start the production server

## Development

The project uses ESLint and Prettier for code formatting and linting. The development server supports hot reloading for both frontend and backend changes.

## Deployment

The project includes Docker configuration for containerized deployment. Use the provided Dockerfile and docker-compose.yaml for production deployments.
