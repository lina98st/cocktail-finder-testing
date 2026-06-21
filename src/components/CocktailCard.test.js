import { render, screen, userEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import CocktailCard from "./CocktailCard";

const mockCocktail = {
    idDrink: "123",
    strDrink: "Mojito",
    strCategory: "Cocktail",
    strDrinkThumb: "http://example.com/mojito.jpg",
};

test("shows the cocktail name and category", () => {
    render(
        <MemoryRouter>
            <CocktailCard cocktail={mockCocktail} deleteCocktail={() => {}} />
        </MemoryRouter>
    );
expect(screen.getByText("Mojito")).toBeInTheDocument();
expect(screen.getByText("Cocktail")).toBeInTheDocument();
});


test("delete cocktailId", () => {
    render(
        <MemoryRouter>
            <CocktailCard cocktail={mockCocktail} deleteCocktail={() => {}} />
        </MemoryRouter>
    );
expect(screen.getByAltText("Mojito")).toBeInTheDocument();
});