createBoard()

function createBoard() {
    const canvas = document.querySelector("canvas")
    canvas.width = window.innerWidth - 20
    canvas.height = window.innerHeight - 20
    const context = canvas.getContext("2d")
    for (let i = 0; i < 5; i++) {
        context.strokeRect(i * canvas.width / 5, 20, 100, 100)
    }
}