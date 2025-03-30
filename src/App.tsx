import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Statistics from './pages/Statistics';
import Hospitals from './pages/Hospitals';
import Registration from './pages/Registration';
import Admin from './pages/Admin';
import User from './pages/User';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/Statistics" element={<Statistics />} />
            <Route path="/hospitals" element={<Hospitals />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/user" element={<User />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;