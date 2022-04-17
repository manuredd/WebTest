canvas = document.querySelector("canvas")
context = canvas.getContext("2d")
const boxHeight = window.innerHeight - 10
const boxWidth = boxHeight / 2
const squareDim = boxHeight / 7

function makeBoard() {
    canvas.height = boxHeight
    canvas.width = boxHeight / 2
    for (let i = 0; i < 5; i++) {
        context.strokeRect(33, (i * boxHeight / 6) + 1, squareDim, squareDim)
    }
    for (let i = 0; i < 5; i++) {
        context.strokeRect(boxWidth / 2 + 33, (i * boxHeight / 6) + 1, squareDim, squareDim)
    }
}

function fillLetters() {
    const canvas = document.querySelector("canvas")
    const context = canvas.getContext("2d")
    context.fillStyle = "black";
    context.font = "60px Rockwell";
    let letters = createPuzzle()
    for (let i = 0; i < 9; i++) {
        if (i < 4) context.fillText(letters[i], boxWidth / 6, i * boxHeight / 6)
        else context.fillText(letters[i], 3 * boxWidth / 4, i * boxHeight / 6)
    }
}

makeBoard();
fillLetters();
