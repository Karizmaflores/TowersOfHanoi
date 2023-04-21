
let stone = null

// This function console logs that player clicked a row
const selectRow = (row) => {
  const currentRow = row.getAttribute("data-row")
  
  console.log("Yay, we clicked an item", row)
  console.log("Here is the stone's id: ", row.id)
  console.log("Here is the stone's data-size: ", currentRow)

 // This function will run pickUpStone is hand is empty or dropStone from player's hand and checkWin
  if(!stone){
    console.log("marker");
    pickUpStone(row.id);
  }
  else
  dropStone(row.id);
  checkWin(row);
  
} 

// This function picks up the stone on the top of the row
const pickUpStone = (rowID) => {
  const selectedRow = document.getElementById(`${rowID}`);
  console.log(rowID);
  stone = selectedRow.lastElementChild;
  console.log(selectedRow);

  selectedRow.removeChild(stone);

  console.log(stone)
}

// This function stores and drops the stone if the move is legal

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

// This function checks for player win based on item ids of the stones
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
