# 🎧 Alsam3

![CI/CD](https://github.com/YOUR_USERNAME/alsam3/actions/workflows/ci.yml/badge.svg)

A modern web application built with **Laravel + Inertia.js + React (TSX) + Vite**.

---

## 📋 Table of Contents

- [Requirements](#-requirements)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Development Workflow](#-development-workflow)
- [Git Workflow](#-git-workflow)
- [CI/CD Pipeline](#-cicd-pipeline)
- [Creating Pages](#-creating-pages)
- [Creating Routes](#-creating-routes)
- [Creating Layouts](#-creating-layouts)
- [Passing Data from Backend to Frontend](#-passing-data-from-backend-to-frontend)
- [Available Commands](#-available-commands)
- [Troubleshooting](#-troubleshooting)
- [Tech Stack](#-tech-stack)

---

## 📌 Requirements

Make sure you have the following installed on your machine:

| Tool       | Version  | Check Command          |
|------------|----------|------------------------|
| PHP        | >= 8.2   | `php -v`               |
| Composer   | >= 2.x   | `composer -V`          |
| Node.js    | >= 22.x  | `node -v`              |
| NPM        | >= 10.x  | `npm -v`               |
| Git        | >= 2.x   | `git --version`        |
| GitHub CLI | >= 2.x   | `gh --version`         |

### Install Requirements (Windows)

```bash
# Install Chocolatey (if not installed) - Run PowerShell as Admin
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))

# Install tools
choco install php composer nodejs git gh -y
```

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/alsam3.git
cd alsam3
```

### 2. Install Backend Dependencies

```bash
composer install
```

### 3. Install Frontend Dependencies

```bash
npm install
```

### 4. Environment Setup

```bash
cp .env.example .env
php artisan key:generate
```

### 5. Configure Database

Edit `.env` file with your database credentials:

```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=alsam3
DB_USERNAME=root
DB_PASSWORD=your_password
```

### 6. Run Migrations

```bash
php artisan migrate
```

### 7. Start Development Servers

You need **two terminals** running at the same time:

```bash
# Terminal 1 - Laravel Backend
php artisan serve
```

```bash
# Terminal 2 - Vite Frontend (React Hot Reload)
npm run dev
```

### 8. Open in Browser

Visit: **http://localhost:8000**

---

## 📁 Project Structure

```
alsam3/
├── app/
│   ├── Http/
│   │   ├── Controllers/        # Laravel controllers
│   │   └── Middleware/
│   │       └── HandleInertiaRequests.php  # Inertia middleware
│   └── Models/                 # Eloquent models
│
├── resources/
│   ├── css/
│   │   └── app.css             # Global styles
│   ├── js/
│   │   ├── Layouts/            # Reusable page layouts
│   │   │   └── MainLayout.tsx
│   │   ├── Pages/              # Page components (mapped to routes)
│   │   │   ├── Home.tsx
│   │   │   └── About.tsx
│   │   ├── Components/         # Reusable UI components
│   │   ├── types/              # TypeScript type definitions
│   │   │   ├── global.d.ts
│   │   │   └── index.d.ts
│   │   └── app.tsx             # App entry point
│   └── views/
│       └── app.blade.php       # Root Blade template
│
├── routes/
│   └── web.php                 # All web routes
│
├── tests/
│   ├── Feature/                # Feature tests
│   └── Unit/                   # Unit tests
│
├── .github/
│   └── workflows/
│       └── ci.yml              # CI/CD pipeline config
│
├── vite.config.ts              # Vite configuration
├── tsconfig.json               # TypeScript configuration
├── .env                        # Environment variables (DO NOT COMMIT)
└── .env.example                # Environment template
```

---

## 💻 Development Workflow

### Daily Workflow

```bash
# 1. Pull latest changes
git pull origin master

# 2. Install any new dependencies
composer install
npm install

# 3. Run migrations (if any new ones)
php artisan migrate

# 4. Start development servers
php artisan serve    # Terminal 1
npm run dev          # Terminal 2

# 5. Start coding!
```

### Before Pushing Code

```bash
# Run tests locally to make sure nothing is broken
php artisan test
npm run build
```

---

## 🌿 Git Workflow

### Creating a Feature Branch

```bash
# Create and switch to a new branch
git checkout -b feature/your-feature-name

# Examples:
git checkout -b feature/user-authentication
git checkout -b feature/dashboard-page
git checkout -b fix/login-bug
```

### Committing Changes

```bash
git add .
git commit -m "Add: description of what you did"
```

### Commit Message Convention

| Prefix     | Use For                  | Example                              |
|------------|--------------------------|--------------------------------------|
| `Add:`     | New feature              | `Add: user registration page`        |
| `Fix:`     | Bug fix                  | `Fix: login redirect issue`          |
| `Update:`  | Modify existing feature  | `Update: dashboard layout`           |
| `Remove:`  | Delete code/files        | `Remove: unused components`          |
| `Refactor:`| Code improvement         | `Refactor: auth middleware`          |
| `Docs:`    | Documentation            | `Docs: update README`                |
| `Style:`   | CSS/UI changes           | `Style: improve mobile navbar`       |

### Pushing Changes

```bash
# Push to your feature branch
git push origin feature/your-feature-name
```

### Creating a Pull Request

```bash
# Using GitHub CLI
gh pr create --title "Add: your feature" --body "Description of changes"
```

### After PR is Approved and Merged

```bash
git checkout master
git pull origin master
git branch -d feature/your-feature-name
```

---

## 🤖 CI/CD Pipeline

Every time you push code or create a Pull Request, GitHub Actions **automatically**:

```
Push/PR → Install Node.js → Build Frontend → Install PHP → Run Tests
```

### What Gets Checked

| Step                | What It Does                              |
|---------------------|-------------------------------------------|
| Install NPM         | Installs frontend packages                |
| Build Frontend       | Compiles React/TypeScript/Vite            |
| Install Composer     | Installs backend packages                 |
| Setup Laravel        | Configures env, generates key, creates DB |
| Run Laravel Tests    | Runs all PHP tests                        |

### Checking CI/CD Status

```bash
# List recent workflow runs
gh run list

# Watch a running workflow
gh run watch

# View failed run details
gh run view --log-failed
```

### ⚠️ Important Rules

- **Never merge a PR with failed checks** ❌
- **Always run tests locally before pushing** ✅
- **Fix CI/CD failures immediately** 🔧

---

## 📄 Creating Pages

### Step 1: Create the React Component

Create a new file in `resources/js/Pages/`:

```tsx
// resources/js/Pages/Contact.tsx

import MainLayout from '@/Layouts/MainLayout';

interface ContactProps {
    email: string;
    phone: string;
}

export default function Contact({ email, phone }: ContactProps) {
    return (
        <MainLayout title="Contact">
            <h1>Contact Us</h1>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
        </MainLayout>
    );
}
```

### Step 2: Add the Route

```php
// routes/web.php

Route::get('/contact', function () {
    return Inertia::render('Contact', [
        'email' => 'hello@alsam3.com',
        'phone' => '+1234567890',
    ]);
});
```

### Step 3: Done! Visit `/contact`

---

## 🛤️ Creating Routes

### Basic Route with Inertia

```php
// routes/web.php

use Inertia\Inertia;

// Simple page
Route::get('/about', function () {
    return Inertia::render('About');
});

// Page with data
Route::get('/dashboard', function () {
    return Inertia::render('Dashboard', [
        'stats' => [
            'users' => 100,
            'posts' => 250,
        ],
    ]);
});
```

### Route with Controller

```bash
# Create controller
php artisan make:controller PostController
```

```php
// app/Http/Controllers/PostController.php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Post;

class PostController extends Controller
{
    public function index()
    {
        return Inertia::render('Posts/Index', [
            'posts' => Post::all(),
        ]);
    }

    public function show(Post $post)
    {
        return Inertia::render('Posts/Show', [
            'post' => $post,
        ]);
    }
}
```

```php
// routes/web.php

use App\Http\Controllers\PostController;

Route::get('/posts', [PostController::class, 'index']);
Route::get('/posts/{post}', [PostController::class, 'show']);
```

---

## 🖼️ Creating Layouts

### Create a New Layout

```tsx
// resources/js/Layouts/DashboardLayout.tsx

import { Head, Link } from '@inertiajs/react';
import { ReactNode } from 'react';

interface DashboardLayoutProps {
    children: ReactNode;
    title?: string;
}

export default function DashboardLayout({ children, title }: DashboardLayoutProps) {
    return (
        <>
            <Head title={title} />
            <div style={{ display: 'flex' }}>
                {/* Sidebar */}
                <aside style={{ width: '250px', backgroundColor: '#1F2937', minHeight: '100vh', padding: '1rem' }}>
                    <h2 style={{ color: 'white' }}>🎧 Alsam3</h2>
                    <nav>
                        <Link href="/dashboard" style={{ color: 'white', display: 'block', padding: '0.5rem 0' }}>
                            Dashboard
                        </Link>
                        <Link href="/settings" style={{ color: 'white', display: 'block', padding: '0.5rem 0' }}>
                            Settings
                        </Link>
                    </nav>
                </aside>

                {/* Main Content */}
                <main style={{ flex: 1, padding: '2rem' }}>
                    {children}
                </main>
            </div>
        </>
    );
}
```

### Use It in a Page

```tsx
// resources/js/Pages/Dashboard.tsx

import DashboardLayout from '@/Layouts/DashboardLayout';

export default function Dashboard() {
    return (
        <DashboardLayout title="Dashboard">
            <h1>Dashboard</h1>
            <p>Welcome to your dashboard!</p>
        </DashboardLayout>
    );
}
```

---

## 📡 Passing Data from Backend to Frontend

### Backend (Laravel) → Frontend (React)

```php
// routes/web.php

Route::get('/users', function () {
    return Inertia::render('Users/Index', [
        'users' => User::all(),          // Collection
        'totalUsers' => User::count(),   // Number
        'appName' => config('app.name'), // String
        'isAdmin' => true,               // Boolean
    ]);
});
```

### Frontend (React) — Receive the Data

```tsx
// resources/js/Pages/Users/Index.tsx

import MainLayout from '@/Layouts/MainLayout';

interface User {
    id: number;
    name: string;
    email: string;
}

interface UsersIndexProps {
    users: User[];
    totalUsers: number;
    appName: string;
    isAdmin: boolean;
}

export default function UsersIndex({ users, totalUsers, appName, isAdmin }: UsersIndexProps) {
    return (
        <MainLayout title="Users">
            <h1>{appName} - Users ({totalUsers})</h1>
            {isAdmin && <p>You have admin access</p>}
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.name} - {user.email}
                    </li>
                ))}
            </ul>
        </MainLayout>
    );
}
```

---

## 🔧 Available Commands

### Laravel Commands

```bash
php artisan serve              # Start Laravel server
php artisan migrate            # Run database migrations
php artisan migrate:fresh      # Reset & re-run migrations
php artisan make:controller    # Create controller
php artisan make:model         # Create model
php artisan make:migration     # Create migration
php artisan test               # Run all tests
php artisan route:list         # Show all routes
```

### NPM Commands

```bash
npm run dev                    # Start Vite dev server (hot reload)
npm run build                  # Build for production
```

### Git Commands

```bash
git status                     # Check changed files
git add .                      # Stage all changes
git commit -m "message"        # Commit changes
git push origin branch-name    # Push to GitHub
git pull origin master         # Pull latest changes
git checkout -b branch-name    # Create new branch
```

### GitHub CLI Commands

```bash
gh auth login                  # Login to GitHub
gh pr create                   # Create Pull Request
gh pr list                     # List Pull Requests
gh run list                    # List CI/CD runs
gh run watch                   # Watch CI/CD run live
gh run view --log-failed       # View failed run details
gh browse                      # Open repo in browser
```

---

## 🔥 Troubleshooting

### "Vite manifest not found"

```bash
npm run build
```

### "npm ci" fails

```bash
rm -rf node_modules package-lock.json
npm install
```

### "php artisan" fails

```bash
composer install
cp .env.example .env
php artisan key:generate
```

### TypeScript errors

```bash
npx tsc --noEmit
# Fix the errors shown in the output
```

### Port 8000 already in use

```bash
# Use a different port
php artisan serve --port=8001
```

### Clear all Laravel caches

```bash
php artisan config:clear
php artisan cache:clear
php artisan view:clear
php artisan route:clear
```

---

## 🛠️ Tech Stack

| Technology    | Purpose           | Docs                                        |
|---------------|-------------------|----------------------------------------------|
| Laravel       | Backend Framework  | https://laravel.com/docs                     |
| Inertia.js    | SPA Bridge         | https://inertiajs.com                        |
| React         | UI Library         | https://react.dev                            |
| TypeScript    | Type Safety        | https://www.typescriptlang.org/docs          |
| Vite          | Build Tool         | https://vite.dev                             |
| Tailwind CSS  | CSS Framework      | https://tailwindcss.com/docs                 |
| GitHub Actions| CI/CD              | https://docs.github.com/en/actions           |

---

## 👥 Team

| Name       | Role          |
|------------|---------------|
| Your Name  | Lead Developer |

---

## 📝 License

This project is private and proprietary.