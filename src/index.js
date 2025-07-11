import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import AccountSettings from './pages/AccountSettings';
import About from './pages/About';  // Importing the About component
import Favorites from './pages/Favorites';
import LandingPage from './pages/LandingPage';
import Profile from './pages/Profile';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Sitemap from './pages/Sitemap';
import Movies from './pages/Movies';  
import Images from './pages/Images'; 
import NoPage from './pages/NoPage'; 
import 'bootstrap/dist/css/bootstrap.min.css'; // Importing Bootstrap CSS

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/accountsettings" element={<AccountSettings />} />
        <Route path="/about" element={<About />} />
        <Route path="/favs" element={<Favorites />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/images" element={<Images />} />
        <Route path="/sitemap" element={<Sitemap />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path='*' element={<NoPage />} />
        {/* Catch-all route for 404 errors. Asterisk (*) indicates if anything types in url does not 
        match above, then go to 404 page*/}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
