import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import News from './pages/News';
import Sports from './pages/Sports';
import Coaches from './pages/Coaches';
import Contact from './pages/Contact';
import Players from './pages/Players';
import CoachDetail from './components/CoachDetail';
import './App.css';
import Legal from './pages/Legal';

const App: React.FC = () => {

  return (
    <BrowserRouter>
      <div className="app-container">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/news" element={<News />} />
            <Route path="/sports" element={<Sports />} />
            <Route path="/coaches" element={<Coaches />} />
            <Route path="/coaches/:id" element={<CoachDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/players" element={<Players />} />
            <Route path="/legal" element={<Legal />} />
            <Route path="*" element={<div>404 Not Found</div>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;