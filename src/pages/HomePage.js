import { useState, useEffect } from 'react';
import CocktailList from '../components/CocktailList';
import FilterOptions from '../components/FilterOptions';

const HomePage = () => {
    const [cocktails, setCocktails] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetchInitialCocktails();
    }, []);

    // Fetches a broad set of cocktails on initial load using 'a' as a wildcard search term
    async function fetchInitialCocktails() {
        try {
            let response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a');
            let data = await response.json();
            setCocktails(data.drinks);
        } catch (error) {
            console.error('There was an error', error);
        }
    }

    // Fetches cocktails based on user search input
    async function fetchCocktail() {
        if (!searchTerm) return;
        try {
            let response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`);
            let data = await response.json();
            setCocktails(data.drinks);
        } catch (error) {
            console.error('There was an error', error);
        }
    }

    // Fetches cocktails by category
    async function fetchByCategory(category) {
        if (category === 'All') {
            fetchInitialCocktails();
            return;
        }
        try {
            let response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`);
            let data = await response.json();
            setCocktails(data.drinks);
        } catch (error) {
            console.error('There was an error', error);
        }
    }

    // Fetches a single random cocktail and prepends it to the current list
    async function fetchRandomCocktail() {
        try {
            let response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
            let data = await response.json();
            setCocktails(prev => [data.drinks[0], ...prev].slice(0, 6));
        } catch (error) {
            console.error('There was an error', error);
        }
    }

    const deleteCocktail = (id) => {
        setCocktails(cocktails.filter((cocktail) => cocktail.idDrink !== id));
    }

    return (
        <>
            <input
       className="search-input form-control mx-auto my-3"
       type="text"
       placeholder="Search cocktails..."
       value={searchTerm}
       onChange={(e) => setSearchTerm(e.target.value)}
       onKeyDown={(e) => e.key === 'Enter' && fetchCocktail()}
        />
            <button className="btn btn-cocktail d-block mx-auto mb-2" onClick={fetchCocktail}>Search</button>
            <button className="btn btn-cocktail d-block mx-auto mb-2" onClick={fetchRandomCocktail}>Surprise Cocktail</button>
            <FilterOptions onFilterChange={fetchByCategory} />
            <CocktailList cocktails={cocktails} deleteCocktail={deleteCocktail} />
        </>
    );
}

export default HomePage;