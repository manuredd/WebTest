const canvas = document.querySelector("canvas")
canvas.width = window.innerWidth
canvas.height = window.innerHeight
const context = canvas.getContext("2d")
const img = new Image()
img.src = '/kinghouser/res/favicon.png'
img.onload = function() {
    for (let i = 0; i < 20000; i++) {
        setTimeout(function() {
            context.drawImage(img, i, Math.floor(Math.random() * canvas.height), 300, 100)
            if (i === 20000) {
                context.e    }
        }, 2 * i)
    }
}