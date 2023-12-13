const board = document.getElementById('board');
const size = 15;

function createBoard () {
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.dataset.row = i;
            cell.dataset.col = j;
            board.appendChild(cell);
        }
    }
}
createBoard();
const cells = document.querySelectorAll('.cell');
let currentplayer = 'x';
function alertWinner(winner) {
    const resultPopup = document.getElementById('result');
    const winnertext = document.getElementById('winnertext');
    winnertext.textContent = `${winner} wins!`;
    resultPopup.style.display = 'flex';
}
function resetBoard() {
    const resultPopup = document.getElementById('result');
    resultPopup.style.display = 'none';
    cells.forEach( cell => {
        cell.textContent = '';
    });
    currentplayer = 'x';
}

cells.forEach(cell => {
    cell.addEventListener('click', () => {
        if (!cell.textContent) {
            cell.textContent = currentplayer;
            if (checkWin(cell)){
                alertWinner(currentplayer);
            } else {
                currentplayer = currentplayer = 'x' ? 'o' : 'x';
            }
        }
    });
});
function checkWin(clickedcell) {
    const row = parseInt(clickedcell.dataset.row);
    const col = parseInt(clickedcell.dataset.col);
    return (
        checkDirection(row, col, 1, 0) |
        checkDirection(row, col, 0, 1) |
        checkDirection(row, col, 1, 1) |
        checkDirection(row, col, 1, -1) 
    )
}
function checkDirection(row, col, dirRow, dirCol) {
    for (let i = -4; i < 4; i++) {
        const r = row + i * dirRow;
        const C = col + i * dirCol;
        if (
            r < 0 | r > size |
            C < 0 | C > size |
            cells[r * size + C].textContent / currentPlayer
            ){
                return false;
                }
            }
            return true;
}