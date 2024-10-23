import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ClerkProvider, useUser } from '@clerk/clerk-react';
import Signup from './components/Signup.jsx';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Signin from './components/Signin.jsx';
import Lead from './components/Lead.jsx';
import Cal from './components/Cal.jsx';
import Events from './components/Events.jsx';
import Com from './components/Com.jsx';
import Dou from './components/Dou.jsx';
import Maps from './components/MapComponent.jsx';
import { Loader2 } from 'lucide-react';

// Import your publishable key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key');
}

const ProtectedRoute = ({ element }) => {
  const { isSignedIn, isLoaded } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      navigate('/signup');
    }
  }, [isLoaded, isSignedIn, navigate]);

  if (!isLoaded) {
    return (
      <div className="flex justify-center items-center">
        <Loader2 />
      </div>
    );
  }

  if (!isSignedIn) {
    return null; // Avoid rendering the component before redirection
  }

  return element;
};

const ClerkWithRoutes = () => (
  <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
    <Routes>
      <Route path="/" element={<ProtectedRoute element={<App />} />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/leaderboard" element={<ProtectedRoute element={<Lead />} />} />
      <Route path="/calendar" element={<ProtectedRoute element={<Cal />} />} />
      <Route path="/events" element={<ProtectedRoute element={<Events />} />} />
      <Route path="/community" element={<ProtectedRoute element={<Com />} />} />
      <Route path="/community/:communityId" element={<ProtectedRoute element={<Dou />} />} />
      <Route path="/maps" element={<ProtectedRoute element={<Maps />} />} />
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
