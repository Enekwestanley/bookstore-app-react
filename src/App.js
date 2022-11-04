import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Books from './components/Books';
import Catagories from './components/Categories';
import Navbar from './components/Navbar';
import './App.css';

const App = () => (
  <div className="App">
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Books />} />
        <Route path="bookstore" element={<Books />} />
        <Route path="/Categories" element={<Catagories />} />
      </Routes>
    </Router>
  </div>
);

export default App;
