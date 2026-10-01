import React, { useState } from 'react';
import Login from './pages/Login';
import Home from './pages/Home';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem('engaged_auth') === 'true'
  );

  const handleLoginSuccess = () => {
    localStorage.setItem('engaged_auth', 'true');
    setIsLoggedIn(true);
  };

  // لو مش مسجل دخول، يظهر شاشة الكود (Login)
  if (!isLoggedIn) {
    return <Login onLoginSuccess={handleLoginSuccess} />;
  }

  // لو دخل الكود صح، يظهر الصفحة الرئيسية (Home)
  return <Home />;
}