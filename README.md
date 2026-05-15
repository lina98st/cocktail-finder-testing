# CocktailFinder

🍹 **Live Demo:** [https://cocktailfinder-alina.netlify.app](https://cocktailfinder-alina.netlify.app)

![CocktailFinder Screenshot](screenshot.png)

## About

CocktailFinder is a cocktail discovery app built with React. It integrates the TheCocktailDB REST API to let users search, filter by category, and explore cocktails with full recipe details. Want to be surprised? Hit the Surprise Cocktail button and discover something new.

## Features

- Search cocktails by name via REST API
- Filter cocktails by category
- Detail view with dynamic ingredient parsing and preparation instructions
- Surprise Me button to discover a random cocktail
- Delete cocktails from the list
- Add cocktails to your personal favorites list (requires login)
- Remove cocktails from your favorites list
- Favorites page to view all saved cocktails
- User authentication with JWT (login, signup and logout)
- Login form with client side validation using Formik
- Glassmorphism UI with animated gradient background
- Responsive layout

## Technologies

- React
- React Router
- Formik
- TheCocktailDB API
- Bootstrap
- JavaScript

## Installation

1. Clone the repository
2. Run `npm install`
3. Run `npm start`
4. Open [http://localhost:3000](http://localhost:3000)

## Backend

This app connects to a custom REST API built with Node.js, Express, and MongoDB for user authentication and favorites management. See the [backend repository](https://github.com/lina98st/cocktail-finder-backend) for setup instructions.

## API

This project uses the [TheCocktailDB API](https://www.thecocktaildb.com/api.php).

## Author

Built by Alina Schmidt as part of the Nucamp React Course.