/**
 * rangeSum()
 * ---------------------
 * Takes in range (inclusive) and returns the sum of all numbers in that range.
 * @param {number} min
 * @param {number} max
 * @returns {number}
 *
 * EXAMPLE:
 *  rangeSum(3, 7);
 *  //> 25
 *  (3 + 4 + 5 + 6 + 7 = 25)
 */
function rangeSum(min, max) {
  // This function takes in a range of numbers
  // returns the sum of all numbers
  // Declare a variable an assign it to 0
  let totalSum = 0;
  // Create a loop that takes in a range of numbers
  for (let i = min; i <= max; i++) {
    totalSum = totalSum + i;
  }
  return totalSum;
}

/**
 * rangeOdd()
 * ---------------------
 * Takes in range (inclusive) and returns an array in decreasing order of only the odd numbers in that range.
 * @param {number} min
 * @param {number} max
 * @returns {number[]}
 *
 * EXAMPLE:
 *  rangeOdd(10, 15);
 *  //> [ 15, 13, 11 ]
 */
function rangeOdd(min, max) {
  // This function takes in a range of numbers and decreases only the odd numbers
  // Declare an empty array
  let numArr = [];
  // Create a for loop that decreases the odd numbers in the range
  for (let i = min; i <= max; i++) {
    // create an if statement to filter out the odd numbers
    if (i % 2 == !0) {
      numArr.unshift(i);
    }
  }
  // return that array
  return numArr;
}

/**
 * rangeEveryOther()
 * ---------------------
 * Takes in range (inclusive) and returns an array in increasing order of only every other element. Start by including the first number.
 * @param {number} min
 * @param {number} max
 * @returns {number[]}
 *
 * EXAMPLE:
 *  rangeEveryOther(11, 18);
 *  //> [ 11, 13, 15, 17 ]
 */
function rangeEveryOther(min, max) {
  // Declare an empty array
  let emptyArr = [];
  // Createa a for loop that hits every element
  for (let i = min; i <= max; i += 2) {
    emptyArr.push(i);
  }
  return emptyArr;
}

/**
 * containsWhileLoop()
 * ---------------------
 * Returns whether or not the `target` value exists in the array.
 *
 * NOTE: Must be written with a `while` loop.
 *
 * NOTE: Must NOT contain the `.includes()` method.
 *
 * @param {*[]} array
 * @param {number|string} target
 * @returns {boolean}
 *
 * EXAMPLE:
 *  containsWhileLoop([ 5, 2, 4 ], 4);
 *  //> true
 *
 *  containsWhileLoop([ "left", "up", "right" ], "down");
 *  //> false
 */
function containsWhileLoop(array, target) {
  // Checks to see if a specific target is in the array
  // Declare a vriable that holds a boolean;
  let targetFound = false;
  let counter = 0;
  // Create a while loop
  while (!targetFound && counter < 1) {
    if (array.indexOf(target) !== -1) {
      targetFound = true;
    }
    counter++;
  }
  // return boolean
  return targetFound;
}

/**
 * containsForLoop()
 * ---------------------
 * Returns whether or not the `target` value exists in the array.
 *
 * NOTE: Must be written with a `for` loop.
 *
 * NOTE: Must NOT contain the `.includes()` method.
 *
 * @param {*[]} array
 * @param {number|string} target
 * @returns {boolean}
 *
 * EXAMPLE:
 *  containsForLoop([ 5, 2, 4 ], 4);
 *  //> true
 *
 *  containsForLoop([ "left", "up", "right" ], "down");
 *  //> false
 */
function containsForLoop(array, target) {
  // This function finds whether the target exists
  // Declare a variable that holds a boolean
  let hitTarget = false;
  // Create a for loop that loops through the array
  for (let i = 0; i < array.length; i++) {
    if (target === array[i]) {
      hitTarget = true;
    }
  }
  return hitTarget;
}

//containsForLoop([5, 2, 4], 4);

/**
 * targetCount()
 * ---------------------
 * Returns how many times the `target` occurs in the array.
 * @param {*[]} array
 * @param {number|string} target
 * @returns {number}
 *
 * EXAMPLE:
 *  targetCount([ 10, 20, 10, 20, 30 ], 10);
 *  //> 2
 */
