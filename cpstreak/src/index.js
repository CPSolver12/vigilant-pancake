import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import { Contact } from './pages/Contact';
import { Footer } from './components/Footer';
import Navbar from './components/Navbar';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <><Router>
    <Navbar />
    <App />
    <Footer />

    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/Contact' element={<Contact />}></Route>
      <Route path='/About' element={<About />}></Route>
    </Routes>
  </Router>
  </>
);