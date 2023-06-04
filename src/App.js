import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './App.css';
import Header from './components/Header/Header';
import UserAuth from './pages/Auth/Auth';
import Explore from './pages/Explore/Explore';
import Profile from './pages/Profile/Profile';
import SearchBar from './components/Header/SearchBar/SearchBar';

function App() {
  const user = useSelector((state) => state.userData);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/"
          element={<Explore />}
        />
        <Route path="/profile/:id"
          element={user ? <Profile/> : <Navigate to="../auth" />} 
        />
        <Route path="/explore" 
        element={<Explore />} 
        />
        <Route path="/auth" element={user ? <Navigate to="../explore" />:<UserAuth />} />
        <Route path="/search" element={<SearchBar />} />
      </Routes>
    </div>
  );
}

export default App;