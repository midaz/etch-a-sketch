
function createGrid() {
    const container = document.querySelector(".container");
    container.innerHTML = "";
    let x = 0;
    for (let i=0; i<16; i++) {
        for (let j=0; j<16; j++){
        const div = document.createElement("div");
        div.classList.add("grid")
        container.appendChild(div)
        }
    }
}

createGrid();