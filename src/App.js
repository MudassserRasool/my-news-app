import React from 'react';
import './App.css';
import Home from './pages/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PostFullView from './components/PostFullView/PostFullView';
const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<PostFullView />} path="/full-view" />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
