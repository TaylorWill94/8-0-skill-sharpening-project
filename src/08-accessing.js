/*
  For all of the functions below, assume each function takes the following `person` object as its input. While the values of the object may change, the structure of it will always be the same.
*/
const person = {
  names: {
    first: "Rachel",
    middle: "Eleanor",
    last: "Rojas",
  },
  address: {
    street: "697 Pine Drive",
    unit: "2A",
    city: "Staten Island",
    state: "NY",
    zip: "10306",
  },
  numbers: [7185550921, 7185558611],
};

/**
 * getFirstName()
 * ---------------------
 * Return the `first` name of the inputted person.
 * @param {Object} person
 * @returns {string}
 *
 * EXAMPLE:
 *  getFirstName(person);
 *  //> "Rachel"
 */
function getFirstName(person) {
  // This function returns the first name of the inputted person
  // return first name
  return person.names.first;
}

/**
 * getLastName()
 * ---------------------
 * Return the `last` name of the inputted person.
 * @param {Object} person
 * @returns {string}
 *
 * EXAMPLE:
 *  getLastName(person);
 *  //> "Rojas"
 */
function getLastName(person) {
  // This function returns the last name of the person
  // return last name
  return person.names.last;
}

/**
 * getAddressStreet()
 * ---------------------
 * Return the `street` of the inputted person's `address`.
 * @param {Object} person
 * @returns {string}
 *
 * EXAMPLE:
 *  getAddressStreet(person);
 *  //> "697 Pine Drive"
 */
function getAddressStreet(person) {
  // This function returns the street of the person's address
  // return street
  return person.address.street;
}

/**
 * getCountOfPhoneNumbers()
 * ---------------------
 * Return a count of how many phone `numbers` the person has.
 * @param {Object} person
 * @returns {number}
 *
 * EXAMPLE:
 *  getCountOfPhoneNumbers(person);
 *  //> 2
 */
function getCountOfPhoneNumbers(person) {
  return person.numbers.length;
}

/**
 * getFirstPhoneNumber()
 * ---------------------
 * Return the first phone number associated with the person.
 *
 * NOTE: There will always be at least one phone number.
 *
 * @param {Object} person
 * @returns {number}
 *
 * EXAMPLE:
 *  getFirstPhoneNumber(person);
 *  //> 7185550921
 */
function getFirstPhoneNumber(person) {
  // This function returns the first phone number
  // return first phone number
  return person.numbers[0];
}

/**
 * getLastPhoneNumber()
 * ---------------------
 * Return the first phone number associated with the person.
 *
 * NOTE: There will always be at least one phone number.
 *
 * @param {Object} person
 * @returns {number}
 *
 * EXAMPLE:
 *  getLastPhoneNumber(person);
 *  //> 7185558611
 */
function getLastPhoneNumber(person) {
  // This function gets last phone number
  // return the last number
  return person.numbers.pop();
}

/**
 * getFullName()
 * ---------------------
 * Combine the `first`, `middle`, and `last` names to return the full name.
 * @param {Object} person
 * @returns {string}
 *
 * EXAMPLE:
 *  getFullName(person);
 *  //> "Rachel Eleanor Rojas"
 */
function getFullName(person) {
  // This function returns the first, middle and last name.
  let firstName = person.names.first;
  let middleName = person.names.middle;
  let lastName = person.names.last;

  // Return these names as a string
  return firstName + " " + middleName + " " + lastName;
}

/**
 * getCityAndState()
 * ---------------------
 * Combine the `city` and `state` of the person's `address`.
 *
 * NOTE: Pay attention to the formatting below.
 *
 * @param {Object} person
 * @returns {string}
 *
 * EXAMPLE:
 *  getCityAndState(person);
 *  //> "Staten Island, NY"
 */
function getCityAndState(person) {
  // This function combines the city and state of the person's address
  // Declare a variable that holds the city
  // Declare a variable that holds the state
  let city = person.address.city;
  let state = person.address.state;

  // return both the city and state
  return city + "," + " " + state;
}

/**
 * getFullAddress()
 * ---------------------
 * Combine all of the `address` fields to create a full address for the person.
 *
 * NOTE: Pay attention to the formatting below.
 *
 * @param {Object} person
 * @returns {string}
 *
 * EXAMPLE:
 *  getFullAddress(person);
 *  //> "697 Pine Drive 2A, Staten Island, NY, 10306"
 */
function getFullAddress(person) {
  // This function combines all address fields to create a full address
  // Declare variable that hold each part of the address
  let unit = person.address.unit;
  let street = person.address.street;
  let city = person.address.city;
  let state = person.address.state;
  let zipcode = person.address.zip;

  // return variables
  return (
    street +
    " " +
    unit +
    "," +
    " " +
    city +
    "," +
    " " +
    state +
    "," +
    " " +
    zipcode
  );
}

/**
 * getFlatObject()
 * ---------------------
 * Create a new object where all of the keys from the `names` and `address` objects are in the same object. You may leave the `numbers` array as is.
 * @param {Object} person 
 * @returns {Object}
 * 
 * EXAMPLE:
 *  getFlatObject(person);
 *  //> {
      first: "Rachel",
      middle: "Eleanor",
      last: "Rojas",
      street: "697 Pine Drive",
      unit: "2A",
      city: "Staten Island",
      state: "NY",
      zip: "10306",
      numbers: [7185550921, 7185558611],
    };
 */
function getFlatObject(person) {
  let newObj = {};
  let sameKeys = Object.assign(person.names);
  let sameAdd = Object.assign(person.address);
  let sameNum = [person.numbers];

  newObj = {
    ...sameKeys,
    ...sameAdd,
  };

  newObj["numbers"] = person.numbers;

  return newObj;
}

// Do not change the code below.
module.exports = {
  getFirstName,
  getLastName,
  getAddressStreet,
  getCountOfPhoneNumbers,
  getFirstPhoneNumber,
  getLastPhoneNumber,
  getFullName,
  getCityAndState,
  getFullAddress,
  getFlatObject,
};
