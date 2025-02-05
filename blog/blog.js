const articles = [
    {
        id: 1,
        title: 'Septimus Heap Book One: Magyk',
        author: 'Angie Sage', // Added author property
        date: 'July 5, 2022',
        description:
            'If you enjoy stories about seventh sons of seventh sons and magyk, this is the book for you.',
        imgSrc: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg',
        imgAlt: 'Book cover for Septimus Heap 1',
        ages: '10-14',
        genre: 'Fantasy',
        stars: '⭐⭐⭐⭐'
    },
    {
        id: 2,
        title: 'Magnus Chase Book One: Sword of Summer',
        author: 'Rick Riordan', // Added author property
        date: 'December 12, 2021',
        description:
            'A thrilling adventure through Norse mythology by Rick Riordan.',
        imgSrc:
            'https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300',
        imgAlt: 'Book cover for Magnus Chase 1',
        ages: '12-16',
        genre: 'Fantasy',
        stars: '⭐⭐⭐⭐'
    },
    {
        id: 3,
        title: 'Belgariad Book One: Pawn of Prophecy',
        author: 'David Eddings', // Added author property
        date: 'Feb 12, 2022',
        description:
            'A young boy embarks on a journey with immortal beings in a world of magic and prophecy.',
        imgSrc:
            'https://images-na.ssl-images-amazon.com/images/I/41ZxXA+nInL.jpg',
        imgAlt: 'Book cover for Pawn of Prophecy',
        ages: '12-16',
        genre: 'Fantasy',
        stars: '⭐⭐⭐⭐⭐'
    }
];

// Function to display articles dynamically
function displayArticles() {
    const articleContainer = document.querySelector('#article-section');

    articles.forEach(article => {
        const articleElement = document.createElement('article');
        articleElement.innerHTML = `
            <img src="${article.imgSrc}" alt="${article.imgAlt}">
            <div>
                <header>
                    <h2>${article.title}</h2>
                    <p><strong>Author:</strong> ${article.author}</p> <!-- Display unique author -->
                    <p><time datetime="${article.date}">${article.date}</time></p>
                </header>
                <p>${article.description}</p>
                <p><strong>Age Range:</strong> ${article.ages}</p>
                <p><strong>Genre:</strong> ${article.genre}</p>
                <p><strong>Rating:</strong> ${article.stars}</p>
            </div>
        `;
        articleContainer.appendChild(articleElement);
    });
}

// Ensure the DOM is fully loaded before running script
document.addEventListener('DOMContentLoaded', displayArticles);
