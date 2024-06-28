let rootElement = document.getElementById('mainDiv')

function createElement(tag,id,idName,parantId){
    const newElement = document.createElement(tag);
    newElement.setAttribute(id,idName);
    parantId.appendChild(newElement);

    return createElement;
}

createElement('div','id','gameContainer', rootElement);
let gameBox = document.getElementById('gameContainer')

createElement('div','id','wrapperbox', gameBox)
let wrapper = document.getElementById('wrapperbox');

let textBox1 = [];
for(var i=0; i<9; i++){
    createElement('div','class','textBox',wrapper );
    textBox1[i] = document.getElementById('textBox');
}

createElement('div','id','gameInfo', rootElement);
let infoBox = document.getElementById('gameInfo');

createElement('h1', 'id','heading', infoBox);

createElement('div','id','gameInfoDiv', infoBox);
let infoDiv = document.getElementById('gameInfoDiv');

createElement('span','id','info', infoDiv);
let spaninfo = document.getElementById('info');

createElement('button','id','reset', infoDiv);
let resetButton = document.getElementById('reset');
resetButton.innerText = "Reset" ;

//css part
console.log(textBox1);
for(var i=0; i<9; i++){
    console.log(textBox1[i]);
    textBox1[i].style.background = 'red';
    textBox1[i].style.width = '20px'
}