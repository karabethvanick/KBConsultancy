import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Admin from './pages/Admin';
import { AuthProvider } from './contexts/AuthContext';
import './styles/global.css';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      {/* 👇 Now both App and Admin are inside AuthProvider */}
      <AuthProvider>
        <Routes>
          {/* Public site */}
          <Route path="/*" element={<App />} />

          {/* Separate admin route */}
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
