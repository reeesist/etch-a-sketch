const container = document.getElementById('container')

function makeTable() {
    
    for(let rowIndex = 0; rowIndex < 16; rowIndex++) {
        let div = document.createElement('div');
       
        for(let columnIndex = 0; columnIndex < 16; columnIndex++) {
            let div1 = document.createElement('div');
            div.appendChild(div1)
            div1.classList.add('col');
        }
        
        container.appendChild(div);
        div.classList.add('col', 'col1');
    }
}


makeTable()
let divs = document.querySelectorAll('.col');

divs.forEach(divss => divss.addEventListener('mouseenter', function (e) {
    e.target.style.backgroundColor = 'red'
} ))