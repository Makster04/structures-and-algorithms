'use strict';

/* ------------------------------------------------------------------------------------------------
CHALLENGE 1 - Review

Write a function that iterates over an array of people objects
and creates a new list of each person's full name using the array method 'map'.
Each object will have the shape {firstName:string, lastName:string}
E.g. [ { firstName:"Jane", lastName:"Doe" }, { firstName:"James", lastName:"Bond"}]
should convert to ["Jane Doe", "James Bond"]
Note the space in between first and last names.
You can assume that neither firstName nor lastName will be blank
------------------------------------------------------------------------------------------------ */
const toLastNames = people => {
  return people.map(person => `${person.firstName} ${person.lastName}`);
};

// Example usage:
const people = [
  { firstName: "Jane", lastName: "Doe" },
  { firstName: "James", lastName: "Bond" }
];

console.log(toLastNames(people)); // Output: ["Jane Doe", "James Bond"]

/* ------------------------------------------------------------------------------------------------
CHALLENGE 2

Write a function named addValues that, given an array of numbers as input, uses reduce to add the values in the array.

------------------------------------------------------------------------------------------------ */

const addValues = arr => {
  return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
};

// Example usage:
const numbers = [1, 2, 3, 4, 5];

console.log(addValues(numbers)); // Output: 15 (1 + 2 + 3 + 4 + 5 = 15)


/* ------------------------------------------------------------------------------------------------
CHALLENGE 3

Write a function named addPurchases that, given an array of objects as input, uses reduce to find the total amount purchased. Each object contains the keys `item` and `purchasePrice` like the example.

{
  item: 'switch'
  purchasePrice: 399
}

------------------------------------------------------------------------------------------------ */

const addPurchases = arr => {
  return arr.reduce((total, purchase) => total + purchase.purchasePrice, 0);
};

// Example usage:
const purchases = [
  { item: 'switch', purchasePrice: 399 },
  { item: 'headphones', purchasePrice: 99 },
  { item: 'keyboard', purchasePrice: 49 }
];

console.log(addPurchases(purchases)); // Output: 547 (399 + 99 + 49 = 547)


/* ------------------------------------------------------------------------------------------------
CHALLENGE 4

Write a function named countNumberOfElements that, given an array as input, uses reduce to count the number of elements in the array.

Note: You may not use the array's built-in length property.
------------------------------------------------------------------------------------------------ */

const countNumberOfElements = arr => {
  return arr.reduce((count, _) => count + 1, 0);
};

// Example usage:
const array = [1, 2, 3, 4, 5];

console.log(countNumberOfElements(array)); // Output: 5 (There are 5 elements in the array)


/* ------------------------------------------------------------------------------------------------
CHALLENGE 5

Write a function named returnNames that, given the Star Wars data, below, uses reduce to return an array containing the names of the characters.
------------------------------------------------------------------------------------------------ */

let starWarsData = [{
  name: 'Luke Skywalker',
  height: '172',
  mass: '77',
  hair_color: 'blond',
  skin_color: 'fair',
  eye_color: 'blue',
  birth_year: '19BBY',
  gender: 'male',
},
{
  name: 'C-3PO',
  height: '167',
  mass: '75',
  hair_color: 'n/a',
  skin_color: 'gold',
  eye_color: 'yellow',
  birth_year: '112BBY',
  gender: 'n/a'},
{
  name: 'R2-D2',
  height: '96',
  mass: '32',
  hair_color: 'n/a',
  skin_color: 'white, blue',
  eye_color: 'red',
  birth_year: '33BBY',
  gender: 'n/a'
},
{
  name: 'Darth Vader',
  height: '202',
  mass: '136',
  hair_color: 'none',
  skin_color: 'white',
  eye_color: 'yellow',
  birth_year: '41.9BBY',
  gender: 'male'
},
{
  name: 'Leia Organa',
  height: '150',
  mass: '49',
  hair_color: 'brown',
  skin_color: 'light',
  eye_color: 'brown',
  birth_year: '19BBY',
  gender: 'female'
}];

const returnNames = arr => {
  return arr.reduce((names, character) => {
    names.push(character.name);
    return names;
  }, []);
};

