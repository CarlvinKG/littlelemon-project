import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Layout from "./components/layout/Layout";

function App() {
  return (
    
    <BrowserRouter>
    <Layout>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
      </Routes>
    </Layout>
    </BrowserRouter>
  );
}

export default App;
