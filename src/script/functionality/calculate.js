function calculatePlayerWin(){
    let winX = 0;
    let winO = 0;

    if(checkWinner()){
        alert(`player ${currentPlayer}`)
        if(currentPlayer === 'X'){
            winX++;
            textBox.textContent = `Player X wins ${winX}`;
        }
        else{
            winO++;
            textBox.textContent = `Player O wins ${winO}`;
        }
    }
}