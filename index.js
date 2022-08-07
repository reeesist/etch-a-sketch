const container = document.getElementById('container')
let box = 256
function makeTable() {
    
    for(let rowIndex = 0; rowIndex < box; rowIndex++) {
        let div = document.createElement('div');        
        container.appendChild(div);
        div.classList.add('col', 'col1');
    }
}

makeTable()
let divs = document.querySelectorAll('.col');

divs.forEach(divss => divss.addEventListener('mouseenter', function (e) {
    e.target.style.backgroundColor = 'blue';
} ))
 
function askSize() {
    size = prompt('Enter size of a square')
    box = size * size;
    makeTable();
}

let btn = document.querySelector('button');
btn.addEventListener('click', askSize)

