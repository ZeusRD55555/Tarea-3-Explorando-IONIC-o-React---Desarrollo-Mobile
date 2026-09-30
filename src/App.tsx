import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Inicio from './pages/Inicio';
import Sumadora from './pages/Sumadora';
import Traductor from './pages/Traductor';
import TablaMultiplicar from './pages/TablaMultiplicar';
import Experiencia from './pages/Experiencia';
import './App.css';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/sumadora" element={<Sumadora />} />
          <Route path="/traductor" element={<Traductor />} />
          <Route path="/tabla" element={<TablaMultiplicar />} />
          <Route path="/experiencia" element={<Experiencia />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
