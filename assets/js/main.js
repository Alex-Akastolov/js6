let slides = document.querySelectorAll('.slide');
let currentSlide = 0;
let slideInterval = setInterval(nextSlide, 2000);
let pauseButton = document.querySelector('#pause');
let prevButton = document.querySelector('#prev');
let nextButton = document.querySelector('#next');
let controls = document.querySelectorAll('.controls');
let isPlaying = true;

function nthSlide(n) {
    slides[currentSlide].className = 'slide';
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].className = 'slide active';
}

function pauseSlideShow() {
    pauseButton.innerHTML = 'Play';
    isPlaying = false;
    clearInterval(slideInterval);
}

function playSlideShow() {
    pauseButton.innerHTML = 'Pause';
    isPlaying = true;
    slideInterval = setInterval(nextSlide, 2000);
}

let pausePlay = () => isPlaying ? pauseSlideShow() : playSlideShow();

// pauseButton.onclick = function () {
//     if (isPlaying) {
//         pauseSlideShow();
//     } else {
//         playSlideShow();
//     }
// }

pauseButton.addEventListener('click', pausePlay)

function nextSlide() {
    nthSlide(currentSlide + 1)
};

function prevSlide() {
    nthSlide(currentSlide - 1)
};


function next() {
    pauseSlideShow();
    nextSlide()
};

function prev() {
    pauseSlideShow();
    prevSlide()
};
nextButton.addEventListener('click', next)
prevButton.addEventListener('click', prev)

for (let i = 0; i < controls.length; i++) {
    controls[i].style.display = 'inline-block';
}