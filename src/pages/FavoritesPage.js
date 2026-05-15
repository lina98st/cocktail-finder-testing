/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { getFavorites } from '../api/favorites';
import CocktailList from '../components/CocktailList';

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

    return (
        <div>
            <h2>My Favorites</h2>
        <CocktailList cocktails={favorites} deleteCocktail={() => {}} />
        </div>
    );
};

export default FavoritesPage;