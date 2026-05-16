import CocktailCard from './CocktailCard';

const CocktailList = ({ cocktails, deleteCocktail }) => {
  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4 py-3">
      {cocktails.map((cocktail) => (
        <div className="col" key={cocktail.idDrink}>
          <CocktailCard cocktail={cocktail} deleteCocktail={deleteCocktail} />
        </div>
      ))}
    </div>
  );
};

export default CocktailList;