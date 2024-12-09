
function createGrid(gridNumber = 16) {
    const container = document.querySelector(".container");
    container.innerHTML = ""; // Clear previous grid
    
    for (let i=0; i<gridNumber; i++) {
        const row = document.createElement("div");
        row.classList.add("row")
        
        for (let j=0; j<gridNumber; j++){
        const column = document.createElement("div");
        column.classList.add("grid")
        row.appendChild(column)
        }
        container.appendChild(row)
    }
}

createGrid();

