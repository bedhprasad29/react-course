import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BookPage from './pages/BookPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact component={HomePage} />
        <Route path="/book/:id" component={BookPage} />
      </Routes>
    </Router>
  );
}

export default App;