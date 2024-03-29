// Global variables
let color = 'black';
let click = false;

// Main fucntion
document.addEventListener('DOMContentLoaded', function(){
    createBoard(16); // Default board of size 16 is created

    // Draw is enabled if there is a board/body click (not a BUTTON click)
    document.querySelector('body').addEventListener('click', function(e){
        if (e.target.tagName != 'BUTTON'){
            click = !click;
        }
    })

    // Custom board is created if user presses select button
    document.querySelector('#pop-up').addEventListener('click', function(){
        let size = getSize(); // call getSize fucntion
        createBoard(size);  // call createBoard fucntion
    })
})

// Create board fucntion
function createBoard(size){
    let board = document.querySelector('.board'); // get the board element from document
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`; // change style of the board to make it 'grid'
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numDivs = size * size;
    for(let i = 0; i < numDivs; i++){
        let div = document.createElement('div'); // create div elements

        // Drawing - Change background color of a div
        div.addEventListener('mouseover', colorDiv);

        board.insertAdjacentElement('beforeend', div); // insert created div to board
    }
}

// Get board size fucntion
function getSize(){
    let input = prompt('Board size?'); // create a holder for user input size
    let message = document.querySelector('#message'); // get message element
    if (input == '') {
        message.innerHTML = 'Please provide a number';  // populate message based on user input size
    }
    else if (input < 0 || input > 100) {
        message.innerHTML = 'Plase provide a number between 1 and 100'; // populate message based on user input size  
    }
    else {
        message.innerHTML = 'Now you can play'; // populate message based on user input size  
        return input; // return board size
    }
}

// Drawing - Change background color of a div
function colorDiv(){
    if (click){
        if (color == 'rainbow'){
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`; // change background color of a div based on value of color global variable
        }
        else {
            this.style.backgroundColor = 'black'; // change background color of a div based on value of color global variable
        }
    }
}

// Set color function
// - the fucntion with black colorChoice sets global variable to balck if Black button is pressed
// - the fucntion with rainbow colorChoice sets global variable to rainbow if Rainbow button is pressed
function setColor(colorChoice){
    color = colorChoice; // set global varibale to the balck or rainbow
}

// ResetBoard function
function resetBoard(){
    let divs = document.querySelectorAll('div'); // get all the divs into array of divs
    divs.forEach((div) => div.style.backgroundColor = 'white'); // for each div in array of divs change the background color to white
}