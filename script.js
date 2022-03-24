class tttBoard {
    constructor(boardGrid) {
        // this.player1 = player1;
        // this.player2 = player2;
        this.boardGrid = boardGrid;
        this.turn = 'red';
        //add this to constructor for bonus
        // this.turnTracker = this.turnTracker;
    }

    currentTurn(element) {
        if (this.turn === 'red') {
            element.classList.add('red');
            this.setBlueTurn();
        }else{
            element.classList.add('blue');
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

    }

    addEventListeners(){
        for (let i=0; i<this.boardGrid.length; i++) {
            this.boardGrid[i].addEventListener('click', () => {
                    this.currentTurn(this.boardGrid[i])
            }, {once:true})
        }
    }
}

const squares = document.querySelectorAll('.grid-square');

board = new tttBoard(squares);
board.addEventListeners();