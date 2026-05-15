import { Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import CocktailDetailPage from './pages/CocktailDetailPage';
import Header from './components/Header';
import Footer from './components/Footer';
import FavoritesPage from './pages/FavoritesPage';

function App() {

  return (
    <div className="App">
                  <Header />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/cocktail/:id' element={<CocktailDetailPage />} />
                <Route path='/favorites' element={<FavoritesPage />} />
                            </Routes>
            <Footer />
    </div>
  );
}

export default App;