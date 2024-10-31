import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { ClerkProvider, useUser } from '@clerk/clerk-react';
import { BrowserRouter, Routes, Route, useNavigate, Outlet } from 'react-router-dom';
import { Loader2 } from 'lucide-react';

// Import your components
import Signup from './components/Signup.jsx';
import Signin from './components/Signin.jsx';
import Lead from './components/Lead.jsx';
import Cal from './components/Cal.jsx';
import Events from './components/Events.jsx';
import Com from './components/Com.jsx';
import Dou from './components/Dou.jsx';
import Maps from './components/MapComponent.jsx';
import Dashboard from './components/Dashboard.jsx';
import Navbar from './components/Navbar.jsx';
import ThemeToggle from './components/ThemeToggle.jsx';
import User from './components/User.jsx';
import Leaderboard from './components/LeaderBoard';
import CalendarComponent from './components/Calendar';
import Eventcomp from './components/Eventcomp';
import Communities from './components/Communities';
import Doubts from './components/Doubts';

// Import your publishable key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key');
}

// Protected Route Wrapper
const ProtectedRoute = ({ children }) => {
  const { isSignedIn, isLoaded, user } = useUser();
  const username = user?.username || "Buddy"; // Set username with fallback
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      navigate('/signup');
    }
  }, [isLoaded, isSignedIn, navigate]);

  if (!isLoaded) {
    return (
      <div className="dark:bg-black flex justify-center items-center">
        <Loader2 />
      </div>
    );
  }

  // Pass `username` as a prop if rendering `Dashboard`
  return isSignedIn ? (
    <Outlet context={{ username }} />
  ) : null;
};

// Layout Component
function Layout() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-800 dark:text-gray-200">
      <Navbar />
      <header className="p-4 flex justify-between items-center">
        <h1 className="text-2xl"></h1>
        <div className="flex justify-around">
          <ThemeToggle />
          <User />
        </div>
      </header>
      <main className="p-4">
        <div className="ml-0 mr-0 md:ml-[15%] md:mr-[2%] lg:ml-[15%] lg:mr-[2%]">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

// Main Routing Component
const ClerkWithRoutes = () => (
  <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
    <Routes>
      {/* Routes without Layout */}
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />

      {/* Routes with Layout */}
      <Route element={<Layout />}>
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="leaderboard" element={<Leaderboard />} />
          <Route path="calendar" element={<CalendarComponent />} />
          <Route path="events" element={<Eventcomp />} />
          <Route path="community" element={<Communities />} />
          <Route path="community/:communityId" element={<Doubts />} />
          <Route path="maps" element={<Maps />} />
        </Route>
      </Route>
    </Routes>
  </ClerkProvider>
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ClerkWithRoutes />
    </BrowserRouter>
  </StrictMode>
);
