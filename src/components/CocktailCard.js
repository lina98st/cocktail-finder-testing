/* eslint-disable no-unused-vars */
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { addFavorite } from '../api/favorites';

const CocktailCard = ({ cocktail, deleteCocktail }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const addToFavorite = async () => {
    const token = localStorage.getItem('token');
    await addFavorite(token, cocktail.idDrink);
    setIsFavorite(true);
  };

  return (
    <div
      className="cocktail-card card h-100 p-3 transition"
      style={{
        background: 'rgba(255, 255, 255, 0.08)',
        border: '1px solid rgba(31, 92, 63, 0.35)',
        backdropFilter: 'blur(12px)',
        transition: 'all 0.3s ease',
      }}
    >
      <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} className="card-img-top img-fluid rounded" />
      <div className="card-body px-0 pb-0">
        <h3 className="card-title mt-2 mb-1 text-white">{cocktail.strDrink}</h3>
        <p className="card-text mb-0" style={{ color: '#a7c7b8' }}>{cocktail.strCategory}</p>
        <div className="d-flex gap-2 mt-3">
          <Link to={`/cocktail/${cocktail.idDrink}`} className="flex-fill">
            <button className="btn btn-cocktail w-100">Details</button>
          </Link>
          <button className="btn btn-danger flex-fill" onClick={() => deleteCocktail(cocktail.idDrink)}>Delete</button>
          <button
            className={`btn ${isFavorite ? 'btn-success' : 'btn-danger'} flex-fill`}
            onClick={addToFavorite}
          >
            Add Favorit
          </button>
        </div>
      </div>
    </div>
  );
};

export default CocktailCard;