// Example usage:
console.log(returnNames(starWarsData));


/* ------------------------------------------------------------------------------------------------
CHALLENGE 6

Write a function named reversedString that takes in a string and returns a string with the letters in reverse order.

Note: You must use reduce for this challenge. You may not use the built-in .reverse() string method.
------------------------------------------------------------------------------------------------ */

const reversedString = str => {
  return str.split('').reduce((reversed, char) => char + reversed, '');
};

// Example usage:
console.log(reversedString('hello')); // Output: 'olleh'


/* ------------------------------------------------------------------------------------------------
CHALLENGE 7 - Stretch Goal

Write a function named countNumberOfChildren that, given the array of characters, below, uses reduce to return the total number of children in the data set.
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
    name: 'Sansa',
    spouse: 'Tyrion',
    house: 'Stark',
  },
  {
    name: 'Jon',
    spouse: null,
    house: 'Snow',
  },
];

const countNumberOfChildren = arr => {
  return arr.reduce((totalChildren, character) => {
    if (character.children) {
      return totalChildren + character.children.length;
    } else {
      return totalChildren;
    }
  }, 0);
};

// Example usage:
console.log(countNumberOfChildren(characters)); // Output: 18 (Total number of children in the dataset)


/* ------------------------------------------------------------------------------------------------
CHALLENGE 8 - Stretch Goal

Write a function that, given an array of numbers as input, uses reduce to calculate the array's average value.

Hint: The accumulator should begin as { count: 0, sum: 0 }
------------------------------------------------------------------------------------------------ */

const calculateAverage = arr => {
  const initialValue = { count: 0, sum: 0 };
  const { count, sum } = arr.reduce((accumulator, currentValue) => {
    return {
      count: accumulator.count + 1,
      sum: accumulator.sum + currentValue
    };
  }, initialValue);

  return sum / count;
};

// Example usage:
const numbers = [1, 2, 3, 4, 5];
console.log(calculateAverage(numbers)); // Output: 3 (Average of 1, 2, 3, 4, 5 is 3)


/* ------------------------------------------------------------------------------------------------
CHALLENGE 9 - Stretch Goal

Write a function named countPrimeNumbers that, given an array elements as input, uses reduce to count the number of elements that are prime numbers.

You are welcome to use the provided isPrime function.
------------------------------------------------------------------------------------------------ */

const isPrime = (value) => {
  for (let i = 2; i < value; i++) {
    if (value % i === 0) {
      return false;
    }
  }
  return value > 1;
};

const countPrimeNumbers = arr => {
  return arr.reduce((count, element) => {
    if (isPrime(element)) {
      return count + 1;
    } else {
      return count;
    }
  }, 0);
};

// Example usage:
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(countPrimeNumbers(numbers)); // Output: 4 (Prime numbers in the array: 2, 3, 5, 7)


/* ------------------------------------------------------------------------------------------------
CHALLENGE 10 - Stretch Goal

Write a function named extractStats that, given the snorlaxData below, uses reduce to build an object that holds the 'name' and 'baseStat' of each stat, where the key is the 'name', and the value is 'baseStat'. Return the object.

------------------------------------------------------------------------------------------------ */

const snorlaxData = {
  stats: [
    {
      stat: {
        url: 'https://pokeapi.co/api/v2/stat/6/',
        name: 'speed',
      },
      effort: 5,
      baseStat: 30,
    },
    {
      stat: {
        url: 'https://pokeapi.co/api/v2/stat/5/',
        name: 'special-defense',
      },
      effort: 2,
      baseStat: 110,
    },
    {
      stat: {
        url: 'https://pokeapi.co/api/v2/stat/4/',
        name: 'special-attack',
      },
      effort: 9,
      baseStat: 65,
    },
  ],
  name: 'snorlax',
  weight: 4600,
};

const extractStats = snorlaxData => {
  return snorlaxData.stats.reduce((statsObject, stat) => {
    statsObject[stat.stat.name] = stat.baseStat;
    return statsObject;
  }, {});
};

// Example usage:
console.log(extractStats(snorlaxData));


