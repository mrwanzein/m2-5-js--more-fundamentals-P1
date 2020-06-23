// Exercise 3-4 - The GRID
// ------------

const board = document.querySelector('#board');
board.style.height = '600px';
board.style.width = '600px';

for(let i=0; i<10; i++) {
    let cell = document.createElement('div');
    cell.setAttribute('class', 'cell');
    cell.setAttribute('id', `cell-${i}`);
    board.appendChild(cell);
}

board.style.gridTemplate = 'repeat(3, 1fr) / repeat(3, 1fr)';

