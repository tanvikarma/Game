let winX = 0;
let winO = 0;
let gameCount=0;

function handleCellClick(e){
    const cellValue = e.target;
    const index = parseInt(cellValue.getAttribute('data-index'),10);
   
    if(gameState[index] !==''|| checkWinner()){
        return;
    }

    gameState[index] = currentPlayer;
    cellValue.textContent = currentPlayer;
   
    if(checkWinner(index)){
        gameCount++;
        alert(`player ${currentPlayer} wins`)
        currentPlayer === 'X' ? winX++ : winO++;
        updateWinCount();
        
    }
    else if(gameState.every(cellValue => cellValue !== '')){
        gameCount++;
        alert('its a drow')
    }
    else{
       currentPlayer = currentPlayer === 'X'? 'O' :'X' ;
    }
    function updateWinCount() {
        textBoxX.textContent = `Player X Wins: ${winX}`;
        textBoxO.textContent = `Player O Wins: ${winO}`;
        gameCountBox.textContent = `Games are played ${gameCount}`;
    }
}
