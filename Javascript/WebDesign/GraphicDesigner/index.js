let openModalBtn = document.getElementById("open-modal")
let closeModalBtn = document.getElementById("close-modal")
let overlay = document.getElementById("overlay")

openModalBtn.addEventListener("click", function() {
    overlay.style.display = "block"
})

closeModalBtn.addEventListener("click", function() {
    overlay.style.display = "none"
})