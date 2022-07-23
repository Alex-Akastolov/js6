let isPlaying = true;

function createContainer() {
    container = document.createElement('div');
    container.setAttribute('class', 'container');

    document.querySelector('body').append(container);

    // container = document.querySelector('.container')
}

function createContent(n) {
    slidesContainer = document.createElement('ul');
    slidesContainer.setAttribute('class', 'slides');

    for (i = 0; i < n; i++) {
        slide = document.createElement('li');
        slide.setAttribute('class', i === 0 ? 'slide active' : 'slide');
        slidesContainer.append(slide)
    };

    container.append(slidesContainer);
    // slidesContainer = document.querySelector('.slides');
}

function createControls() {
    controls = document.createElement('div');
    controls.setAttribute('class', 'controls');

    const PAUSE = `<span class="control control-pause" id="pause">Pause</span>`;
    const PREV = `<span class="control control-prev" id="prev">Prev</span>`;
    const NEXT = `<span class="control control-next" id="next">Next</span>`;

    controls.innerHTML = PAUSE + PREV + NEXT;
    container.append(controls);
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

