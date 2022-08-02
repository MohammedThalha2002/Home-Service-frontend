import React from 'react';
import NavBar from './components/Navbar.js'
import Landingpage from './components/Landingpage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Services from './pages/services.js'
import HandyForm from './pages/become-a-handy.js'
import Cleaner from './sub-pages/Cleaner.js';
import Painter from './sub-pages/Painter.js';
import Electrician from './sub-pages/Electrician';
import Plumber from './sub-pages/Plumber';
import HomeService from './sub-pages/HomeService';
import Contacts from './pages/Contacts.js';

function App() {

  return (
    <Router>
      <div>
        <NavBar />
      </div>
      <div>
        <Routes>
          <Route path='/' element={<Landingpage />} />
          <Route path='/home' element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/become-a-handy' element={<HandyForm />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='/services/cleaner' element={<Cleaner />} />
          <Route path='/services/painter' element={<Painter />} />
          <Route path='/services/electrician' element={<Electrician />} />
          <Route path='/services/plumber' element={<Plumber />} />
          <Route path='/services/home-services' element={<HomeService />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
