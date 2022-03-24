class tttBoard {
    constructor(boardGrid) {
        // this.player1 = player1;
        // this.player2 = player2;
        this.boardGrid = boardGrid;
        this.setRedTurn();
        this.addListeners();
        //add this to constructor for bonus
        // this.turnTracker = turnTracker;
    }

    currentTurn(square) {
        if (this.turn === 'red') {
            square.classList.add('red');
            this.setBlueTurn();
        }else if (this.turn === 'blue'){
            square.classList.add('blue');
            this.setRedTurn();
        }
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
        this.removeSpaces();
        this.addListeners();
        this.setRedTurn();
    }

    addListeners(){
        for (let i=0; i<this.boardGrid.length; i++) {
            this.boardGrid[i].addEventListener('click', () => {
                this.currentTurn(this.boardGrid[i]);
            }, {once:true})
        }
    }

    removeSpaces() {
        for (let i=0; i<this.boardGrid.length; i++) {
                this.boardGrid[i].classList.remove('red');
                this.boardGrid[i].classList.remove('blue');
            }
        }
        // checkSquare(square){
        //     this.currentTurn(square);
        //     //ADD LINE HERE TO TRACK CURRENT TURN
        // }
    }


const squares = document.querySelectorAll('.grid-square');
const resetButton = document.querySelector('#reset-button');

board = new tttBoard(squares);
resetButton.addEventListener('click', () => {board.resetGame()});
