
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
        indicator.setAttribute('class', i === 0 ? 'indicator active' : 'indicator');
        indicator.dataset.slideTo = `${i}`;
        indicators.append(indicator);
    }

    container.append(indicators)
}


function init(slidesCount = 5) {
    createContainer();
    createContent(slidesCount);
    createControls();
    createIndicators(slidesCount);

}

init()