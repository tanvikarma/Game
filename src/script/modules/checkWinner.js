function checkWinner(index){
    const row = Math.floor(index / 3);
    const col = index % 3;
    
    const checks = [
        [row * 3, row * 3 + 1, row * 3 + 2],
        [col, col + 3, col + 6],
        [0, 4, 8],
        [2, 4, 6]
    ];

    return checks.some(check =>
        check.every(i => gameState[i] === currentPlayer)
    );
}
