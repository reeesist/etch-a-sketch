let container = document.querySelector('#container')
container.style.gridTemplateColumns = `repeat(16, 1fr)`;
container.style.gridTemplate.Rows = `repeat(16, 1fr)`;

for(i = 0; i<256; i++) {
    let square = document.createElement('div');
    square.classList.add('square')
    container.insertAdjacentElement("beforeend", square);
}

divs = document.querySelectorAll('.square');
divs.forEach(divss => divss.addEventListener('mouseenter', function (e) {
    e.target.style.backgroundColor = 'blue';
} ))