let enterEventCount = 0; // Persist these counters globally
let leaveEventCount = 0;

// Function to generate a random RGB color
function getRandomColor() {
    const rgb = Array.from({length: 3}, () => Math.floor(Math.random() * 256));
    return `rgb(${rgb.join(",")})`;
}

// Handle button
function getGridSize() {
    const btn = document.querySelector("#btn");
    btn.addEventListener("click", () => {
        let gridSize= prompt("What is your grid size?");
        gridSize = Number(gridSize); 
        if (!isNaN(gridSize) && gridSize > 0 && gridSize <=100) { // Validate input
            etchSketch(gridSize); // Pass gridSize to etchSketch
        } else {
            alert("Please enter a valid number between 1-100!");
        }
});
}

function etchSketch(gridSize=16) {
    console.log(gridSize);
    // Create grid
    const container = document.querySelector(".container");
    container.innerHTML = ""; // Clear previous grid

    for (let i = 0; i < gridSize; i++) {
        const row = document.createElement("div");
        row.classList.add("row");

        for (let j = 0; j < gridSize; j++) {
            const column = document.createElement("div");
            column.classList.add("grid");
            row.appendChild(column);
        }
        container.appendChild(row);
    }

    // Create mouseover events
    const grids = document.querySelectorAll(".grid");
    
    grids.forEach((grid) => {
        grid.addEventListener("mouseover", () => {
            grid.style.backgroundColor = getRandomColor(); // Applies the style on hover
        });
    
        grid.addEventListener("mouseleave", () => {
            grid.style.backgroundColor = "white"; // Resets the style when the mouse leaves
        });
    });

}

// Get grid size from button
getGridSize()

// Initialize the grid
etchSketch();

