/**
 * createEmptyArray()
 * ---------------------
 * Returns an empty array.
 * Make sure you return a different empty array each time the function is called.
 * You can do this by returning an empty array that is created INSIDE the function (not outside it).
 * @returns {*[]}
 *
 * EXAMPLE:
 *  createEmptyArray();
 *  //> []
 */
function createEmptyArray() {
  // Declare a variable that has an empty array
  let emptyArr = [];
  // Return that variable
  return emptyArr;
}

/**
 * createArrayWithTwoElements()
 * ---------------------
 * Creates and returns an array where the first element is `a` and the second element is `b`.
 * @param {*} a
 * @param {*} b
 * @returns {*[]}
 *
 * EXAMPLE:
 *  createArrayWithTwoElements(true, false);
 *  //> [ true, false ]
 */
function createArrayWithTwoElements(a, b) {
  // Declare a variable that holds an empty array
  let newArr = [];
  // Push a, b into the new array
  newArr.push(a, b);
  // Return that variable
  return newArr;
}

/**
 * getArrayLength()
 * ---------------------
 * Returns the length of the array
 * @param {*[]} array
 * @returns {number}
 *
 * EXAMPLE:
 *  getArrayLength([ 10, 20, 30 ]);
 *  //> 3
 */
function getArrayLength(array) {
  // return length of an array
  return array.length;
}

/**
 * getFirstElementOfArray()
 * ---------------------
 * Returns the first element of the array.
 * HINT: How is this similar to getFirstAndLastCharacter() in part 1?
 * @param {*[]} array
 * @returns {*}
 *
 * EXAMPLE:
 *  getFirstElementOfArray([ 10, 20, 30 ]);
 *  //> 10
 */
function getFirstElementOfArray(array) {
  // Return first elemnent of the array
  let firstElement = array[0];
  return firstElement;
}

/**
 * getLastElementOfArray()
 * ---------------------
 * Returns the last element of the array.
 * HINT: How is this similar to getFirstAndLastCharacter() in part 1?
 * @param {*[]} array
 * @returns {*}
 *
 * EXAMPLE:
 *  getLastElementOfArray([ null, undefined ]);
 *  //> undefined
 */
function getLastElementOfArray(array) {
  // return last elemnet of an array
  let lastElement = array[array.length - 1];
  return lastElement;
}

/**
 * addElementToEndOfArray()
 * ---------------------
 * Adds an `element` to the end of the inputted `array`. Then, returns the array.
 * @param {*[]} array
 * @param {*} element
 * @returns {*[]}
 *
 * EXAMPLE:
 *  addElementToEndOfArray([ 10 ], 9);
 *  //> [ 10, 9 ]
 */
function addElementToEndOfArray(array, element) {
  array.push(element);
  return array;
}

/**
 * removeElementFromEndOfArray()
 * ---------------------
 * Removes the last element of the inputted `array`. Then, returns the removed element.
 * @param {*[]} array
 * @returns {*[]}
 *
 * EXAMPLE:
 *  removeElementFromEndOfArray([ 10, 9, 8 ]);
 *  //> 8
 */
function removeElementFromEndOfArray(array) {
  let removedElement = array.pop();
  return removedElement;
}

/**
 * addElementToFrontOfArray()
 * ---------------------
 * Adds an `element` to the front of the inputted `array`. Then, returns the array.
 * @param {*[]} array
 * @param {*} element
 * @returns {*[]}
 *
 * EXAMPLE:
 *  addElementToFrontOfArray([ 10 ], 9);
 *  //> [ 9, 10 ]
 */
function addElementToFrontOfArray(array, element) {
  array.unshift(element);
  return array;
}

/**
 * removeElementFromFrontOfArray()
 * ---------------------
 * Removes the first element of the inputted `array`. Then, returns the removed element.
 * @param {*[]} array
 * @returns {*[]}
 *
 * EXAMPLE:
 *  removeElementFromFrontOfArray([ 10, 9, 8 ]);
 *  //> 10
 */
function removeElementFromFrontOfArray(array) {
  let removedElement = array.shift();
  return removedElement;
}

/**
 * getMiddleElement()
 * ---------------------
 * Returns the element in the middle of the array.
 *
 * NOTE: Inputted arrays will always be of odd length.
 *
 * @param {*[]} array
 * @returns {*}
 *
 * EXAMPLE:
 *  getMiddleElement([ 10, null, "30" ]);
 *  //> null
 */
function getMiddleElement(array) {
  // Grab element of middle of array
  // Declare a variable to get the element in the middle of the array
  //let middleElement = array.
  // return that element
  array[Math.floor(array.length / 2)];
  let middleElement = array[(array.length / 2) | 0];

  return middleElement;
}

// Do not change any code below this line.
module.exports = {
  createEmptyArray,
  createArrayWithTwoElements,
  getArrayLength,
  getFirstElementOfArray,
  getLastElementOfArray,
  addElementToEndOfArray,
  removeElementFromEndOfArray,
  addElementToFrontOfArray,
  removeElementFromFrontOfArray,
  getMiddleElement,
};
