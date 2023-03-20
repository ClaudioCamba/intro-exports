const { check, runTest, skipTest } = require("../../test-api/index.js");

/*
Instructions

For these challenges complete the body of each function in turn.
Run this file with Node to run the tests and check your function works correctly.
Take a look at the tests to see what each function should be returning given various arguments.
When you're ready to move on to the next function replace skipTest with runTest.
*/

// Exercise 1
function checkIfPropertyExists(obj, key) {
  // This function should take an object and a key as its arguments and return true if the input object contains the provided key and false otherwise
}

skipTest(
  "checkIfPropertyExists() checks if a property exists inside an object",
  function () {
    check(checkIfPropertyExists({ name: "jonny", age: 32 }, "name")).isEqualTo(
      true
    );
    check(checkIfPropertyExists({ name: "jonny", age: 32 }, "age")).isEqualTo(
      true
    );
    check(checkIfPropertyExists({ name: "jonny", age: 32 }, "pets")).isEqualTo(
      false
    );
  }
);

// Exercise 2
function createObject(arr) {
  // This function should take an array consisting of two elements representing a key/ value pair as its argument and return an object with a single property based on the input
}

skipTest(
  "createObject() creates a new object from a key value pair",
  function () {
    check(createObject(["name", "shaq"])).isEqualTo({ name: "shaq" });
    check(createObject(["fruit", "apple"])).isEqualTo({ fruit: "apple" });
    check(createObject(["language", "haskell"])).isEqualTo({
      language: "haskell"
    });
  }
);

// Exercise 3
function getFirstNItems(arr, n) {
  // This function should take two arguments, an array and a number n, and return a new array containing the first n items of the given array
}

skipTest("getFirstNItems() returns the first n items in an array", function () {
  check(getFirstNItems(["a", "b", "c", "d"], 2)).isEqualTo(["a", "b"]);
  check(getFirstNItems(["apple", "banana", "pear", "kiwi"], 0)).isEqualTo([]);
  check(getFirstNItems(["apple", "banana", "pear", "kiwi"], 3)).isEqualTo([
    "apple",
    "banana",
    "pear"
  ]);
});

// Exercise 4
function createArrow(direction) {
  // This function should take a string representing a direction ("left", "right", "up" or "down") as its argument and return the corresponding arrow ("←", "→", "↑", "↓")
  // You don't need to utilise an object here, but think about how you could do so
}

skipTest(
  "createArrow() will return an arrow pointing in the right direction",
  function () {
    check(createArrow("left")).isEqualTo("←");
    check(createArrow("right")).isEqualTo("→");
    check(createArrow("up")).isEqualTo("↑");
    check(createArrow("down")).isEqualTo("↓");
  }
);

// Exercise 5
function moveItemToEnd(arr, n) {
  // This function should take two arguments, an array and a number n, and return a new array where the item that was previously at index 'n' is now at the end of the array
}

skipTest(
  "moveItemToEnd() removes an item at a given index and adds it to the end of the array",
  function () {
    check(moveItemToEnd(["a", "b", "c", "d"], 0)).isEqualTo([
      "b",
      "c",
      "d",
      "a"
    ]);
    check(moveItemToEnd(["a", "b", "c", "d"], 2)).isEqualTo([
      "a",
      "b",
      "d",
      "c"
    ]);
    check(moveItemToEnd(["a", "b", "c", "d"], 1)).isEqualTo([
      "a",
      "c",
      "d",
      "b"
    ]);
  }
);

// Exercise 6
function updateUserAge(user) {
  /*
  The user of our website is having a birthday!

  This function should take an object representing a user's account information

  A user object will look
  {
    admin: false,
    username: "xoxoAlexoxo",
    personalDetails: {
      name: "Alex",
      age: 39,
      favFood: "gooseberry fool"
    }
  }
  The user's age should be increased by 1 to reflect their recent birthday

  NOTE: This function does NOT need to return anything!
  */
}

skipTest("updateUserAge() updates the user's age", function () {
  const user1 = {
    admin: false,
    username: "xoxoAlexoxo",
    personalDetails: {
      name: "Alex",
      age: 39,
      favFood: "gooseberry fool"
    }
  };

  updateUserAge(user1);

  check(user1).isEqualTo({
    admin: false,
    username: "xoxoAlexoxo",
    personalDetails: {
      name: "Alex",
      age: 40,
      favFood: "gooseberry fool"
    }
  });

  const user2 = {
    admin: true,
    username: "brum4life",
    personalDetails: {
      name: "Poonam",
      age: 19,
      favFood: "caviar"
    }
  };

  updateUserAge(user2);

  check(user2).isEqualTo({
    admin: true,
    username: "brum4life",
    personalDetails: {
      name: "Poonam",
      age: 20,
      favFood: "caviar"
    }
  });
});

// Exercise 7
function checkInfinitive(word) {
  // This function should take a string representing a French word as an argument, and return true if it is an infinitive verb, and false otherwise
  // A French infinitive verb is a word that ends with either "re", "ir" or "er"
}

skipTest(
  "checkInfinitive() checks if a french word is an infinitive",
  function () {
    check(checkInfinitive("manger")).isEqualTo(true);
    check(checkInfinitive("faire")).isEqualTo(true);
    check(checkInfinitive("aller")).isEqualTo(true);
    check(checkInfinitive("finir")).isEqualTo(true);
    check(checkInfinitive("rendre")).isEqualTo(true);
    check(checkInfinitive("savoir")).isEqualTo(true);

    check(checkInfinitive("suis")).isEqualTo(false);
    check(checkInfinitive("ai")).isEqualTo(false);
    check(checkInfinitive("ete")).isEqualTo(false);
    check(checkInfinitive("sais")).isEqualTo(false);
    check(checkInfinitive("allons")).isEqualTo(false);
  }
);

// Exercise 8
function collectPlurals(arr) {
  // This function should take an array of strings as an argument and return an array containing all strings ending with an 's' from the input (retaining the order)
}

skipTest(
  "collectPlurals() can collect all the strings ending in an s",
  function () {
    check(
      collectPlurals(["dogs", "cat", "apples", "kittens", "kiwi"])
    ).isEqualTo(["dogs", "apples", "kittens"]);

    check(
      collectPlurals([
        "abcs",
        "humans",
        "thoughts",
        "cloud",
        "computer",
        "cups"
      ])
    ).isEqualTo(["abcs", "humans", "thoughts", "cups"]);
  }
);

// Exercise 9
function makeAllAdmins(arr) {
  /*
  This function should take an array of 'user' objects as an argument
  Each user will be an object with a 'name' and 'admin' property
  The 'admin' property will be a boolean value
  You should return an array of user objects each with the 'admin' property set to true
  */
}

skipTest(
  "makeAllAdmins() updates the admin property for each user",
  function () {
    check(
      makeAllAdmins([
        { name: "Barry", admin: false },
        { name: "Sandeep", admin: true },
        { name: "Kavita", admin: false }
      ])
    ).isEqualTo([
      { name: "Barry", admin: true },
      { name: "Sandeep", admin: true },
      { name: "Kavita", admin: true }
    ]);
  }
);
