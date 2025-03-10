// Import recipes
import { recipes } from './recipes.mjs';

// Function to generate a random number between 0 and num (exclusive)
function getRandomNumber(num) {
    return Math.floor(Math.random() * num);
}

// Function to select a random recipe
function getRandomRecipe() {
    const randomIndex = getRandomNumber(recipes.length);
    return recipes[randomIndex];
}

// Function to generate star rating HTML
function generateStars(rating) {
    const fullStar = "⭐";
    const emptyStar = "☆";
    let stars = "";

    for (let i = 1; i <= 5; i++) {
        stars += i <= rating ? fullStar : emptyStar;
    }

    return `<span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">${stars}</span>`;
}

// Function to generate tag markup
function generateTags(tags) {
    return tags.map(tag => `<span class="tag">${tag}</span>`).join(' ');
}

// Function to generate recipe HTML
function generateRecipeHTML(recipe) {
    return `
        <article class="recipe">
            <img class="recipe-image" src="${recipe.image}" alt="${recipe.name}">
            <div class="recipe-content">
                <div class="tag-row">
                    ${generateTags(recipe.tags)}
                </div>
                <h2>${recipe.name}</h2>
                ${generateStars(recipe.rating)}
                <p class="recipe-description">${recipe.description}</p>
            </div>
        </article>
    `;
}

// Function to display filtered recipes
function displayRecipes(filter = "") {
    const container = document.getElementById("recipe-container");
    container.innerHTML = ""; // Clear existing content

    const filteredRecipes = recipes.filter(recipe =>
        recipe.name.toLowerCase().includes(filter.toLowerCase())
    );

    if (filteredRecipes.length > 0) {
        filteredRecipes.forEach(recipe => {
            container.innerHTML += generateRecipeHTML(recipe);
        });
    } else {
        container.innerHTML = "<p>No recipes found</p>";
    }
}

// Function to initialize the page with a random recipe
function init() {
    displayRecipes(); // Initially show all recipes
}

// Search functionality
const searchInput = document.getElementById("searchInput");
if (searchInput) {
    searchInput.addEventListener("input", (event) => {
        displayRecipes(event.target.value);
    });
}

// Run init function when the page loads
document.addEventListener("DOMContentLoaded", init);
