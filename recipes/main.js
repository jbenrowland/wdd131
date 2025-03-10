// Import recipes
import recipes from './recipes.mjs';

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
    const description = recipe.description ? recipe.description : "No description available.";
    
    return `
        <article class="recipe">
            <img class="recipe-image" src="${recipe.image}" alt="${recipe.name}">
            <div class="recipe-content">
                <div class="tag-row">
                    ${generateTags(recipe.tags)}
                </div>
                <h2>${recipe.name}</h2>
                ${generateStars(recipe.rating)}
                <p class="recipe-description">${description}</p>
            </div>
        </article>
    `;
}

// Function to display filtered recipes
function renderRecipes(recipeList) {
    const container = document.getElementById("recipe-container");
    container.innerHTML = recipeList.map(generateRecipeHTML).join('');
}

// Function to initialize the page with a random recipe
function init() {
    const randomRecipe = getRandomRecipe();
    renderRecipes([randomRecipe]); // Pass it as an array to renderRecipes()
}

// Function to handle search input
function searchHandler(event) {
    event.preventDefault(); // Prevent page reloads

    const searchInput = document.getElementById("searchInput");
    if (searchInput) {
        console.log("Search button clicked! Filtering recipes...");

        const query = searchInput.value.trim().toLowerCase();
        const filteredRecipes = recipes.filter(recipe =>
            recipe.name.toLowerCase().includes(query) ||
            recipe.description.toLowerCase().includes(query) ||
            recipe.tags.some(tag => tag.toLowerCase().includes(query))
        );

        filteredRecipes.sort((a, b) => a.name.localeCompare(b.name)); // Sort alphabetically
        renderRecipes(filteredRecipes); // Render the filtered recipes
    } else {
        console.log("Search input not found!");
    }
}

// Run init function when the page loads
document.addEventListener("DOMContentLoaded", init);
document.addEventListener("DOMContentLoaded", function () {
    const searchButton = document.querySelector("button[type='button']");
    if (searchButton) {
        console.log("Search button found, attaching event listener...");
        searchButton.addEventListener("click", searchHandler);
    } else {
        console.log("Search button NOT found!");
    }
});
