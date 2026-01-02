import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from '../shared/contexts/AuthContext';
import { ThemeProvider } from '../shared/contexts/ThemeContext';
import { LandingPage } from '../features/landing';
import { SignInPage, SignUpPage, AuthCallbackPage } from '../features/auth';
import { Dashboard } from '../features/dashboard';

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/auth/callback" element={<AuthCallbackPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}