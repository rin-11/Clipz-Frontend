import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './App.css';
import Header from './components/Header/Header';
import UserAuth from './pages/Auth/Auth';
import Explore from './pages/Explore/Explore';
import Profile from './pages/Profile/Profile';
import SearchBar from './components/Header/SearchBar/SearchBar';

function App() {
  // retrieve the 'profile' item from the localStorage and parse it from JSON to a JS object
  const user = JSON.parse(localStorage.getItem('profile'));

  return (
    <div className="App">
      <Header />
      <Routes>
        {user ? (
          <>
            <Route path="/" element={<Explore />} />
            <Route path="/auth" element={<Explore />} />
            <Route path="/profile/:id" element={<Profile />} />
            <Route path="/explore/:id" element={<Explore />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Navigate to="/auth" />} />
            <Route path="/auth" element={<UserAuth />} />
          </>
        )}
      </Routes>
    </div>
  );
}

export default App;
