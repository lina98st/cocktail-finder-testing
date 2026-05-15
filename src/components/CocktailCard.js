/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import { useState } from 'react';
import { addFavorite } from '../api/favorites';

const CocktailCard = ({ cocktail, deleteCocktail }) => {
const [isFavorite, setIsFavorite] = useState(false);

    const addToFavorite = async () => {
        const token = localStorage.getItem('token');

    await addFavorite(token, cocktail.idDrink);
        setIsFavorite(true)
    };


  return (
    <div className="cocktail-card">
      <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} className="img-fluid rounded" />
      <h3 className="mt-3 mb-1">{cocktail.strDrink}</h3>
      <p className="mb-0">{cocktail.strCategory}</p>
      <div className="d-flex gap-2 mt-3">
        <Link to={`/cocktail/${cocktail.idDrink}`} className="flex-fill">
          <button className="btn btn-cocktail w-100">Details</button>
        </Link>
        <button className="btn btn-danger flex-fill" onClick={() => deleteCocktail(cocktail.idDrink)}>Delete</button>
         <button className={`btn ${isFavorite ? 'btn-success' : 'btn-danger'} flex-fill`} onClick={() => addToFavorite()}>Add Favorit</button>
      </div>
    </div>
  );
};

export default CocktailCard;