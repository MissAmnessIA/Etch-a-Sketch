const grid = document.querySelector("#grid");
const changeSize = document.querySelector("#changeSize");
let size = 0;
let darkness = 90;

changeSize.addEventListener("click", () => {
    size = parseInt(prompt("Enter a new size"));
    if (size >= 100) {
        alert ("Sorry, only numbers less than 100 hare allowed");
    }
    else if (size < 100) {
        grid.innerHTML = "";
        createGrid(size);
    }
});

function randomColor (max) {
    let randomNumber = Math.floor(Math.random() * max);
    return randomNumber;
}

function createGrid(size) {
    let squareSize = grid.clientWidth / size;
    console.log(squareSize);
    for (let i = 1; i <= (size * size); i++) {
        const square = document.createElement("div");
        square.style.boxSizing = "border-box";
        square.style.width = `${squareSize}`;
        square.style.height = `${squareSize}`;
        square.style.border = "0.5px solid rgb(95, 65, 23)";
        square.style.borderRadius = "3px";
        square.style.flexShrink = "0";
        square.dataset.darkness = 100;
        square.dataset.color = randomColor(358);
        grid.appendChild(square);
        square.addEventListener("mouseenter", () => {
            let currentDarkness = parseFloat(square.dataset.darkness);
            if (currentDarkness > 30)
                currentDarkness -= 10;
            square.dataset.darkness = currentDarkness;
            square.style.backgroundColor = `hsl(${parseInt(square.dataset.color)}, 58.80%, ${currentDarkness}%)`;
        });
    }
}

createGrid(16);