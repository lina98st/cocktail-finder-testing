import CocktailCard from "./CocktailCard";

const CocktailList = ({ cocktails, deleteCocktail }) => {
  return (
    <div className="cocktail-list py-3">
      {cocktails.map((cocktail) =>
        <CocktailCard cocktail={cocktail} key={cocktail.idDrink} deleteCocktail={deleteCocktail} />
      )}
    </div>
  );
}

export default CocktailList;