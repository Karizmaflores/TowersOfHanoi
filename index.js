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
  checkWin(row);
  
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
  }

  if(stone.id < currentID){
    document.getElementById(rowID).appendChild(stone);
    stone = null;
    return true;
  }
  console.log("Invalid move");
  alert('Invalid Move!');
  
}

const checkWin = (row) => {

  let one = document.getElementById("1");
  let two = document.getElementById("2");
  let three = document.getElementById("3");
  let four = document.getElementById("4");

  if (row.id === "middle-row" || row.id === "top-row"){
    if (row.children.item(0) === four && row.children.item(1) === three && row.children.item(2) === two && row.children.item(3) === one) { 
      console.log("You win!");
      alert('You win!');
    }
  }
}
