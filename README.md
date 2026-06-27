# InterviewIQ.AI 🤖💼

An advanced, AI-powered smart mock interview platform that acts as a real-time interviewer. By parsing uploaded resume documents, the platform generates tailored, role-based technical questions, follows up dynamically on user answers, tracks performance data over time, and provides comprehensive analytics reports.

🔗 **Live Deployment:** [interviewiq-q77q.onrender.com](https://interviewiq-q77q.onrender.com)

---

## 🚀 Key Features

- **Resume-Driven Mock Interviews:** Upload your professional resume in PDF format to receive custom, contextual technical questions mapped directly to your background and target role.
- **Dynamic Conversational AI:** Powered by **OpenRouter AI**, the system conducts adaptive, multi-turn mock interviews with contextual follow-up questions based on your live responses.
- **Interactive Analytics Dashboard:** Monitor overall performance scores out of 10 and view progress metrics over multiple interview sessions using visual data trends.
- **Detailed Evaluation Reports:** Receive objective performance insights (e.g., *“Significant improvement required. Work on clarity and confidence”*) mapping your growth areas.
- **PDF Report Downloads:** Export structured evaluation sheets directly to your local device for offline review.
- **Token / Credit Economy:** Tracks user interview sessions via an integrated platform wallet balance (e.g., $50 starter credits).
- **Secure Authentication:** Scalable login flows featuring Firebase auth integration coupled with standard JWT authorization.

---

## 🛠️ Tech Stack

### Frontend (Client-Side)
- **React.js & Vite** - High-speed module bundling and reactive user interfaces.
- **Redux Toolkit** - Predictable global state management across sessions and interview streams.
- **Tailwind CSS** - Modern, responsive, and minimalist UI system.
- **Chart.js / Recharts** - Dynamic data visualization for tracking user interview performance trends.

### Backend (Server-Side)
- **Node.js & Express.js** - Scalable, decoupled architecture handling API endpoints.
- **OpenRouter AI API** - Orchestrates language model inference for realistic, real-time technical interviewing and performance evaluation.
- **MongoDB & Mongoose** - Document-based data layer maintaining user data, transcripts, and evaluation results.
- **Multer** - Middleware handling processing streams for professional resume PDF uploads.
- **JSON Web Tokens (JWT)** - Custom route protection and user session persistence.

---

## 📂 Project Directory Structure

```text
interviewIQ/
├── server/
│   ├── config/          # Database connections & third-party platform configurations
│   ├── controllers/     # Route handler logic (Auth, Interview streams, Dashboard reports)
│   ├── middlewares/     # isAuth.js (Route protection) & multer.js (PDF file handling)
│   ├── models/          # Mongoose Schemas (User schema, Interview transcript schemas)
│   ├── routes/          # API route routing tables
│   ├── services/        # OpenRouter AI API integration and prompt template engines
│   ├── index.js         # Backend server entry point
│   └── .env             # Server-side secrets and runtime credentials
│
└── client/
    ├── src/
    │   ├── assets/      # Media files, icons, and platform illustrations
    │   ├── components/  # Reusable UI widgets (Charts, Navigation Bars, Modals)
    │   ├── pages/       # Core app views (Home, Interview Page, History, Analytics Dashboard)
    │   ├── redux/       # Store setup, global actions, and state management slices
    │   ├── utils/       # Global formatting functions and firebase.js instance definitions
    │   ├── App.jsx      # Primary component routes root
    │   └── main.jsx     # Frontend runtime mounting setup
    └── .env             # Client-side configuration environment values

🔧 Installation & Local Setup
Prerequisites
Node.js (v18.x or higher recommended)

MongoDB instance (Atlas Cloud Cluster or Local Database)

OpenRouter AI API Key

1. Clone the Source
Bash
git clone [https://github.com/Bhupendra-Kumar-1/interviewIQ.git](https://github.com/Bhupendra-Kumar-1/interviewIQ.git)
cd interviewIQ
2. Configure the Backend Server
Bash
cd server
npm install
Create a .env file within your server/ directory:

Code snippet
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_signing_secret
OPENROUTER_API_KEY=your_openrouter_api_token
Fire up the server pipeline:

Bash
npm run dev # or node index.js
3. Configure the Frontend Client
Bash
cd ../client
npm install
Create a .env file within your client/ directory:

Code snippet
VITE_BACKEND_URL=http://localhost:5000
VITE_FIREBASE_API_KEY=your_firebase_configuration_key
Launch the development application server:

Bash
npm run dev
🛡️ Route Access & Security Middleware
isAuth.js: Prevents unauthorized cross-origin tampering by intercepting requests and parsing JWT auth headers.

multer.js: Isolates file memory streams safely to optimize the parsing of uploaded application files (Resumes).

📄 License
Distributed under the MIT License. See LICENSE for more information.


***

### Why this structure works well for your repo:
1. **Highlights OpenRouter:** Specifically credits **OpenRouter AI** as your central intelligence driver for conversational interviews.
2. **Details the PDF Workflow:** Explains how the backend combines **Multer** with the AI services to extract text from a user's resume and generate tailored mock questions.
3. **Clean Code Architecture:** Accurately maps out your controllers, routes, models
