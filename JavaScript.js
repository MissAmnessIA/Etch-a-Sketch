const grid = document.querySelector("#grid");
const changeSize = document.querySelector("#changeSize");
let size = 0;
let darkness = 90;

changeSize.addEventListener("click", () => {
    size = parseInt(prompt("Chose a new size size grid"));
    grid.innerHTML = "";
    createGrid(size);
})

function createGrid(size) {
    let squareSize = grid.clientWidth / size;
    console.log(squareSize);
    for (let i = 1; i <= (size * size); i++) {
        const square = document.createElement("div");
        square.style.boxSizing = "border-box";
        square.style.width = `${squareSize}`;
        square.style.height = `${squareSize}`;
        square.style.border = "0.5px solid rgb(95, 65, 23)";
        square.style.borderRadius = "5px";
        square.style.flexShrink = "0";
        square.dataset.darkness = 100;
        grid.appendChild(square);
        square.addEventListener("mouseenter", () => {
            let currentDarkness = parseFloat(square.dataset.darkness);
            if (currentDarkness > 20)
                currentDarkness -= 10;
            square.dataset.darkness = currentDarkness;
            square.style.backgroundColor = `hsl(194, 58.80%, ${currentDarkness}%)`;
        });
    }
}

createGrid(16);