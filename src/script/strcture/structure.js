const mainDivBox = document.getElementById('mainDiv');
const gameBoard = document.createElement('div');
gameBoard.style.display = 'grid';
gameBoard.style.gridTemplateColumns ='repeat(3,100px)';
gameBoard.style.gridTemplateRows ='repeat(3,100px)';
gameBoard.style.gap = '5px';
mainDivBox.appendChild(gameBoard);

// reset button
const resetButton = document.createElement('button');
resetButton.textContent = 'Reset Game';
resetButton.style.padding = '10px 20px';
resetButton.style.margin = '20px';
resetButton.style.fontSize = '1em';
resetButton.style.cursor = 'pointer';
mainDivBox.appendChild(resetButton);

//game variables
let currentPlayer = 'X'
let gameState = ['','','','','','','','',''];
const winnigCombination = [
    [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
];

//create cell
for(let i= 0;i<9;i++){
    const cell = document.createElement('div');
    cell.style.width = '100px';
    cell.style.height = '100px';
    cell.style.backgroundColor = '#fff';
    cell.style.display = 'flex';
    cell.style.alignItems = 'center';
    cell.style.justifyContent = 'center';
    cell.style.cursor = 'pointer';
    cell.style.border = '1px solid gray';
    cell.setAttribute('data-index',i);
    cell.addEventListener('click', (e) => handleCellClick(e));
    gameBoard.appendChild(cell);
}


function handleCellClick(e){
    const cellValue = e.target;
   
    const index = cellValue.getAttribute('data-index');
   
    if(gameState[index] !==''|| checkWinner()){
        return;
    }

    gameState[index] = currentPlayer;
    cellValue.textContent = currentPlayer;

    if(checkWinner()){
        alert(`player ${currentPlayer} wins`)
    }
    else if(gameState.every(cellValue => cellValue !== '')){
        alert('its a drow')
    }
    else{
       currentPlayer = currentPlayer === 'X'? 'O' :'X' ;
    }
}
function checkWinner(){
    return winnigCombination.some(combination => {
        return combination.every(index =>{
           console.log(index);
            return gameState[index] === currentPlayer;
        });
    });
};

// reset game
resetButton.addEventListener('click', resetGame);

function resetGame(){
    gameState = ['','','','','','','','',''];
    currentPlayer = 'X';
    const cells = document.querySelectorAll('div[data-index]') ;
    cells.forEach(cells => cells.textContent = '' );
}