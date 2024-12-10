let enterEventCount = 0; // Persist these counters globally
let leaveEventCount = 0;

function etchSketch(gridNumber = 16) {
    // Create grid
    const container = document.querySelector(".container");
    container.innerHTML = ""; // Clear previous grid

    for (let i = 0; i < gridNumber; i++) {
        const row = document.createElement("div");
        row.classList.add("row");

        for (let j = 0; j < gridNumber; j++) {
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
            grid.style.backgroundColor = "black"; // Applies the style on hover
        });
    
        grid.addEventListener("mouseleave", () => {
            grid.style.backgroundColor = "white"; // Resets the style when the mouse leaves
        });
    });
}

// Initialize the grid
etchSketch();

