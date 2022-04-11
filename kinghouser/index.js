class board {
    constructor(canvas, context, boxHeight, boxWidth, squareDim) {
        this.canvas = canvas
        canvas = document.querySelector("canvas")
        this.context = context
        context = canvas.getContext("2d")
        this.boxHeight = window.innerHeight - 10
        this.boxWidth = boxHeight / 2
        this.squareDim = boxHeight / 7
    }
    createBoard() {
        canvas.height = boxHeight
        canvas.width = boxHeight / 2
        for (let i = 0; i < 5; i++) {
            context.strokeRect(1, (i * boxHeight / 6) + 1, squareDim, squareDim)
        }
        for (let i = 0; i < 5; i++) {
            context.strokeRect(boxWidth / 2, (i * boxHeight / 6) + 1, squareDim, squareDim)
        }
    }

}

function createBoard() {
    const canvas = document.querySelector("canvas")
    const boxHeight = window.innerHeight - 10
    canvas.height = boxHeight
    canvas.width = boxHeight / 2
    const boxWidth = boxHeight / 2
    const squareDim = boxHeight / 7
    const context = canvas.getContext("2d")
    for (let i = 0; i < 5; i++) {
        context.strokeRect(1, (i * boxHeight / 6) + 1, squareDim, squareDim)
    }
    for (let i = 0; i < 5; i++) {
        context.strokeRect(boxWidth / 2, (i * boxHeight / 6) + 1, squareDim, squareDim)
    }
}

function fillLetters() {
    const canvas = document.querySelector("canvas")
    const context = canvas.getContext("2d")
    context.fillStyle = "black";
    context.font = "bold 18px Arial";
    context.fillText("hello", 50, 50)
}
createBoard();
fillLetters();
