import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';
import { FavoritesProvider } from './contexts/FavoritesContext';
import './App.css';

export default function App() {
  return (
    <div className="app">
      <FavoritesProvider>
        <Router>
          <header className='header'>
            <h1>
              React Flix
            </h1>
          </header>
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
            <Route path="*" element={<div>Página não encontrada</div>} />
          </Routes>
        </Router>
      </FavoritesProvider>
    </div>
  );
}