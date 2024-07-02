function handleCellClick(e){
    const cellValue = e.target;
   
    const index = parseInt(cellValue.getAttribute('data-index'),10);
   
    if(gameState[index] !==''|| checkWinner()){
        return;
    }

    gameState[index] = currentPlayer;
    cellValue.textContent = currentPlayer;

    if(checkWinner(index)){
        alert(`player ${currentPlayer} wins`)
    }
    else if(gameState.every(cellValue => cellValue !== '')){
        alert('its a drow')
    }
    else{
       currentPlayer = currentPlayer === 'X'? 'O' :'X' ;
    }
    
}
