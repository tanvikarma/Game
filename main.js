// Object.assign(document.body.style, {
//     backgroundImage: "url('../../assets/images/welcome3.png')",
//     backgroundSIze : 'cover'
//   });

setTimeout(() => {
    // document.body.style.backgroundImage = "url('../../../../assets/images/bg.jpg')"
    document.body.style.backgroundImage = url('src/assets/images/bg.jpg')
    const mainDivBox = document.getElementById('mainDiv');
    
    const gameBoard = document.createElement('div');
    Object.assign(gameBoard.style, {
        display: 'grid',
        gridTemplateColumns: 'repeat(3,100px)',
        gridTemplateRows : 'repeat(3,100px)',
        gap : '5px',
        justifyContent : 'center',
        alignItems : 'center',
        maxWidth:'300px',
        margin:'auto',
        marginTop:'50px'
      });
    mainDivBox.appendChild(gameBoard);
    
    // reset button
    const resetButton = document.createElement('button');
    resetButton.textContent = 'Reset Game';
    Object.assign(resetButton.style, {
        padding: '10px 20px',
        margin: '20px',
        fontSize : '1em',
        cursor : 'pointer',
        marginLeft : '42vw',
        color:'teal',
        textShadow:'3px 3px 10px black'    
        });
    
    mainDivBox.appendChild(resetButton);
    
    //game variables
    let currentPlayer = 'X'
    let gameState = new Array(9).fill('');
    
    //create cell
    for(let i= 0;i<9;i++){
        const cell = document.createElement('div');
        Object.assign(cell.style, {
            width: '100px',
            height: '100px',
            backgroundColor : '#fff',
            display : 'flex',
            alignItems : 'center',
            justifyContent: 'center',
            cursor : 'pointer',
            border : '1px solid gray',
            fontSize:'3em',
            color: 'teal',
            textShadow:'3px 3px 10px black'
            });
        cell.setAttribute('data-index',i);
        cell.addEventListener('click', (e) => handleCellClick(e));
        gameBoard.appendChild(cell);
    }
    
    //add winning details
    let scoreBox = document.createElement('div');
    scoreBox.style.textAlign = 'center';
    scoreBox.style.color ='white';
    mainDivBox.appendChild(scoreBox);
    
    function createAndAppendElement(parent, elementType, properties = {}) {
        const element = document.createElement(elementType);
        Object.assign(element, properties);
        parent.appendChild(element);
        return element;
    }
    
    const textBoxX = createAndAppendElement(scoreBox, 'div');
    const textBoxO = createAndAppendElement(scoreBox, 'div');
    const gameCountBox = createAndAppendElement(scoreBox, 'div');
      }, "0");

      /////////////////////////////

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
        // gameCountBox.textContent = `Games are played ${gameCount}`;
    }
    else if(gameState.every(cellValue => cellValue !== '')){
        alert('its a drow')
    }
    else{
       currentPlayer = currentPlayer === 'X'? 'O' :'X' ;
    }
    function updateWinCount() {
        textBoxX.textContent = `Player X Wins: ${winX}`;
        textBoxO.textContent = `Player O Wins: ${winO}`;
    }
}

///////////////////////////////

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
///////////////////////////

// reset game
resetButton.addEventListener('click', resetGame);

function resetGame(){
    gameState.fill('');
    currentPlayer = 'X';
    const cells = document.querySelectorAll('div[data-index]') ;
    cells.forEach(cells => cells.textContent = '' );
}
