import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Reservations from './components/pages/Reservations';
import Confirmation from './components/pages/Confirmation';
import Layout from "./components/layout/Layout";

function App() {
  return (
    <BrowserRouter>
    <Layout>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
    </Layout>
    </BrowserRouter>
  );
}

export default App;
