// Ensure the script runs after the document is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // Reference to the container where articles will be inserted
    const articlesContainer = document.querySelector("#articles-container");

    // Sample articles array (ensure this is loaded from blog.js)
    const articles = [
        {
        id: 1,
        title: "Septimus Heap Book One: Magyk",
        date: "July 5, 2022",
        description:
        "If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.",
        imgSrc: "https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg",
        imgAlt: "Book cover for Septimus Heap 1",
        ages: "10-14",
        genre: "Fantasy",
        stars: "****"
        },
        {
        id: 2,
        title: "Magnus Chase Book One: Sword of Summer",
        date: "December 12, 2021",
        description:
        "The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.",
        imgSrc:
        "https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300",
        imgAlt: "Book cover for Magnus Chase 1",
        ages: "12-16",
        genre: "Fantasy",
        stars: "⭐⭐⭐⭐"
        },
        {
        id: 3,
        title: "Belgariad Book One: Pawn of Prophecy",
        date: "Feb 12, 2022",
        description:
        "A fierce dispute among the Gods and the theft of a powerful Orb leaves the World divided into five kingdoms. Young Garion, with his 'Aunt Pol and an elderly man calling himself Wolf --a father and daughter granted near-immortality by one of the Gods -- set out on a complex mission.",
        imgSrc:
        "https://images-na.ssl-images-amazon.com/images/I/41ZxXA+nInL.jpg",
        imgAlt: "Book cover for Pawn of Prophecy",
        ages: "12-16",
        genre: "Fantasy",
        stars: "⭐⭐⭐⭐⭐"
        }
        ];

    // Function to generate and insert articles dynamically
    function renderArticles() {
        articles.forEach(article => {
            const articleElement = document.createElement("article");
            articleElement.classList.add("blog-post"); // Add necessary classes

            articleElement.innerHTML = `
                <div class="article-metadata">
                    <p class="article-date">${article.date}</p>
                    <ul class="article-details">
                        <li><strong>Ages:</strong> ${article.ages}</li>
                        <li><strong>Genre:</strong> ${article.genre}</li>
                        <li><strong>Rating:</strong> ${article.stars}</li>
                    </ul>
                </div>
                <div class="article-content">
                    <h2 class="article-title">${article.title}</h2>
                    <img src="${article.imgSrc}" alt="${article.imgAlt}" class="article-image">
                    <p class="article-description">${article.description}</p>
                </div>
            `;

            // Append to the articles container
            articlesContainer.appendChild(articleElement);
        });
    }

    // Call function to render articles
    renderArticles();
});


