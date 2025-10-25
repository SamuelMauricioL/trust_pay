import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CourseOffer from './components/CourseOffer';
import CheckoutPage from './components/CheckoutPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CourseOffer />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
    </Router>
  );
}

export default App;
