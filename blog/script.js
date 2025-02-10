document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector("#articles-container");

    articles.forEach(article => {
        const articleElement = document.createElement("article");
        articleElement.classList.add("book-review");

        articleElement.innerHTML = `
            <div class="book-meta">
                <p class="book-date">${article.date}</p>
                <ul class="book-details">
                    <li><strong>Age:</strong> ${article.ages}</li>
                    <li><strong>Genre:</strong> ${article.genre}</li>
                    <li><strong>Rating:</strong> ${article.stars}</li>
                </ul>
            </div>
            <div class="book-content">
                <h2>${article.title}</h2>
                <img src="${article.imgSrc}" alt="${article.imgAlt}" class="book-cover">
                <p>${article.description}</p>
            </div>
        `;

        container.appendChild(articleElement);
    });
});

