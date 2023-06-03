import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import SearchBar from './components/Header/SearchBar/SearchBar';
import UserAuth from './pages/Auth/Auth';
import Explore from './pages/Explore/Explore';
import Profile from './pages/Profile/Profile';

function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Explore />} />
        <Route path="/user/:id" element={<Profile /> }/>
        <Route path="/auth" element={<UserAuth />} />
        <Route path="/search" element={<SearchBar />} />
      </Routes>
    </div>
  );
}

export default App;