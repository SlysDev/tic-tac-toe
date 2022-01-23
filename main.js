let mainContainer = document.querySelector('.container');
let winContainer = document.querySelector('.win-container');
let startContainer = document.querySelector('.start-container');


const Player = function (playerName, playerValue) {
    let ready = true;
    let value = playerValue;
    const mark = function (space, value) {
        space.textContent = value;
        render();
    }
    let name = playerName;
    return { mark, value, ready, name }
}




let player1 = Player('x');
let player2 = Player('o');

const Gameboard = (function () {
    const board = document.querySelector('#board');
    let boardData = [];
    const gameSquare = function (identifier) {
        let element = document.createElement('div');
        element.classList.add('board-square');
        let value = '';
        element.textContent = value;
        let key = identifier;
        let occupied = false;
        element.addEventListener('click', () => {
            if (Gameboard.boardData[key].occupied == true) {
                return;
            }
            console.log(`${key} has been clicked!`);
            Gameboard.boardData[key].occupied = true;
            if (player1.ready == true) {
                Gameboard.boardData[key].value = `${player1.value}`;
                console.log(Gameboard.boardData[key].value);
                player1.ready = false;
            } else {
                Gameboard.boardData[key].value = `${player2.value}`;
                player1.ready = true;
                player2.ready = false;
            }
            
            element.textContent = Gameboard.boardData[key].value;
            gameController.checkWin();
            gameController.checkTie();
        });
        return { value, key, occupied, element };
    }
    const render = function () {
        console.log('rendering');
        Gameboard.boardData.forEach((squareValue, squareIdentifier) => {
            let square = gameSquare(squareIdentifier);
            square.value = squareValue;
            Gameboard.board.appendChild(square.element);
        });
    
    };
    return { board, boardData, render, gameSquare }
})();

const gameController = (function () {
    let endText = document.querySelector('#end-text');
    let restartButton = document.querySelector('.restart-btn');
    let resetButton = document.querySelector('#reset-btn');
    let newGameButton = document.querySelector('.new-game-btn');
    

    let playerNameEval = function () {
        let player1NameInput = document.querySelector('#player-one-name');
        let player2NameInput = document.querySelector('#player-two-name');
        player1.name = player1NameInput.value;
        player2.name = player2NameInput.value;
        let player1ValueInput = document.querySelector('#player-one-value');
        let player2ValueInput = document.querySelector('#player-two-value');
        player1.value = player1ValueInput.value;
        player2.value = player2ValueInput.value;
        
    }

    let startGame = function () {
        startContainer.style.display = 'flex';
        mainContainer.style.display = 'none';
        winContainer.style.display = 'none';
        let startButton = document.querySelector('#start-btn');
        startButton.addEventListener('click', function() {
            playerNameEval();
            startBoard();
        })
        
    }

    let startBoard = function () {
        player1.ready = true; // Allows 'x' to play first again.
        Gameboard.boardData = []; // Resets the array
        winContainer.style.display = 'none';
        startContainer.style.display = 'none';
        mainContainer.style.display = 'flex'; // Makes main container visible again
        board.textContent = ''; // Clears the board of it's children
        for (let index = 0; index < 9; index++) {
            let square = Gameboard.gameSquare(index);
            Gameboard.board.appendChild(square.element);
            Gameboard.boardData.push(square);
        } // Make 9 squares, append the objects for the squares to the board array.
    };
    let xCount;
    let oCount;
    const checkWin = function () {
        if (Gameboard.boardData[0].value == player1.value && Gameboard.boardData[1].value == player1.value && Gameboard.boardData[2].value == player1.value) {
            win(player1);
        } else if (Gameboard.boardData[0].value == player1.value && Gameboard.boardData[3].value == player1.value && Gameboard.boardData[6].value == player1.value) {
            win(player1);
        } else if (Gameboard.boardData[0].value == player1.value && Gameboard.boardData[4].value == player1.value && Gameboard.boardData[8].value == player1.value) {
            win(player1);
        } else if (Gameboard.boardData[8].value == player1.value && Gameboard.boardData[7].value == player1.value && Gameboard.boardData[6].value == player1.value) {
            win(player1);
        } else if (Gameboard.boardData[8].value == player1.value && Gameboard.boardData[5].value == player1.value && Gameboard.boardData[2].value == player1.value) {
            win(player1);
        } else if (Gameboard.boardData[1].value == player1.value && Gameboard.boardData[4].value == player1.value && Gameboard.boardData[7].value == player1.value) {
            win(player1);
        } else if (Gameboard.boardData[3].value == player1.value && Gameboard.boardData[4].value == player1.value && Gameboard.boardData[5].value == player1.value) {
            win(player1);
        } else if (Gameboard.boardData[0].value == player1.value && Gameboard.boardData[4].value == player1.value && Gameboard.boardData[8].value == player1.value) {
            win(player1);
        } else if (Gameboard.boardData[2].value == player1.value && Gameboard.boardData[4].value == player1.value && Gameboard.boardData[6].value == player1.value) {
            win(player1); // If X has a tic-tac-toe
        } else if (Gameboard.boardData[0].value == player2.value && Gameboard.boardData[1].value == player2.value && Gameboard.boardData[2].value == player2.value) {
            win(player2);
        } else if (Gameboard.boardData[0].value == player2.value && Gameboard.boardData[3].value == player2.value && Gameboard.boardData[6].value == player2.value) {
            win(player2);
        } else if (Gameboard.boardData[0].value == player2.value && Gameboard.boardData[4].value == player2.value && Gameboard.boardData[8].value == player2.value) {
            win(player2);
        } else if (Gameboard.boardData[3].value == player2.value && Gameboard.boardData[4].value == player2.value && Gameboard.boardData[5].value == player2.value) {
            win(player2);
        } else if (Gameboard.boardData[8].value == player2.value && Gameboard.boardData[7].value == player2.value && Gameboard.boardData[6].value == player2.value) {
            win(player2);
        } else if (Gameboard.boardData[8].value == player2.value && Gameboard.boardData[5].value == player2.value && Gameboard.boardData[2].value == player2.value) {
            win(player2);
        } else if (Gameboard.boardData[0].value == player2.value && Gameboard.boardData[3].value == player2.value && Gameboard.boardData[6].value == player2.value) {
            win(player2);
        } else if (Gameboard.boardData[2].value == player2.value && Gameboard.boardData[4].value == player2.value && Gameboard.boardData[6].value == player2.value) {
            win(player2); // If O has a tic-tac-toe
        }
    }

    const checkTie = function () {
        let occupiedCount = 0;
        Gameboard.boardData.forEach(square => {
            if (square.occupied == true) {
                occupiedCount++;
            } else {
                return;
            }
        });
        if (occupiedCount == 9) {
            tie();
        }
    }

    const tie = function () {
        winContainer.style.display = 'flex';
        mainContainer.style.display = 'none';
        
        endText.textContent = `The game is a tie!`;
    }
    winContainer.style.display = 'none';
    const win = function (player) {
        winContainer.style.display = 'flex';
        mainContainer.style.display = 'none';
        
        endText.textContent = `${player.name} has won!`;
    }
    restartButton.addEventListener('click', function () {
        startBoard();
    });
    resetButton.addEventListener('click', function () {
        startBoard();
    });

    newGameButton.addEventListener('click', function() {
        startGame();
    })
    return { startBoard, checkWin, checkTie, startGame };
})();

gameController.startGame();

