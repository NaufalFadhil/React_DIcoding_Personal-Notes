import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { getAllNotes } from '../utils/local-data';
import Header from './Header';
import Main from './Main';
import HomePage from '../pages/HomePage';
import AddPage from '../pages/AddPage';

function App() {
  return (
    <div className="contact-app">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/notes/new" element={<AddPage />} />
        </Routes>
      </main>
    </div>
  );
}


export default App;