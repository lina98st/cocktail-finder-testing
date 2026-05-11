import { Link } from "react-router-dom";

const CocktailCard = ({ cocktail, deleteCocktail }) => {
  return (
    <div className="cocktail-card">
      <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} className="img-fluid rounded" />
      <h3 className="mt-3 mb-1">{cocktail.strDrink}</h3>
      <p className="mb-0">{cocktail.strCategory}</p>
      <div className="card-buttons d-flex gap-2 mt-3">
        <Link to={`/cocktail/${cocktail.idDrink}`} className="flex-fill">
          <button className="btn w-100 cocktail-btn">Details</button>
        </Link>
        <button className="btn flex-fill deleteButton" onClick={() => deleteCocktail(cocktail.idDrink)}>Delete</button>
      </div>
    </div>
  );
};

export default CocktailCard;