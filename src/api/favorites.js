async function getFavorites(token) {
        const url = "https://localhost:3443/favorites";
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
     console.error(error.message)
    }
}