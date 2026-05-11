import { useState } from 'react';

const CATEGORIES = [
    'All',
    'Beer',
    'Cocktail',
    'Cocoa',
    'Coffee / Tea',
    'Homemade Liqueur',
    'Ordinary Drink',
    'Other / Unknown',
    'Punch / Party Drink',
    'Shake',
    'Shot',
    'Soft Drink'
];

const FilterOptions = ({ onFilterChange }) => {
    const [activeCategory, setActiveCategory] = useState('All');

    const handleFilter = (category) => {
        setActiveCategory(category);
        onFilterChange(category);
    };

    return (
        <div className="filter-options">
            {CATEGORIES.map((category) => (
                <button
                    key={category}
                    className={`filter-button ${activeCategory === category ? 'active' : ''}`}
                    onClick={() => handleFilter(category)}
                >
                    {category}
                </button>
            ))}
        </div>
    );
};

export default FilterOptions;