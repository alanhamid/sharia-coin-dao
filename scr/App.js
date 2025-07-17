
// This is the main App.js file for your new React project

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import SCGT from './pages/SCGT';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/donate" element={<SCGT />} />
      </Routes>
    </Router>
  );
}
