document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board = {}
var cells = []
function generateBoard(n){
  board.cells = []
  let rowCount = 0
  let colCount = 0
  for (let i=0; i< n*n; i++){
    board.cells[i] = {
      row: Math.floor(rowCount),
      col: Math.floor(colCount),
      hidden: true,
      isMine: Math.random() > 0.7,
      isMarked: false
    
    }
  }
}

function startGame () {
  // Don't remove this function call: it makes the game work!
generateBoard()

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

