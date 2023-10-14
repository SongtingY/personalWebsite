import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Project from "./pages/Projects";

const { PUBLIC_URL } = process.env;


function App() {
  return (
    <BrowserRouter basename={PUBLIC_URL}>
      <Routes>
        <Route path='/' element={<Index/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/projects' element={<Project/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
