import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, useLocation, Routes } from 'react-router-dom';

import Nav from './components/Nav'; // Updated import path
import Homepage from './components/Umic(Home)/Homepage';
import DisplayData from './components/DisplayData';
import Form from './components/Form';

function PageTransition({ children }) {
  const [fade, setFade] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setFade(false); // Trigger fade-out
    const timer = setTimeout(() => {
      setFade(true); // Trigger fade-in after fade-out
    }, 500); // Duration of the fade-out effect

    return () => clearTimeout(timer);
  }, [location]);

  return (
        <div className={`page-transition ${fade ? 'fade-in' : 'fade-out'}`}>
          {children}
        </div>
  );
}

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <PageTransition>
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route path="/Forms" element={<Form />} />
            <Route path="/Display" element={<DisplayData />} />
          </Routes>
        </PageTransition>
      </Router>
    </div>
  );
}

export default App;
