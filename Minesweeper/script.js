/*
 * Interesting point, dont use innerHTML that much, cause it can override eventListeners
  * insertAdjacentHTML is safer (but dont use this for pure text)
 */

"use strict";

window.addEventListener('load', main);

// size of board
let ROWS = 8;
let COLS = 10;

// time the longpress
let pressTimer;

// button array, where each element holds struct
let buttonArray = []

function createButtonArray() {
    for (let i = 0; i < ROWS; i++) {
        buttonArray[i] = [];
        for (let j = 0; j < COLS; j++) {
            buttonArray[i][j] = {
                isMine: false,
                neighbouringMines: 0,
                buttonObject: null,
                row: i,
                col: j
            }
        }
    }
}

function main() {
    createButtonArray();
    let grid = document.getElementById("grid");
    createButtons(grid);
}

function createButtons(grid) {
    for (let i = 0; i < ROWS; i++) {
        for (let j = 0; j < COLS; j++) {
            const btn = document.createElement("button");
            btn.className = "btn btn-primary";
            btn.type = "button";
            btn.insertAdjacentHTML("beforeend", "Btn");
            grid.appendChild(btn);
            buttonArray[i][j].buttonObject = btn;
            btn.addEventListener("mousedown", () => btnPress(buttonArray[i][j]));
            btn.addEventListener("mouseup", () => btnDepress());
        }
    }
}

function btnPress(button){
    button.buttonObject.style.background = "yellow";    
    pressTimer = setTimeout(() => {
        button.buttonObject.style.background = "red";
        button.buttonObject.innerHTML = "";
    }, 1000);
}

function btnDepress() {
    clearTimeout(pressTimer);
}