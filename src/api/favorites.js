// GET /favorites - fetch all favorites for the current user
async function getFavorites(token) {
    const url = "http://localhost:3001/favorites";
    try {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json",
            }
        });

        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error.message);
    }
}

// POST /favorites/:cocktailId - add a cocktail to the user's favorites
async function addFavorite(token, cocktailId) {
    const url = `http://localhost:3001/favorites/${cocktailId}`;
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json",
            }
        });

        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error.message);
    }
}

// DELETE /favorites/:cocktailId - delete a cocktail from user's favorites
async function deleteFavorite(token, cocktailId) {
    const url = `http://localhost:3001/favorites/${cocktailId}`;
    try {
        const response = await fetch(url, {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json",
            }
        });

        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error.message);
    }
}

//EXPORTS
module.exports = { getFavorites, addFavorite, deleteFavorite };