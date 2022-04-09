function createBoard() {
    const canvas = document.querySelector("canvas")
    const square = window.innerHeight
    canvas.height = square
    canvas.width = square
    const context = canvas.getContext("2d")
    for (let i = 0; i < 5; i++) {
        context.strokeRect(i * square / 5, 0, square / 6, square / 6)
    }
    for (let i = 0; i < 5; i++) {
        context.strokeRect(i * square / 5, square / 5, square / 6, square / 6)
    }
    for (let i = 0; i < 5; i++) {
        context.strokeRect(i * square / 5, 2 * square / 5, square / 6, square / 6)
    }
}
// there has got to be a better way to make more rows, we need y to change every 5i while having x change every i iteration
createBoard();
// why did you call function before defining it, and it worked