/* ------------------------------------------------------------------------------------------------
CHALLENGE 11 - Stretch Goal

Write a function named extractChildren that, given the array of characters from challenge 4, accomplishes the following:

1) Uses filter to return an array of the characters that contain the letter 'a' in their name

2) Then, uses reduce to return an array of all the children's names in the filtered array
------------------------------------------------------------------------------------------------ */

const extractChildren = arr => {
  const filteredCharacters = arr.filter(character => character.name.toLowerCase().includes('a'));
  return filteredCharacters.reduce((childrenNames, character) => {
    if (character.children) {
      childrenNames.push(...character.children);
    }
    return childrenNames;
  }, []);
};

// Example usage:
console.log(extractChildren(characters)); // Output: ['Robin', 'Arya', 'Bran', 'Rickon']

/* ------------------------------------------------------------------------------------------------
TESTS

All the code below will verify that your functions are working to solve the challenges.

DO NOT CHANGE any of the below code.

Run your tests from the console: jest challenges-09.test.js
------------------------------------------------------------------------------------------------ */

describe('Testing challenge 1', () => {
  test('It should convert object to full name string', () => {

    const people = [{ firstName: 'Jane', lastName: 'Doe' }, { firstName: 'James', lastName: 'Bond' }];

    expect(toLastNames(people)).toStrictEqual(['Jane Doe', 'James Bond']);

  });
});

describe('Testing challenge 2', () => {
  test('It should add the values of an array', () => {
    expect(addValues([1, 2, 3, 4, 5])).toStrictEqual(15);
    expect(addValues([])).toStrictEqual(0);
    expect(addValues([1, 2, 3, 4, -5])).toStrictEqual(5);
  });
});

describe('Testing challenge 3', () => {
  test('It should add the purchase price', () => {
    expect(addPurchases([{item: 'switch', purchasePrice: 399}, {item: 'toothpaste', purchasePrice: 2}])).toStrictEqual(401);
    expect(addPurchases([])).toStrictEqual(0);
  });
});

describe('Testing challenge 4', () => {
  test('It should return the length of the array', () => {
    expect(countNumberOfElements([1, 2, 3, 4, 5])).toStrictEqual(5);
  });
});

describe('Testing challenge 5', () => {
  test('It should return an array continaing the names of the characters', () => {
    expect(returnNames(starWarsData)).toStrictEqual([ 'Luke Skywalker', 'C-3PO', 'R2-D2', 'Darth Vader', 'Leia Organa' ]);
    expect(returnNames(starWarsData).length).toStrictEqual(5);
  });
});

describe('Testing challenge 6', () => {
  test('It should return the string with the characters in reverse order', () => {
    expect(reversedString('Code 301')).toStrictEqual('103 edoC');
  });
});

describe('Testing challenge 7', () => {
  test('It should return the total number of children', () => {
    expect(countNumberOfChildren(characters)).toStrictEqual(14);
  });
});

describe('Testing challenge 8', () => {
  test('It should return the average of the numbers in the array', () => {
    expect(calculateAverage([18, 290, 37, 4, 55, 16, 7, 85 ])).toStrictEqual(64);
  });
});

describe('Testing challenge 9', () => {
  test('It should return a count of the prime numbers in the array', () => {
    expect(countPrimeNumbers([1, 2, 13, 64, 45, 56, 17, 8])).toStrictEqual(3);
  });
});

describe('Testing challenge 10', () => {
  test('It should return an object that contains the names of each stat as individual keys and the respective baseStats as values to those keys.', () => {
    expect(extractStats(snorlaxData)).toStrictEqual({'speed': 30, 'special-defense': 110, 'special-attack': 65});
  });
});

describe('Testing challenge 11', () => {
  test('It should return an array containing the names of the children', () => {
    expect(extractChildren(characters)).toStrictEqual([ 'Robb', 'Sansa', 'Arya', 'Bran', 'Rickon', 'Drogon', 'Rhaegal', 'Viserion', 'Margaery', 'Loras' ]);
    expect(extractChildren(characters).length).toStrictEqual(10);
  });
});
