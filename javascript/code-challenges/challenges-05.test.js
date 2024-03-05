'use strict';

/* ------------------------------------------------------------------------------------------------
CHALLENGE 1 - Review

Write a function that finds the maximum value in an array.

E.g. [4,2,7,5,9,2] -> 9
------------------------------------------------------------------------------------------------ */
const maxInArray = (arr) => {
  if (arr.length === 0) {
    return undefined; // Return undefined for an empty array
  }

  let max = arr[0]; // Assume the first element is the maximum
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]; // Update max if a larger element is found
    }
  }
  return max; // Return the maximum value
};

// Test the function
const array = [4, 2, 7, 5, 9, 2];
console.log(maxInArray(array)); // Output: 9


/* ------------------------------------------------------------------------------------------------
CHALLENGE 2

Write a function named getCourseKeys that takes in the courseInfo object and returns an array containing the keys for the courseInfo object.

For example: (['name', 'duration', 'topics', 'finalExam']).
------------------------------------------------------------------------------------------------ */
const courseInfo = {
  name: 'Code 301',
  duration: { dayTrack: '4 weeks', eveningTrack: '8 weeks'},
  topics: ['SMACSS', 'APIs', 'NodeJS', 'SQL', 'jQuery', 'functional programming'],
  finalExam: true
};

const getCourseKeys = (obj) => {
  return Object.keys(obj); // Using Object.keys() to get the keys of the object
};

// Test the function
console.log(getCourseKeys(courseInfo));


/* ------------------------------------------------------------------------------------------------
CHALLENGE 3

Write a function named checkValues that takes in an object and a value and returns true if the value is in the object.


------------------------------------------------------------------------------------------------ */

const checkValues = (obj, value) => { // Loop through each key in the object
  for (let key in obj) {
  // Check if the current value is equal to the target value
    if (obj[key] === value) {
      return true; // Return true if the value is found
    }
  }
  return false; // Return false if the value is not found
};

// Test the function
const obj = { a: 1, b: 2, c: 3 };
console.log(checkValues(obj, 2)); // Output: true
console.log(checkValues(obj, 4)); // Output: false


/* ------------------------------------------------------------------------------------------------
CHALLENGE 4

You are given an object with names and their coresponding phone numbers that looks like this:
{
  'Grace Hopper': '222-303-5938',
  'Ada Lovelace': '222-349-9842',
  'Alan Turing': '222-853-5933'
}

HR has asked you to change the data to make it easier to print so that it looks like this:
[
  'Grace Hopper: 222-303-5938',
  'Ada Lovelace: 222-349-9842',
  'Alan Turing: 222-853-5933'
]

------------------------------------------------------------------------------------------------ */

const updateNumbers = (obj) => {
  const result = [];
  for (let name in obj) {
    result.push(`${name}: ${obj[name]}`);
  }
  return result;
};

// Test the function
const phoneNumbers = {
  'Grace Hopper': '222-303-5938',
  'Ada Lovelace': '222-349-9842',
  'Alan Turing': '222-853-5933'
};

console.log(updateNumbers(phoneNumbers));




/* ------------------------------------------------------------------------------------------------
CHALLENGE 5

Write a function named getHouses that returns a new array containing the names of all of the houses in the data set.
------------------------------------------------------------------------------------------------ */

const characters = [
  {
    name: 'Eddard',
    spouse: 'Catelyn',
    children: ['Robb', 'Sansa', 'Arya', 'Bran', 'Rickon'],
    house: 'Stark',
  },
  {
    name: 'Jon',
    spouse: 'Lysa',
    children: ['Robin'],
    house: 'Arryn',
  },
  {
    name: 'Cersei',
    spouse: 'Robert',
    children: ['Joffrey', 'Myrcella', 'Tommen'],
    house: 'Lannister',
  },
  {
    name: 'Daenarys',
    spouse: 'Khal Drogo',
    children: ['Drogon', 'Rhaegal', 'Viserion'],
    house: 'Targaryen',
  },
  {
    name: 'Mace',
    spouse: 'Alerie',
    children: ['Margaery', 'Loras'],
    house: 'Tyrell',
  },
  {
    name: 'Robert',
    spouse: 'Cersei',
    house: 'Baratheon',
  },
  {
    name: 'Jon',
    spouse: null,
    house: 'Snow',
  },
];

const getHouses = (arr) => {
  let houses = [];
  arr.forEach(character => {
    if (!houses.includes(character.house)) {
      houses.push(character.house);
    }
  });
  return houses;
};

// Test the function
console.log(getHouses(characters));


/*------------------------------------------------------------------------------------------------
CHALLENGE 6

Write a function named hasChildrenValues that uses Object.values to determine if any given character in the data set has children.

This function should take in an array of data and a character name and return a Boolean.

For example:
hasChildrenValues(characters, 'Cersei') will return true
hasChildrenValues(characters, 'Sansa') will return false
------------------------------------------------------------------------------------------------ */

const hasChildrenValues = (arr, character) => {
  const targetCharacter = arr.find(char => char.name === character);
  if (!targetCharacter) return false; // Character not found in the array

  return Object.values(targetCharacter).includes('children');
};

// Test the function
console.log(hasChildrenValues(characters, 'Cersei')); // Output: true
console.log(hasChildrenValues(characters, 'Sansa')); // Output: false


/* ------------------------------------------------------------------------------------------------
CHALLENGE 7 - Stretch Goal

Write a function named hasChildrenEntries that is similar to your hasChildrenValues function from challenge 4, but uses the data's entries instead of its values.

The input and output of this function are the same as the input and output from challenge 3.
------------------------------------------------------------------------------------------------ */

