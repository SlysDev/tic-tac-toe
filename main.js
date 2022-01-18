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
            occupied = true;
            value = `${Player.value}`;
            element.textContent = value;
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
    const countSquares = Gameboard.boardData.forEach(square => {
        if (square == 'X') {
            oCount = 0;
            xCount++
        } else {
            xCount = 0;
            oCount++
        }
    });
    const checkWin = function () {
        if (xCount = 3) {
            console.log('X wins!');
        }
    }
    return { startGame, checkWin };
})();

const displayController = (function () {
    Gameboard.board
})();



const Player = function () {
    let value = 'x';
    const mark = function (space, value) {
        space.textContent = value;
        render();
    }
    return { mark, value }
}





gameController.startGame();