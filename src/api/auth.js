//LOGIN
async function postLoginData(username, password) {
    const url = "https://localhost:3443/users/login";
    try {
        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify({ username: username, password: password }),
            headers: {
            "Content-Type": "application/json",
            }
            });
        
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const result = await response.json();
      return result.token; 
    } catch (error) {
     console.error(error.message)
    }
}

//SIGN UP
async function postSignupData(username, password, firstName, lastName) {
    const url = "https://localhost:3443/users/signup";
    try {
        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify({ username: username, password: password, firstName: firstName, lastName: lastName }),
            headers: {
                "Content-Type": "application/json",
            }
        });

        if (!response.ok) {
    throw new Error(`Response status: ${response.status}`);
        }

        const result = await response.json();
        return result.status;
    } catch (error) {
        console.error(error.message)
    }
}

//EXPORTS
module.exports = { postLoginData, postSignupData };