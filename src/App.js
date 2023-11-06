import logo from './logo.svg';
// import './App.css';
import React from 'react';
// import Main from './layouts/Main'; // fallback for lazy pages
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './static/css/main.scss'; // All of our styles

import Index from "./pages/Index";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Fitness from './pages/Fitness';

const { PUBLIC_URL } = process.env;


function App() {
  return (
    <BrowserRouter basename={PUBLIC_URL}>
      <Routes>
        <Route path='/' element={<Index/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/resume' element={<Resume />} />
        <Route path='/fitness' element={<Fitness/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
