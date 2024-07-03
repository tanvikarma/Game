document.body.style.backgroundImage = "url('src/assets/images/bg.jpg')"
// /home/rails/cssrepo/Tic_Tac_Toe/src/assets/images/bg.jpg
const mainDivBox = document.getElementById('mainDiv');

const gameBoard = document.createElement('div');
Object.assign(gameBoard.style, {
    display: 'grid',
    gridTemplateColumns: 'repeat(3,100px)',
    gridTemplateRows : 'repeat(3,100px)',
    gap : '5px',
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
  