'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// An object that represents the three stacks of Towers of Hanoi; 
  // * each key is an array of Numbers: 
    // * A is the far-left, 
    // * B is the middle, 
    // * C is the far-right stack
      // * Each number represents the largest to smallest tokens: 
        // * 4 is the largest, 
        // * 1 is the smallest

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

//Function printStacks displays the towers with current piece locations
const printStacks = () => {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

// Function movePiece removes a piece from one stack and adds to another stack
const movePiece = (startStack, endStack) => {

  // remove piece from start stack
  let piece = stacks[startStack].pop();

  // adds piece to end stack
  stacks[endStack].push(piece);
}

// Function isLegal checks if a moving a piece on top of another is allowed by boolean
const isLegal = (startStack, endStack) => {

  // stores the top pieces of the start stack and end stack into variables
  let startStackTopPiece = stacks[startStack].length - 1;
  let endStackTopPiece = stacks[endStack].length - 1;
  
  // returns true if end stack has no pieces or if end piece is greater than start stack piece. Returns false else
  if (stacks[endStack].length === 0 || endStackTopPiece > startStackTopPiece) {
    return true;
  } 
  else 
    return false;
}

// Function checkForWin checks if player wins
const checkForWin = () => {
  
  // returns true if stack b or stack c has all 4 pieces. Returns false else
  if (stacks.b.length === 4 || stacks.c.length === 4) {
    console.log('You win!');
    return true;
  }
  else
    return false;

}

// Function towersOfHanoi is called in getPrompt to began game play
const towersOfHanoi = (startStack, endStack) => {
  
  // movePiece function and checkForWin functions are triggered if isLegal function returns true
  if(isLegal(startStack, endStack)) {

  movePiece(startStack, endStack);

  checkForWin(stacks);
  }
}

const getPrompt = () => {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });

  describe('#isLegal()', () => {
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
  });
  describe('#checkForWin()', () => {
    it('should detect a win', () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });

} else {

  getPrompt();

}
