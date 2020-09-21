document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board = {
  cells: [{
    col: 0,
    row: 0,
    hidden: true,
    isMine: false,
},
    {col: 0,
    row: 1,
    hidden: true,
    isMine: false,
},
    {col: 0,
    row: 2,
    hidden: true,
    isMine: false,
},
    {col: 1,
    row: 0,
    hidden: true,
    isMine: true,
},
    {col: 1,
    row: 1,
    hidden: true,
    isMine: true,
},
    {col: 1,
    row: 2,
    hidden: true,
    isMine: true,
},
    {col: 2,
    row: 0,
    hidden: true,
    isMine: true,
},
    {col: 2,
    row: 1,
    hidden: true,
    isMine: true,
},
    {col: 2,
    row: 2,
    hidden: true,
    isMine: true,
    }]
}


function startGame () {
  // Don't remove this function call: it makes the game work!
  for(let i=0;i<board.cells.length;i++){
    board.cells[i].surroundingMines = countSurroundingMines(board.cells[i])
  }
  document.addEventListener ('click', checkForWin)
  document.addEventListener ('contextmenu', checkForWin)

  lib.initBoard()
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {
  for(i=0;i<board.cells.length;i++){
    if (board.cells[i].isMine === true && board.cells[i].isMarked === false)
        return
      if (board.cells[i].isMine === false && board.cells[i].hidden === true)
        return
  }
// if it IS a mine and it ISNT marked, you don't win
// if it ISNT a mine and it IS hidden, you don't win


  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
    lib.displayMessage('You win!')
}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines (cell) {
  var surrounding = lib.getSurroundingCells(cell.row, cell.col)
  let count = 0
  for(let i = 0; i< surrounding.length; i++){
    if(surrounding[i].isMine)
      count ++
  }
    return count
}

