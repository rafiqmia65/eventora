# Eventora - Event Management Platform

Eventora is a modern web-based event management platform that allows users to create, manage, and book events seamlessly. The platform provides role-based access for Admins, and Users to ensure smooth event operations.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Scripts](#scripts)
- [API Routes](#api-routes)
- [Contributing](#contributing)
- [License](#license)

## Features

- Role-based authentication (Admin, Organizer, User)
- Event creation, update, and deletion
- Event booking system with ticket management
- Search and filter events by category, date, and location
- Responsive design for all devices
- Dark/light theme support
- Real-time notifications for bookings and updates
- Dashboard for event management and analytics
- User profile management

## Tech Stack

- **Frontend**: Next.js 15, React 19, Tailwind CSS 4, shadCN
- **Backend**: Next.js API Routes, Server Actions
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: NextAuth.js 5
- **Form Handling**: React Hook Form
- **UI Components**: Radix UI, Lucide React icons
- **Notifications**: Sonner toast notifications
- **Rich Text Editor**: React Quill
- **Animation**: Framer Motion

## Installation

1. Clone the repository:

```bash
git clone https://github.com/rafiqmia/eventora.git
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Set up environment variables (see below)

4. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Environment Variables

Create a `.env` file in the root directory:

```env
# Database
MONGODB_URI=your_mongodb_connection_string

# NextAuth.js
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret_here

# Optional: For production
NEXTAUTH_URL_INTERNAL=http://localhost:3000

```

## Usage

### Roles and Permissions

- **Admins**: Full access to manage users, view statistics, Create and manage their own events, view bookings
- **Users**: Browse events, book tickets, manage their bookings

### Getting Started

1. **Sign Up**: Create a new account or sign in with existing credentials
2. **Browse Events**: Explore available events on the events page
3. **Book Events**: Select events and book tickets
4. **Manage Events** (Admins): Create and manage events through the dashboard
5. **Manage Users** (Admins): Oversee user accounts and permissions

## Project Structure

```
eventora/
├── app/                    # Next.js App Router directory
│   ├── (dashboard)/       # Dashboard route group (protected routes)
│   │   ├── addEvent/      # Add event page
│   │   ├── allEvents/     # All events management page
│   │   ├── dashboard/     # Main dashboard page
│   │   ├── myBookingEvent/ # User booking events page
│   │   ├── users/         # Users management page
│   │   └── layout.js      # Dashboard layout component
│   ├── (public)/          # Public route group
│   │   ├── about/         # About page
│   │   ├── contact/       # Contact page
│   │   ├── events/        # Events listing page
│   │   ├── login/         # Login page
│   │   ├── signUp/        # Sign up page
│   │   └── layout.js      # Public layout component
│   ├── api/               # API routes
│   │   ├── auth/          # Authentication API endpoints
│   │   ├── bookings/      # Bookings API endpoints
│   │   ├── events/        # Events API endpoints
│   │   └── health/        # Health check API
│   ├── actions/           # Server actions
│   ├── globals.css        # Global CSS styles
│   ├── layout.js          # Root layout component
│   ├── loading.jsx        # Loading component
│   └── favicon.ico        # Website favicon
├── components/            # Reusable React components
│   ├── auth/              # Authentication components
│   ├── dashboard/         # Dashboard components
│   │   ├── addEvent/      # Add event form components
│   │   ├── allEvents/     # Events management components
│   │   ├── mybookingEvents/ # Booking management components
│   │   ├── users/         # User management components
│   │   ├── DashboardWrapper.jsx # Dashboard wrapper component
│   │   ├── MainContent.jsx # Main content area component
│   │   └── Sidebar.jsx    # Dashboard sidebar component
│   ├── events/            # Events-related components
│   ├── ui/                # UI components
│   │   ├── Footer.jsx     # Footer component
│   │   ├── ModeToggle.jsx # Theme toggle component
│   │   ├── Navbar.jsx     # Navigation bar component
│   │   └── theme-provider.jsx # Theme provider component
│   └── Home/              # Home page components
├── lib/                   # Utility libraries and configurations
│   ├── models/            # MongoDB/Mongoose models
│   │   ├── booking-model.js # Booking model schema
│   │   ├── events-model.js # Event model schema
│   │   └── user-model.js  # User model schema
├── public/                # Static assets
├── not-found.jsx          # 404 error page
└── package.json           # Project dependencies and scripts
```

## Scripts

- `npm run dev` - Start the development server with Turbopack
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint for code linting

## API Routes

### Authentication

- `POST /api/auth/register` - User sign in,registration,sign out, Get current session

### Events

- `GET /api/events` - Get all events (with optional filters)
- `POST /api/events` - Create a new event
- `GET /api/events/[id]` - Get a specific event
- `PUT /api/events/[id]` - Update an event
- `DELETE /api/events/[id]` - Delete an event

### Bookings

- `GET /api/bookings` - Get user bookings
- `POST /api/bookings` - Create a new booking
- `GET /api/bookings/[id]` - Get a specific booking
- `DELETE /api/bookings/[id]` - Cancel a booking

### Health

- `GET /api/health` - Health check endpoint

## Contributing

We welcome contributions to Eventora! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

Please ensure your code follows the existing style and includes appropriate tests.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

If you have any questions or issues, please open an issue on GitHub or contact our support team at support@eventora.com.

---

**Made with ❤️ by the Eventora Team**
