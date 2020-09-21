document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
const board = {}
let defaultBoard = 6

// Stretch 1: AutoGenerate Board
function generateBoard(n){
  document.querySelector(".board").innerHTML = ""
  board.cells = []
   for (let rowCount = 0; rowCount < n; rowCount++){
    for (let colCount = 0; colCount < n; colCount++){
      board.cells.push({
        row: rowCount,
        col: colCount,
        isMine: Math.random() < 0.333,
        hidden: true,
        isMarked: false
      })
    }
  } 
}


// Stretch 2: Reset the board
function resetBoard(){
  document.querySelector(".board").innerHTML = ""
  generateBoard(defaultBoard)
  lib.initBoard()
  countMines()
  checkForWin()
}

 function changeSize(n){
  defaultBoard = n
  resetBoard()
 }

function startGame () {
  // Don't remove this function call: it makes the game work!
  generateBoard(defaultBoard)
  countMines()
  document.addEventListener ('click', checkForWin)
  document.addEventListener ('contextmenu', checkForWin)

  lib.initBoard()
}

function countMines(){
for(let i=0;i<board.cells.length;i++){
  board.cells[i].surroundingMines = countSurroundingMines(board.cells[i])
  }
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

