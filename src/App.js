import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import Reservations from './components/pages/Reservations';
import ConfirmedBooking from './components/pages/ConfirmedBooking';
import Layout from './components/layout/Layout';

function App() {
  return (
    <BrowserRouter>
    <Layout>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/confirmed-booking" element={<ConfirmedBooking />} />
      </Routes>
    </Layout>
    </BrowserRouter>
  );
}

export default App;
