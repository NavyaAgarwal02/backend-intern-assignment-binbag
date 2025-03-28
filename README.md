# User Profile Management API

## Overview
This is a User Profile Management API built using Node.js, Express.js, and MongoDB. It allows users to register, log in, view, and update their profiles.

## Features
- User Registration
- User Login
- Profile Management
- Authentication using JWT

## Prerequisites
Ensure you have the following installed:
- Node.js
- npm (Node Package Manager)
- MongoDB

## Installation and Setup

1. **Clone the Repository:**
```bash
git clone <repository-url>
cd <project-directory>
```

2. **Install Dependencies:**
```bash
npm install
```

3. **Set Up Environment Variables:**
- Create a `.env` file in the project root.
- Add the following variables:
```env
PORT=3000
MONGO_URI=your-mongodb-connection-string
JWT_SECRET=your-secret-key
```

4. **Run the Application:**
```bash
npm start
```

The server will run on `http://localhost:3000` by default.

## API Endpoints

### Authentication Routes
- **POST /api/auth/register** - Register a new user
- **POST /api/auth/login** - Login and get JWT token

### Profile Management Routes (Authenticated)
- **GET /api/profile** - Get user profile
- **PUT /api/profile** - Update user profile

## Usage Guide
- Use tools like **Postman** to test API endpoints.
- Ensure to include the JWT token in the `Authorization` header for authenticated routes.

### Example Request
```http
GET /api/profile
Authorization: Bearer <your-jwt-token>
```

## Error Handling
- Proper error messages are returned using HTTP status codes.
- Ensure to pass correct input data to avoid validation errors.

## Tech Stack
- **Node.js**
- **Express.js**
- **MongoDB**
- **JWT** for authentication

---
Feel free to contribute by submitting issues or pull requests!
