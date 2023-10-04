import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Note the change here: Switch is replaced with Routes
import Registration from './views/Registration';
import Login from './views/Login';
import Navbar from './components/Navbar';
import Dashboard from './views/Dashboard';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        {/* Add more routes for your application */}
      </Routes>
    </Router>
  );
};

export default App;
