// import { Link } from "react-router-dom"
import React from 'react';
// import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import { Contact } from './pages/Contact';
import { Footer } from './components/Footer';
import Navbar from './components/Navbar';
import { AuthContextProvider } from './context/AuthContext';
import Signin from './pages/SignIn';
import Account from './pages/Account';
import Protected from './components/Protected';
// import Protected from './components/Protected';

export default function App() {
  return (
    <div>
      <AuthContextProvider>
        <Navbar />
        <h1 className="text-3xl font-bold underline">
          Hello world!!!
        </h1>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/Signin' element={<Signin />} />
          <Route
            path='/account'
            element={
              <Protected>
                <Account/>
              </Protected>
            }
          />
          <Route path='/Contact' element={<Contact />}></Route>
          <Route path='/About' element={<About/>}></Route>
        </Routes>
        <Footer />
      </AuthContextProvider>
    </div>
  )
}