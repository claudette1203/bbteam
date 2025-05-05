import '@fortawesome/fontawesome-free/css/all.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CoachDetail from './components/CoachDetail';
import Footer from './components/Footer';
import Header from './components/Header';
import './index.css';
import Coaches from './pages/Coaches';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Legal from './pages/Legal';
import News from './pages/News';
import Players from './pages/Players';
import Sports from './pages/Sports';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <HashRouter>
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
    </HashRouter>
  </React.StrictMode>
);