function targetCount(array, target) {
  // This function determines how many times the `target` occurs in the array
  // Declare a variable that holds a number
  let targetTimes = 0;
  // Create a for loop that loops through the array
  for (let i = 0; i < array.length; i++) {
    // Create an if statement to determine whether target occurs multiple tines
    if (target === array[i]) {
      targetTimes++;
    }
  }
  return targetTimes;
}

/**
 * firstIndexFound()
 * ---------------------
 * Returns the first index that the `target` is found at in the array. If the `target` is not found, it should return `-1`.
 *
 * NOTE: You may NOT use the `.indexOf()` method.
 *
 * @param {*[]} array
 * @param {number|string} target
 * @returns {number}
 *
 * EXAMPLE:
 *  firstIndexFound([ "left", "right", "left" ], "left");
 *  //> 0
 *
 *  firstIndexFound([ "left", "right", "left" ], "up");
 *  //> -1
 */
function firstIndexFound(array, target) {
  // This function returns the first index `target` is found at in the array. If 'target' not FOUND - return -1
  // Declare a variable and assign it to a number
  let targetIndexFound = -1;
  // Create a loop that loops through the array
  for (let i = 0; i < array.length; i++) {
    // Create an if statement that determins whether the target was found at a certain index
    if (target === array[i]) {
      return i;
    }
  }
  return targetIndexFound;
}

/**
 * lastIndexFound()
 * ---------------------
 * Returns the last index that the `target` is found at in the array. If the `target` is not found, it should return `-1`.
 *
 * NOTE: You may NOT use the `.indexOf()` method.
 *
 * @param {*[]} array
 * @param {number|string} target
 * @returns {number}
 *
 * EXAMPLE:
 *  lastIndexFound([ "left", "right", "left" ], "left");
 *  //> 2
 *
 *  lastIndexFound([ "left", "right", "left" ], "up");
 *  //> -1
 */
function lastIndexFound(array, target) {
  // This function returns the last index that the 'target' is found in the array. If not found, RETURN -1
  // Declare a variable that holds -1
  let lastIndexFound = -1;
  // Create a for loop that loops through the array
  for (let i = 0; i < array.length; i++) {
    // Create an if statement to grab the last index that the `target` is found
    if (target === array[i]) {
      lastIndexFound = i;
    }
  }
  return lastIndexFound;
}

/**
 * timesIndex()
 * ---------------------
 * Returns a new array where each element has been multiplied by its index.
 * @param {number[]} elements
 * @returns {number[]}
 *
 * EXAMPLE:
 *  timesIndex([ 7, 10, 11 ]);
 *  //> [ 7 * 0, 10 * 1, 11 * 2 ]
 *  //> [ 0, 10, 22 ]
 */
function timesIndex(array) {
  // This function returns a new array
  // Each element has been * by its index
  // Declare a variable that holds an empty array
  let newArray = [];
  // Create a for loop that goes through each element in the array
  for (let i = 0; i < array.length; i++) {
    let sum = i * array[i];
    newArray.push(sum);
  }
  return newArray;
}

/**
 * cumulativeSum()
 * ---------------------
 * Returns a new array where each element is the cumulative sum in the array, up until that point.
 * @param {number[]} array
 * @returns {number[]}
 *
 * EXAMPLE:
 *  cumulativeSum([ 5, 2, 9 ]);
 *  //> [ 5, 5 + 2, 5 + 2 + 9 ]
 *  //> [ 5, 7, 16 ]
 */
function cumulativeSum(array) {
  // This function returns a NEW array where each elmenet is the cumulative sum iin the array, up until that ELEMENT
  // Declare a variable that holds an empty array
  let arrayNew = [];
  let arrSum = 0;
  // Create a for loop that loops through each element in the array
  for (let i = 0; i < array.length; i++) {
    arrSum += array[i];
    arrayNew.push(arrSum);
  }
  return arrayNew;
}

// Do not change anything below this line.
module.exports = {
  rangeSum,
  rangeOdd,
  rangeEveryOther,
  containsWhileLoop,
  containsForLoop,
  targetCount,
  firstIndexFound,
  lastIndexFound,
  timesIndex,
  cumulativeSum,
};
