import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navBar';
import React from 'react';
import Footer from './components/footer';

import Home from './components/pages/home';
import Aboutus from './components/pages/about-us';
import Patientforms from './components/pages/patient-forms';
import Location from './components/pages/location';
import Rights from './components/Rights';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />}></Route>
          <Route path='/about-us' exact element={<Aboutus />}></Route>
          <Route path='/patient-forms' exact element={<Patientforms />}></Route>
          <Route path='/location' exact element={<Location />}></Route>
        </Routes>
      </Router>
      <Footer />
      <Rights />
    </>
  );
}

export default App;
