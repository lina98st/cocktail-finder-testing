/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import CocktailList from '../components/CocktailList';
import { Link } from 'react-router-dom';
import { getFavorites, deleteFavorite } from '../api/favorites';

const FavoritesPage = () => {
    const [favorites, setFavorites] = useState([]);


    useEffect(() => {
        loadFavorites();
    }, []);

///Funktion zum Laden der Favoriten
    async function loadFavorites() {
        try {
    const token = localStorage.getItem('token');
    const result = await getFavorites(token);
    const details = await fetchFavoriteDetails(result.cocktails);
    setFavorites(details);
        } catch (error) {
            console.error('There was an error', error);
        }
    }

    async function fetchFavoriteDetails(ids) {
    const promises = ids.map(id => 
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then(res => res.json())
        .then(data => data.drinks[0])
    );
    return Promise.all(promises);
}

async function removeFavorite(id) {
    try {
        const token = localStorage.getItem('token');
        await deleteFavorite(token, id);
        setFavorites(favorites.filter(cocktail => cocktail.idDrink !== id));
    } catch (error) {
        console.error('There was an error', error);
    }
}

return (
    <div>
        <h2 className="text-white">My Favorites</h2>
        <Link to="/" className="btn btn-cocktail mb-3">Back to Home</Link>
<CocktailList cocktails={favorites} deleteCocktail={removeFavorite} />
    </div>
);
};

export default FavoritesPage;