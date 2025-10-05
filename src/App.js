import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Footer from './components/Footer';
import About from './components/Contact/About';

import Nav from './components/Nav/Nav';
import Resume from './components//resume/Resume'; 
import Template1 from './components/resume/Template1'; 
import Template2 from './components/resume/Template2'; 
import Template3 from './components/resume/Template3'; 
import Contact from './components/Contact/contact1';

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/Home' element={<Home />} />
          <Route path='/Resume' element={<Resume />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/template1' element={<Template1 />} />
          <Route path='/template2' element={<Template2 />} />
          <Route path='/template3' element={<Template3 />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
