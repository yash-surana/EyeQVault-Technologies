# EyeQVault

A modern, responsive landing page for EyeQVault, a cybersecurity company offering advanced security solutions.

## Technologies

- React + Vite
- Tailwind CSS
- Framer Motion for animations

## Project Structure

EyeQVault/
├── api/ # API endpoints (add-contact.js)
├── backend/ # Express server for local development
├── frontend/
│ ├── public/ # Static assets
│ └── src/
│ ├── components/ # React components
│ ├── layout/ # Layout components
│ ├── assets/ # Images and other assets
│ └── utils/ # Utility functions

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🔑 Environment Variables

Create a .env file in the root directory:

```bash
# - backend - .env
BREVO_API_KEY=your_brevo_api_key
ADMIN_EMAIL=info@eyeqvault.com
PORT=5000
LEADS_APP_SCRIPT_URL=google-sheets-link
```

## 📄 License

This project is proprietary to EyeQVault. All rights reserved.

---
