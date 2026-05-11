import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CocktailDetailPage = () => {

    const [cocktail, setCocktail] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchDetailOfCocktail() {
            try {
                let response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
                let data = await response.json();
                setCocktail(data.drinks[0]);
            } catch (error) {
                console.error('There was an error', error);
            }
        }
        fetchDetailOfCocktail();
    }, [id]);

    const ingredients = [];
    for (let i = 1; i <= 15; i++) {
        if (cocktail?.[`strIngredient${i}`]) {
            ingredients.push(cocktail[`strIngredient${i}`]);
        }
    }

    return (
        <>
            <div className="detail-card">
                <div className="row g-4">
                    <div className="col-md-6">
                        <img src={cocktail?.strDrinkThumb} alt={cocktail?.strDrink} className="img-fluid rounded" />
                        <p className="mt-3">{cocktail?.strInstructions}</p>
                    </div>
                    <div className="col-md-6">
                        <button className="btn btn-cocktail mb-3" onClick={() => navigate(-1)}>Back</button>
                        <h2>{cocktail?.strDrink}</h2>
                        <h3 className="ingredients-title">Ingredients</h3>
                        {ingredients.map((ingredient) => (
                            <p key={ingredient} className="mb-1">{ingredient}</p>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default CocktailDetailPage;