const hasChildrenEntries = (arr, character) => {
  for (const obj of arr) {
    for (const [key, value] of Object.entries(obj)) {
      if (value === character) {
        return true;
      }
    }
  }
  return false;
};


/* ------------------------------------------------------------------------------------------------
CHALLENGE 8 - Stretch Goal

Write a function named totalCharacters that takes in an array and returns the number of characters in the array.
------------------------------------------------------------------------------------------------ */

const totalCharacters = (arr) => {
  let total = 0;
  for (const element of arr) {
    total += String(element).length;
  }
  return total;
};


/* ------------------------------------------------------------------------------------------------
CHALLENGE 9 - Stretch Goal

Write a function named houseSize that takes in the array of characters and creates an object for each house containing the name of the house and the number of members.

All of these objects should be added to an array named "sizes". Return the "sizes" array from the function.

For example: [{ house: 'Stark', members: 7 }, { house: 'Arryn', members: 3 }, ... ].
------------------------------------------------------------------------------------------------ */

const houseSize = (arr) => {
  const sizes = [];

  // Create an object to store the count of members for each house
  const houseCounts = {};

  // Count the number of members for each house
  for (const character of arr) {
    const house = character.house;
    houseCounts[house] = (houseCounts[house] || 0) + 1;
  }

  // Create an object for each house containing the name of the house and the number of members
  for (const house in houseCounts) {
    sizes.push({ house: house, members: houseCounts[house] });
  }

  return sizes;
};


/* ------------------------------------------------------------------------------------------------
CHALLENGE 10 - Stretch Goal

As fans are well aware, "When you play the game of thrones, you win or you die. There is no middle ground."

We will assume that Alerie Tyrell is deceased. She missed her daughter's wedding. Twice.

Write a function named houseSurvivors. You may modify your houseSize function from challenge 6 to use as the basis of this function.

This function should create an object for each house containing the name of the house and the number of members. If the spouse is deceased, do not include him/her in the total number of family members.

All of these objects should be added to an array named "survivors". Return the "survivors" array from the function.

For example: [ { house: 'Stark', members: 6 }, { house: 'Arryn', members: 2 }, ... ].
------------------------------------------------------------------------------------------------ */

const deceasedSpouses = ['Catelyn', 'Lysa', 'Robert', 'Khal Drogo', 'Alerie'];

const houseSurvivors = (arr) => {
  const survivors = [];

  // Create an object to store the count of members for each house
  const houseCounts = {};

  // Count the number of members for each house, excluding deceased spouses
  for (const character of arr) {
    const house = character.house;
    const spouse = character.spouse;

    if (!deceasedSpouses.includes(spouse)) {
      houseCounts[house] = (houseCounts[house] || 0) + 1;



/* ------------------------------------------------------------------------------------------------
TESTS

All the code below will verify that your functions are working to solve the challenges.

DO NOT CHANGE any of the below code.

Run your tests from the console: jest challenges-06.test.js

------------------------------------------------------------------------------------------------ */

describe('Testing challenge 1', () => {
  test('It should return the maximum number found', () => {
    expect(maxInArray([4, 2, 7, 5, 9, 2])).toStrictEqual(9);
  });
  test('It should handle negatives and return the maximum number found', () => {
    expect(maxInArray([4, -2, -7, 5, -9, 2])).toStrictEqual(5);
  });
});

describe('Testing challenge 2', () => {
  test('It should return the keys from an object', () => {
    expect(getCourseKeys(courseInfo)).toStrictEqual(['name', 'duration', 'topics', 'finalExam']);
  });
});

describe('Testing challenge 3', () => {
  test('It should return true if the value is in the object', () => {
    expect(checkValues({ class: '301' }, '301')).toBe(true);
  });

  test('It should return false if the value is not in the object', () => {
    expect(checkValues({ class: '301' }, '401')).toBe(false);
  });
});

describe('Testing challenge 4', () => {
  test('It should return an an array of names and numbers', () => {
    const startingObj = {
      'Grace Hopper': '222-303-5938',
      'Ada Lovelace': '222-349-9842',
      'Alan Turing': '222-853-5933'
    };

    expect(updateNumbers(startingObj).includes('Grace Hopper: 222-303-5938')).toBe(true);
  });
});

describe('Testing challenge 5', () => {
  test('It should return an array of the names of the houses', () => {
    expect(getHouses(characters)[0]).toStrictEqual('Stark');
    expect(getHouses(characters).length).toStrictEqual(7);
  });
});


describe('Testing challenge 6', () => {
  test('It should return true for characters that have children', () => {
    expect(hasChildrenValues(characters, 'Daenarys')).toBeTruthy();
  });

  test('It should return false to characters who do not have children', () => {
    expect(hasChildrenValues(characters, 'Sansa')).toBeFalsy();
  });
});

describe('Testing challenge 7', () => {
  test('It should return true for characters that have children', () => {
    expect(hasChildrenEntries(characters, 'Eddard')).toBeTruthy();
  });

  test('It should return false to characters who do not have children', () => {
    expect(hasChildrenEntries(characters, 'Jon S.')).toBeFalsy();
  });
});

describe('Testing challenge 8', () => {
  test('It should return the number of characters in the array', () => {
    expect(totalCharacters(characters)).toStrictEqual(27);
  });
});

describe('Testing challenge 9', () => {
  test('It should return an object for each house containing the name and size', () => {
    expect(houseSize(characters)[1]).toStrictEqual({ house: 'Arryn', members: 3 });
    expect(houseSize(characters).length).toStrictEqual(7);
  });
});

describe('Testing challenge 10', () => {
  test('It should not include any deceased spouses', () => {
    expect(houseSurvivors(characters)[2]).toStrictEqual({ house: 'Lannister', members: 4 });
  });
});
