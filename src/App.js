import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './App.css';
import Header from './components/Header/Header';
import UserAuth from './pages/Auth/Auth';
import Explore from './pages/Explore/Explore';
import Profile from './pages/Profile/Profile';
import Create from './pages/Create/Create';
import SearchBar from './components/Header/SearchBar/SearchBar';

function App() {
  const user = useSelector((state) => state.authReducer.authData);

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
            <Route path="/create/:id" element={<Create/>} />
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
