import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BookList from './pages/BookList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/books" element={<BookList />} />
        {/* <Route path="/book/:id" element={<BookPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;