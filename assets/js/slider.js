let prevIndicator = null;

function createContainer() {
    container = document.createElement('div');
    container.setAttribute('class', 'container');

    document.querySelector('body').append(container);

}

function createContent(n) {
    slides = document.createElement('ul');
    slides.setAttribute('class', 'slides');

    for (i = 0; i < n; i++) {
        slide = document.createElement('li');
        slide.setAttribute('class', i === 0 ? 'slide active' : 'slide');
        slides.append(slide)
    };

    container.append(slides);
}

function createControls() {
    controls = document.createElement('div');
    controls.setAttribute('class', 'controls');

    const PAUSE = `<span class="control control-pause" id="pause">Pause</span>`;
    const PREV = `<span class="control control-prev" id="prev">Prev</span>`;
    const NEXT = `<span class="control control-next" id="next">Next</span>`;

    controls.innerHTML = PAUSE + PREV + NEXT;
    container.append(controls);

    pauseBtn = document.querySelector('#pause');
    prevBtn = document.querySelector('#prev');
    nextBtn = document.querySelector('#next');
}

function createIndicators(n) {
    indicators = document.createElement('div');
    indicators.setAttribute('class', 'indicators');

    for (i = 0; i < n; i++) {
        indicator = document.createElement('span');
        indicator.setAttribute('class', i === 0 ? 'indicators__item active' : 'indicators__item');
        indicator.dataset.slideTo = `${i}`;
        indicators.append(indicator);
    }

    container.append(indicators)
}

function indicatorsHandler(e) {
    let target = e.target;

    if (target.classList.contains('indicators__item')) {
        target.style.background = 'blue';

        if (prevIndicator) prevIndicator.removeAttribute('style');

        prevIndicator = target;
    }
}

function setListeners() {
    const indicatiorsContainer = document.querySelector('.indicators');

    indicatiorsContainer.addEventListener('click', indicatorsHandler);
}

function createStyle() {
    styleCont = document.createElement('style');
    let style = `
    html {
        overflow-x: none;
    }
    
    .slides {
    position: relative;
    height: 150px;
    padding: 0px;
    margin: 0px;
    list-style-type: none;
    }

    .slide {
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    opacity: 0;
    z-index: 1;
    transition: opacity 1s;
    }
    
    .active {
    opacity: 1;
    z-index: 2;
    }

    .controls {
    margin-top: 20px;
    }
    
    .control {
    background-color: gray;
    border: 2px solid black;
    border-radius: 50px;
    margin-right: 10px;
    padding: 10px;
    cursor: pointer;
    }

    .indicators {
    margin-top: 30px;
    }

    .indicators__item {
    cursor: pointer;
    background-color: green;
    margin-right: 10px;
    padding: 7.5px 15px;
    border: 2px solid black;
    border-radius: 50px;
    }

    .slide {
    font-size: 40px;
    padding: 40px;
    box-sizing: border-box;
    background: #333;
    color: #fff;
    }

    .slide:nth-of-type(1) {
    background: red;
    }

    .slide:nth-of-type(2) {
    background: orange;
    }

    .slide:nth-of-type(3) {
    background: green;
    }

    .slide:nth-of-type(4) {
    background: blue;
}

    .slide:nth-of-type(5) {
        background: purple;
    }
    `;

    styleCont.innerHTML = style;
    container.append(styleCont);
}

function createCarousel(slidesCount = 5) {
    createContainer();
    createContent(slidesCount);
    createControls();
    createIndicators(slidesCount);
    createStyle();
    setListeners();
}

createCarousel()