/*------------------------Menu Button------------------------*/
const menuButton = document.querySelector("header button");

function toggleMenu() {
    const menu = document.querySelector(".topmenu");
    menu.classList.toggle("hide");
}

menuButton.addEventListener("click", toggleMenu);

/*------------------------Window Resize------------------------*/
function handleResize() {
    const menu = document.querySelector(".topmenu");
    if (window.innerWidth > 1000) {
        menu.classList.remove("hide");
    } else {
        menu.classList.add("hide");
    }
}

handleResize();
window.addEventListener("resize", handleResize);

/*------------------------Modal Viewer Template------------------------*/
/* Creates the modal with an "X" button */
function viewerTemplate(pic, alt) {
    return `
        <div class="viewer">
            <button class="close-viewer">✖</button> <!-- 'X' button for closing -->
            <img src="${pic}" alt="${alt}">
        </div>`;
}

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
  