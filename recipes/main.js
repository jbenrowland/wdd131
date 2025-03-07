document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.querySelector(".search-bar input");
    const recipes = document.querySelectorAll(".recipe");

    searchInput.addEventListener("input", (event) => {
        const query = event.target.value.toLowerCase();
        
        recipes.forEach(recipe => {
            const title = recipe.querySelector("h2").textContent.toLowerCase();
            if (title.includes(query)) {
                recipe.style.display = "block";
            } else {
                recipe.style.display = "none";
            }
        });
    });
});
