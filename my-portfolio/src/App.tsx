import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer';
import Resume from './components/Resume';
import TodoList from './components/TodoList';
import SwapiPage from './components/SwapiPage';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Resume />} />
          <Route path="/todo" element={<TodoList />} />
          <Route path="/swapi" element={<SwapiPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
