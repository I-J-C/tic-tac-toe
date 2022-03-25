class tttBoard {
    constructor(boardGrid, turnTracker) {
        // this.player1 = player1;
        // this.player2 = player2;
        this.boardGrid = boardGrid;
        this.setRedTurn();
        this.addClickListeners();
        this.turnTracker = turnTracker;
    }

    currentTurn(square) {
        if (this.turn === 'red') {
            square.classList.add('red');
            this.setBlueTurn();
        }else if (this.turn === 'blue'){
            square.classList.add('blue');
            this.setRedTurn();
        }
        this.turnTracker.innerHTML = `${this.turn} turn`;
    }

    getTurn() {
        return this.turn;
    }

    setRedTurn() {
        return this.turn = 'red';
    }

    setBlueTurn() {
        return this.turn = 'blue';
    }

    resetGame() {
        this.removeClickListeners();
        this.addClickListeners();
        this.setRedTurn();
        this.turnTracker.innerHTML = `${this.turn} turn`;
        this.removeSpaces();
    }

    addClickListeners(){
        for (let i=0; i<this.boardGrid.length; i++) {
            this.boardGrid[i].addEventListener('click', () => {
                this.currentTurn(this.boardGrid[i]);
            }, {once:true})
        }
    }

    removeClickListeners(){
        this.boardGrid.forEach((square) => {
            square.click();
        });
    }

    takeTurn(square){
        this.currentTurn(square);
    }

    removeSpaces() {
        for (let i=0; i<this.boardGrid.length; i++) {
                this.boardGrid[i].classList.remove('red');
                this.boardGrid[i].classList.remove('blue');
            }
        }
    }


const squaresNodeList = document.querySelectorAll('.grid-square');
const squares = Array.from(squaresNodeList);
const resetButton = document.querySelector('#reset-button');
const turnTracker = document.querySelector('#turn-tracker');

board = new tttBoard(squares, turnTracker);
resetButton.addEventListener('click', () => {
    board.resetGame();
});
