import React from "react";
import "./style.css";
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './pages/about';
import Services from './pages/Services';
import Blog from './pages/Blog';
import Portfolio from './pages/Pages/Pages';
import BlogDetails from './pages/Pages/Blog.details/Asosiy';
import Contacts from './pages/Contacts';
import { Route, Routes } from 'react-router-dom';



// import Asosiy from "./pages/Pages/Blog.details/Asosiy"

function App() {

  return (
    <>

      <Navbar />
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/blogDetails' element={<BlogDetails />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contacts' element={<Contacts />} />
      </Routes>

      <Footer/>

    </>
  );
}

export default App;