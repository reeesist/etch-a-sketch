function makeTable(box) {
    let container = document.querySelector('#container')
    divs = document.querySelectorAll('.square');
    divs.forEach((div) => div.remove());
    container.style.gridTemplateColumns = `repeat(${box}, 1fr)`;
    container.style.gridTemplate.Rows = `repeat(${box}, 1fr)`;
    
    amount = box * box
    for(i = 0; i<amount; i++) {
        let square = document.createElement('div');
        square.addEventListener('mouseenter', coloring)
        square.classList.add('square')
        container.insertAdjacentElement("beforeend", square);
}}

function coloring() {
    this.style.backgroundColor = 'black'
}

makeTable(16)

function askSize() {
    size = prompt('Enter size of a square');
    if (size > 100) {
        box = 100
    } else if (size < 8) {
        box = 8
    } else {
    box = size;
    }
    makeTable(box);
}

let btn = document.querySelector('button');
btn.addEventListener('click', askSize)