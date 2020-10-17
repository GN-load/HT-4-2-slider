const slider = document.querySelector('.slider');
const span = document.querySelector('span');

slider.addEventListener('input', function () {
    span.style.fontSize = `${slider.value}px`
}, false);



