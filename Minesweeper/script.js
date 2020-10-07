// size of board
const SIZE = 3;

// button array and struct
let buttonArray = []
for (let i = 0; i < SIZE; i++) {
    for (let j = 0; j < SIZE; j++) {
        buttonArray[i] = [];
        buttonArray[i][j] = {
            isMine: false,
            neighbouringMines: 0
        }
    }
}

window.addEventListener('load', main);

function main() {
    console.table(buttonArray);
    let grid = document.getElementById("grid");
    createButtons(grid);
}

function createButtons(grid) {
    for (let i = 0; i < SIZE; i++) {
        for (let j = 0; j < SIZE; j++) {
            let btn = document.createElement("button", 'class="btn btn-secondary"');
            btn.className = "btn btn-secondary";
            btn.innerHTML = "Btn";
            btn.addEventListener("click", () => console.log("Working"));
            grid.appendChild(btn);
        }
        grid.innerHTML += "<br>";
    }
}

function callback() {
    alert("Callback working");
}