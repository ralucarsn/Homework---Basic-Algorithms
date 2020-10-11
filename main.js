console.log('Ready!');

/* 1. Write a function nextInLine which takes an array (arr) and a number (item) as arguments.
Add the number to the end of the array, then remove the first element of the array.
The nextInLine function should then return the element that was removed.*/

function nextInLine(arr, item) {
  // Only change code below this line
  arr.push(item);
  var result = arr.shift(arr[0]);
  
  return result;
  // Only change code above this line
}
// Setup
var testArr = [1,2,3,4,5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

/* 2. In the game of golf each hole has a par meaning the average number of strokes a golfer is expected to make in order to sink the ball in a hole to complete the play. Depending on how far above or below par your strokes are, there is a different nickname.
Your function will be passed par and strokes arguments. Return the correct string according to this table which lists the strokes in order of priority; top (highest) to bottom (lowest):*/

var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
  // Only change code below this line
    if ( strokes == 1) {
        return names[0];
    } else if ( strokes <= par - 2 ) {
        return names[1];
    } else if ( strokes == par - 1 ) {
        return names[2];
    } else if ( strokes == par ) {
        return names[3];
    } else if ( strokes == par + 1 ) {
        return names[4];
    } else if ( strokes == par +2 ) {
        return names[5];
    } else {
        return names[6];
    }

  
  // Only change code above this line
}

golfScore(5, 4);

/* 3. In the casino game Blackjack, a player can gain an advantage over the house by keeping track of the relative number of high and low cards remaining in the deck. This is called Card Counting.
Having more high cards remaining in the deck favors the player. Each card is assigned a value according to the table below. When the count is positive, the player should bet high. When the count is zero or negative, the player should bet low. */

var count = 0;

function cc(card) {
  // Only change code below this line
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
  }
  if (count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }

  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');

/* 4. We have an array of objects representing different people in our contacts lists.
A lookUpProfile function that takes name and a property (prop) as arguments has been pre-written for you.
The function should check if name is an actual contact's firstName and the given property (prop) is a property of that contact.
If both are true, then return the "value" of that property.
If name does not correspond to any contacts then return "No such contact".
If prop does not correspond to any valid properties of a contact found to match name then return "No such property".*/

var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop){
// Only change code below this line
for (var x = 0; x < contacts.length; x++) {
    if (contacts[x].firstName === name) {
      if (contacts[x].hasOwnProperty(prop)) {
        return contacts[x][prop];
      } else {
        return "No such property";
      }
    }
  }
  return "No such contact";
}

// Only change code above this line
lookUpProfile("Akira", "likes");

/* 5. You are given a JSON object representing a part of your musical album collection. Each album has a unique id number as its key and several other properties. Not all albums have complete information.

You start with an updateRecords function that takes an object like collection, an id, a prop (like artist or tracks), and a value. Complete the function using the rules below to modify the object passed to the function.

Your function must always return the entire object.
If prop isn't tracks and value isn't an empty string, update or set that album's prop to value.
If prop is tracks but the album doesn't have a tracks property, create an empty array and add value to it.
If prop is tracks and value isn't an empty string, add value to the end of the album's existing tracks array.
If value is an empty string, delete the given prop property from the album.
Note: A copy of the collection object is used for the tests.*/

// Setup
var collection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };
  
  // Only change code below this line
  function updateRecords(object, id, prop, value) {
      if (value === '') delete object[id][prop];
    else if (prop === 'tracks') {
      object[id][prop] = object[id][prop] || [];
      object[id][prop].push(value);
    } else {
      object[id][prop] = value;
    }
    return object;
  }
  
  updateRecords(collection, 5439, 'artist', 'ABBA');

/* 6. The algorithm to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.
    You are given a variable celsius representing a temperature in Celsius. Use the variable fahrenheit already defined and assign it the Fahrenheit temperature equivalent to the given Celsius temperature. Use the algorithm mentioned above to help convert the Celsius temperature to Fahrenheit.*/

  function convertToF(celsius) {
    var fahrenheit = celsius * (9 / 5) + 32;
    return fahrenheit;

  }
    
    convertToF(30);

/* 7. Reverse the provided string.
You may need to turn the string into an array before you can reverse it.
Your result must be a string. */

function reverseString(str) {
  for (var reversedStr = "", i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}

// 8. Factorialize a Number

function factorialize(num) {
  if (num === 0) {
    return 1;
  }
  return num * factorialize(num - 1);
}

factorialize(5);

//  9. Find the Longest Word in a String

function findLongestWordLength(str) {
  let record = 0;
  let i = 0;
  let wordLength = 0;
  while(true) {
    wordLength = str.indexOf(' ', i) - (i);
    if (str.indexOf(' ', i) === -1) {
      wordLength = str.length-i;
    }
    i = i + (wordLength > 0 ? wordLength : wordLength*(-1)) + 1;
    
    if (wordLength > record) {
      record = wordLength;
    }
    if (i > str.length) {
      break;
    }
  }
  return record;
}

// 10. Return Largest Numbers in Arrays

function largestOfFour(arr) {
  var results = [];
  for (var n = 0; n < arr.length; n++) {
    var largestNumber = arr[n][0];
    for (var sb = 1; sb < arr[n].length; sb++) {
      if (arr[n][sb] > largestNumber) {
        largestNumber = arr[n][sb];
      }
    }

    results[n] = largestNumber;
  }

  return results;
}

// 11. Repeat a String Repeat a String

function repeatStringNumTimes(str, num) {
  var accumulatedStr = "";

  while (num > 0) {
    accumulatedStr += str;
    num--;
  }
  return accumulatedStr;
}

repeatStringNumTimes("abc", 3);

// 12. Title Case a Sentence

function titleCase(str) {
  var convertToArray = str.toLowerCase().split(" ");
   var result = convertToArray.map(function(val) {
     return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
   });
   return result.join(" ");
 }
 
 titleCase("I'm a little tea pot");

// 13. Slice and Splice

function frankenSplice(arr1, arr2, n) {
  let localArray = arr2.slice();
  for (let i = 0; i < arr1.length; i++) {
    localArray.splice(n, 0, arr1[i]);
    n++;
  }
  return localArray;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);

// 14. Where do I Belong

function getIndexToIns(arr, num) {
  arr.sort(function(a, b) {
    return a - b;
  });
  for (var a = 0; a < arr.length; a++) {
    if (arr[a] >= num) return a;
  }
  return arr.length;
}

getIndexToIns([40, 60], 50);

 
 
 

    
  










