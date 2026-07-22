# BookStore

A simple full-stack bookstore management app built with React, Vite, Express, and MongoDB. The project allows users to view, create, edit, and delete books in a clean dashboard-style interface.

## Features

- View books in table or card layout
- Add new books
- Edit existing book details
- Delete books
- REST API backend with MongoDB storage

## Tech Stack

### Frontend

- React
- Vite
- Tailwind CSS
- React Router
- Axios

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose

## Project Structure

```text
backend/
  config.js
  index.js
  models/
  routes/
frontend/
  src/
  public/
```

## Prerequisites

Make sure you have the following installed:

- Node.js
- npm
- MongoDB Atlas account or a local MongoDB instance

## Getting Started

### 1. Clone the repository

```bash
git clone <your-repository-url>
cd BookStore
```

### 2. Setup the backend

```bash
cd backend
npm install
```

Update the MongoDB connection URL in [backend/config.js](backend/config.js) with your own database connection string.

Start the backend server:

```bash
npm run dev
```

The backend will run on:

- http://localhost:5555

### 3. Setup the frontend

```bash
cd ../frontend
npm install
npm run dev
```

The frontend will run on:

- http://localhost:5173

## Usage

- Open the frontend in your browser.
- Use the interface to browse your books.
- Add, edit, or delete books through the app.

## GitHub Suggestions

Before pushing to GitHub, consider these items:

- Add a short repository description
- Add topics such as: react, vite, express, mongodb, nodejs, tailwind
- Choose a license (for example MIT)
- Add a screenshot or demo GIF
- Create a Issues section for feature requests and bugs
- Keep sensitive credentials out of the repository; use environment variables where possible

## License

This project is open for personal and educational use.
