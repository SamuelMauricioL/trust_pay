import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CourseOffer from './components/CourseOffer';
import CheckoutPage from './components/CheckoutPage';
import CoursePage from './components/course/CoursePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CourseOffer />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/course" element={<CoursePage />} />
      </Routes>
    </Router>
  );
}

export default App;
