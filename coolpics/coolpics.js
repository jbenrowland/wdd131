// Event listener to handle image clicks and show the modal
document.querySelector(".gallery").addEventListener("click", function (event) {
  if (event.target.tagName === "IMG") {
    // Extract the base source of the clicked image
    const src = event.target.src.split("-")[0];
    const fullSrc = `${src}-full.jpeg`; // Assume the full-size image uses "-full.jpeg"
    const alt = event.target.alt;

    // Create the modal structure dynamically
    const viewerHTML = `
      <div class="viewer">
        <button class="close-viewer">X</button>
        <img src="${fullSrc}" alt="${alt}">
      </div>`;
    
    // Insert the modal into the body
    document.body.insertAdjacentHTML("beforeend", viewerHTML);

    // Attach event listener to the close button
    const closeButton = document.querySelector(".close-viewer");
    closeButton.addEventListener("click", function () {
      // Remove the viewer modal when the close button is clicked
      const viewer = document.querySelector(".viewer");
      if (viewer) {
        viewer.remove();
      }
    });
  }
});
// Select menu button and nav menu
const menuButton = document.querySelector(".menu-button");
const menu = document.querySelector(".menu");

// Toggle the nav menu visibility when the menu button is clicked
menuButton.addEventListener("click", () => {
    menu.classList.toggle("show");
});

// Ensure that when the screen is larger than 700px, the menu displays normally
function handleResize() {
    if (window.innerWidth > 700) {
        // Remove the "show" class to ensure the menu is always visible on larger screens
        menu.classList.remove("show");
    }
}

// Check the screen size on page load and when resizing
handleResize();
window.addEventListener("resize", handleResize);


