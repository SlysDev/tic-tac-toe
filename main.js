let mainContainer = document.querySelector('.container');


const Gameboard = (function () {
    const board = document.querySelector('#board');
    const boardData = [];
    const gameSquare = function (identifier) {
        let element = document.createElement('div');
        element.classList.add('board-square');
        let value = '';
        element.textContent = value;
        let key = identifier;
        let occupied = false;
        element.addEventListener('click', () => {
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
    return { board, boardData, render, gameSquare, }
})();

const gameController = (function () {
    let startGame = function () {
        for (let index = 0; index < 9; index++) {
            let square = Gameboard.gameSquare(index);
            Gameboard.board.appendChild(square.element);
            Gameboard.boardData.push(square);
        }
    };
    let xCount;
    let oCount;
    const checkWin = function () {
        if (Gameboard.boardData[0].value == 'x' && Gameboard.boardData[1].value == 'x' && Gameboard.boardData[2].value == 'x') {
            win('x');
        } else if (Gameboard.boardData[0].value == 'x' && Gameboard.boardData[3].value == 'x' && Gameboard.boardData[6].value == 'x') {
            win('x');
        } else if (Gameboard.boardData[0].value == 'x' && Gameboard.boardData[4].value == 'x' && Gameboard.boardData[8].value == 'x') {
            win('x');
        } else if (Gameboard.boardData[8].value == 'x' && Gameboard.boardData[7].value == 'x' && Gameboard.boardData[6].value == 'x') {
            win('x');
        } else if (Gameboard.boardData[8].value == 'x' && Gameboard.boardData[5].value == 'x' && Gameboard.boardData[2].value == 'x') {
            win('x');
        } else if (Gameboard.boardData[1].value == 'x' && Gameboard.boardData[4].value == 'x' && Gameboard.boardData[7].value == 'x') {
            win('x');
        } else if (Gameboard.boardData[3].value == 'x' && Gameboard.boardData[4].value == 'x' && Gameboard.boardData[5].value == 'x') {
            win('x');
        } else if (Gameboard.boardData[0].value == 'x' && Gameboard.boardData[4].value == 'x' && Gameboard.boardData[8].value == 'x') {
            win('x');
        } else if (Gameboard.boardData[2].value == 'x' && Gameboard.boardData[4].value == 'x' && Gameboard.boardData[6].value == 'x') {
            win('x'); // If X has a tic-tac-toe
        } else if (Gameboard.boardData[0].value == 'o' && Gameboard.boardData[1].value == 'o' && Gameboard.boardData[2].value == 'o') {
            win('o');
        } else if (Gameboard.boardData[0].value == 'o' && Gameboard.boardData[3].value == 'o' && Gameboard.boardData[6].value == 'o') {
            win('o');
        } else if (Gameboard.boardData[0].value == 'o' && Gameboard.boardData[4].value == 'o' && Gameboard.boardData[8].value == 'o') {
            win('o');
        } else if (Gameboard.boardData[8].value == 'o' && Gameboard.boardData[7].value == 'o' && Gameboard.boardData[6].value == 'o') {
            win('o');
        } else if (Gameboard.boardData[8].value == 'o' && Gameboard.boardData[5].value == 'o' && Gameboard.boardData[2].value == 'o') {
            win('o');
        } else if (Gameboard.boardData[0].value == 'o' && Gameboard.boardData[3].value == 'o' && Gameboard.boardData[6].value == 'o') {
            win('o');
        } else if (Gameboard.boardData[2].value == 'o' && Gameboard.boardData[4].value == 'o' && Gameboard.boardData[6].value == 'o') {
            win('o'); // If O has a tic-tac-toe
        }
    }
    let winContainer = document.querySelector('.win-container');
    winContainer.style.display = 'none';
    const win = function (player) {
        winContainer.style.display = 'flex';
        mainContainer.style.display = 'none';
        let winText = document.createElement('h1');
        winText.textContent = `${player} has won!`;
        winContainer.appendChild(winText);
    }
    return { startGame, checkWin };
})();

const displayController = (function () {
    Gameboard.board
})();



const Player = function () {
    let ready = true;
    let value = 'x';
    const mark = function (space, value) {
        space.textContent = value;
        render();
    }
    return { mark, value, ready }
}





gameController.startGame();

let player1 = Player();
let player2 = Player();
player2.value = 'o';