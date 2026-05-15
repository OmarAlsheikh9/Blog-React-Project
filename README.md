# Blog-Project — React Blog Application

Final course project: a blog with authentication, post listing, and CRUD for the logged-in user's posts.

## Tech stack

- **Frontend:** React 19, Vite, React Router, Tailwind CSS, DaisyUI
- **Backend:** json-server-auth (REST API + JWT auth)

## Prerequisites

- Node.js 18+
- npm

## Run locally

### 1. Start the API (port 5135)

```bash
cd server
npm install
npm run server
```

### 2. Start the frontend

In a second terminal:

```bash
cd "Blog Application"
npm install
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

## Features

- **Home:** Navbar, list of posts (image, title, description, author)
- **Auth:** Register / login; after login, header shows `Hi {username}` and **Log Out**; floating **+** adds posts
- **Posts:** Create, edit, and delete only your own posts
- **Form fields:** Title, description, image URL

## Author

Developed by **Omar Alshiekh**

## Project structure

```
Blog-React-Project/
├── Blog Application/   # React frontend
└── server/             # json-server-auth + db.json
```

## Submission

Push this repo to GitHub and email the link to the instructor with subject:

`[React Course]: Blog Project`
