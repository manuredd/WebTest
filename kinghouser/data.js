function setLastPlayed() {
    localStorage.setItem("lastPlayed", Date.now.toString())
}

function getLastPlayed() {
    return localStorage.getItem("lastPlayed")
}

function setStreak(i) {
    localStorage.setItem("streak", i)
}

function getStreak() {
    return localStorage.getItem("streak")
}

function setBestTime(min, sec, ms) {
    localStorage.setItem("bestTime", min + ":" + sec + ":" + ms)
}

function getBestTime() {
    return localStorage.getItem("bestTime")
}

function clearLocalStorage() {
    localStorage.clear()
}

function removeItem(item) {
    localStorage.removeItem(item)
}
