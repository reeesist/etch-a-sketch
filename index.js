function makeTable(box) {
    let container = document.querySelector('#container')
    container.style.gridTemplateColumns = `repeat(${box}, 1fr)`;
    container.style.gridTemplate.Rows = `repeat(${box}, 1fr)`;
    
    amount = box * box
    for(i = 0; i<amount; i++) {
        let square = document.createElement('div');
        square.addEventListener('mouseover', coloring)
        square.classList.add('square')
        container.insertAdjacentElement("beforeend", square);
}}

divs = document.querySelectorAll('.square');


function coloring() {
    this.style.backgroundColor = 'black'
}

makeTable(16)

function askSize() {
    size = prompt('Enter size of a square')
    box = size;
    makeTable(box);
}

let btn = document.querySelector('button');
btn.addEventListener('click', askSize)