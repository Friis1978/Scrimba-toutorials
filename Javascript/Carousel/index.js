const slides = document.getElementsByClassName("carousel-item")
const totalSlides = slides.length
let slideposition = 0

document.getElementById("carousel-button-next").addEventListener('click', moveToNextSlide)
document.getElementById("carousel-button-prev").addEventListener('click', moveToPrevSlide)

function hideAllSlides() {
    for (let slide of slides){
        slide.classList.remove('carousel-item-visible')
        slide.classList.add('carousel-item-hidden')
    }
}

function moveToNextSlide() {
    hideAllSlides()
    if(slideposition === totalSlides -1){
        slideposition = 0
    } else {
        slideposition++
    }
    slides[slideposition].classList.add("carousel-item-visible")
}

function moveToPrevSlide() {
    hideAllSlides()
    if(slideposition === 0){
        slideposition = totalSlides - 1
    } else {
        slideposition--
    }
    slides[slideposition].classList.add("carousel-item-visible")
}