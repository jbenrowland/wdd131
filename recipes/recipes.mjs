// Sample Recipe Data (Can be expanded)
const recipes = [
    {
        name: "Apple Crisp",
        image: "apple-crisp.jpg",
        tags: ["dessert"],
        rating: 4,
        description: "This apple crisp recipe is a simple yet delicious fall dessert that's great served warm with vanilla ice cream."
    }
];

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

// Function to display recipes dynamically
function displayRecipes(filter = "") {
    const container = document.getElementById("recipe-container");
    container.innerHTML = ""; // Clear existing content

    recipes.forEach(recipe => {
        if (recipe.name.toLowerCase().includes(filter.toLowerCase())) {
            const article = document.createElement("article");
            article.classList.add("recipe");

            article.innerHTML = `
                <img class="recipe-image" src="${recipe.image}" alt="${recipe.name}">
                <div class="recipe-content">
                    <span class="tag">${recipe.tags[0]}</span>
                    <h2>${recipe.name}</h2>
                    ${generateStars(recipe.rating)}
                    <p class="recipe-description">${recipe.description}</p>
                </div>
            `;

            container.appendChild(article);
        }
    });
}

// Search Functionality (Filters Recipes Dynamically)
document.getElementById("searchInput").addEventListener("input", (event) => {
    displayRecipes(event.target.value);
});

// Load Recipes Initially
displayRecipes();
