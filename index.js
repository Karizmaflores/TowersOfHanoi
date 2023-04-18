// * This js file is incomplete. It will log to the console the elements you click
    // call another function and set stone. You will have to work through the logic
    // of the game as you know it from building it in the terminal. Work through the
    // puzzle slowly, stepping through the flow of logic, and making the game work.
    // Have fun!!
// * First run the program in your browser with live server and double-click on the row you'd like to select an element from.
// * Why are you get a warning in your console? Fix it.
// * Delete these comment lines!

let stone = null

// this function is called when a row is clicked. 
// Open your inspector tool to see what is being captured and can be used.
const selectRow = (row) => {
  const currentRow = row.getAttribute("data-row")
  
  console.log("Yay, we clicked an item", row)
  console.log("Here is the stone's id: ", row.id)
  console.log("Here is the stone's data-size: ", currentRow)

 
  if(!stone){
    console.log("marker");
    pickUpStone(row.id);
  }
  else
  dropStone(row.id);
  
} 

// this function can be called to get the last stone in the stack
// but there might be something wrong with it...
const pickUpStone = (rowID) => {
  const selectedRow = document.getElementById(`${rowID}`);
  console.log(rowID);
  stone = selectedRow.lastElementChild;
  console.log(selectedRow);

  selectedRow.removeChild(stone);

  console.log(stone)
}

// You could use this function to drop the stone but you'll need to toggle between pickUpStone & dropStone
// Once you figure that out you'll need to figure out if its a legal move...
// Something like: if(!stone){pickupStone} else{dropStone}

const dropStone = (rowID) => {
  const selectedRow = document.getElementById(`${rowID}`);
  let currentID = null;
  if (selectedRow.lastElementChild !==null ){
    currentID = selectedRow.lastElementChild.id;
  }
  console.log("TEST", currentID);

  if (currentID == null){
    document.getElementById(rowID).appendChild(stone);
    stone = null;
    return true;
    checkWin(rowID);
  }

  if(stone.id < currentID){
    document.getElementById(rowID).appendChild(stone);
    stone = null;
    return true;
    checkWin(rowID);
  }
  console.log("Invalid move");
  
}

const checkWin = (rowID) => {

  const selectedRow = document.getElementById(`${rowID}`);
  let topID = selectedRow.lastElementChild.id;
  let bottomID = selectedRow.firstElementChild.id;
  console.log("TOP STONE", topID, bottomID);

  // If certain towers top stone is equal to 1 and bottom stone is equal to 4, player wins and prints to the screen
  if (topID === 1 && bottomID === 4) {

  console.log("You win!");

  // resets board and terminates program
  stone = null;

  }
  return false;
}

//when to execute...when to terminate, reset board
//all situations