function accessObject(object, key) {
  return object[key];
}
// This function should take an object and a key and return the object's property value;

console.log(`accessObject() can access a property value using a key`);
try {
  check(accessObject).whenCalledWith({ name: "jonny", age: 32 }, "name").returns("jonny");
  check(accessObject).whenCalledWith({ name: "jonny", age: 32 }, "age").returns(32);

  printGreenMessage("Pass :)");
} catch (error) {
  printRedMessage(error);
}

function checkIfPropertyExists(object, key) {
  return key in object;
}
// This function should take an object and a key and return boolean that indicates whether or not the object has the given keys

console.log(`checkIfPropertyExists() checks if a property exists inside an object`);
try {
  check(checkIfPropertyExists).whenCalledWith({ name: "jonny", age: 32 }, "name").returns(true);
  check(checkIfPropertyExists).whenCalledWith({ name: "jonny", age: 32 }, "age").returns(true);
  check(checkIfPropertyExists).whenCalledWith({ name: "jonny", age: 32 }, "pets").returns(false);

  printGreenMessage("Pass :)");
} catch (error) {
  printRedMessage(error);
}

function createObject(keyValuePair) {
  const [key, value] = keyValuePair;
  return { [key]: value };
}
// This function should take a key value pair (stored in an array) and use it to create an object with a key and a value

console.log(`createObject() creates a new object from a key value pair`);
try {
  check(createObject).whenCalledWith(["name", "shaq"]).returns({ name: "shaq" });
  check(createObject).whenCalledWith(["fruit", "apple"]).returns({ fruit: "apple" });
  check(createObject).whenCalledWith(["language", "haskell"]).returns({ language: "haskell" });

  printGreenMessage("Pass :)");
} catch (error) {
  printRedMessage(error);
}

function countProperties(obj) {
  return Object.keys(obj).length;
}
// This function should take an object and count the number of properties it has

console.log(`countProperties() counts the number of key-value pairs for a given object`);
try {
  check(countProperties).whenCalledWith({}).returns(0);
  check(countProperties).whenCalledWith({ name: "shaq" }).returns(1);
  check(countProperties).whenCalledWith({ name: "shaq", job: "tutor", city: "Manchester" }).returns(3);

  printGreenMessage("Pass :)");
} catch (error) {
  printRedMessage(error);
}

function updateVoterAddress(voter, correctHouseNumber) {
  voter.address.houseNumber = correctHouseNumber;
  /* Uh-Oh! We've got some silly voters who've registered their addresses incorrectly.
   Lets help them fix those typos by changing their houseNumber to the correctHouseNumber.
   The user object looks like this:
    {
      name: "Alex",
      age: 39,
      address: {
        houseNumber: 2,
        street: "Old St",
        city: "Chester"
      }
    };
    Note - The function does NOT need to return anything.
  */
}

console.log(`updateVoterAddress() updates the voter's houseNumber`);
try {
  const voter = {
    name: "Alex",
    age: 39,
    address: {
      houseNumber: 2,
      street: "Old St",
      city: "Chester",
    },
  };

  updateVoterAddress(voter, 10);

  check(voter).isEqualTo({
    name: "Alex",
    age: 39,
    address: {
      houseNumber: 10,
      street: "Old St",
      city: "Chester",
    },
  });

  printGreenMessage("Pass :)");
} catch (error) {
  printRedMessage(error);
}

function createUserString(userObj) {
  // should take as an argument an object with the format from createNorthcoder
  // returns a string with the user's details in the form:
  // 'name: Mitch, age: 27, language: Javascript';
  // Note - this is a good use case of string template literals.
  return `name: ${userObj.name}, age: ${userObj.age}, language: ${userObj.language}`;
}

console.log(`createUserString() will create a message from an details object`);
try {
  check(createUserString)
    .whenCalledWith({ name: "Mitch", age: 30, language: "Javascript" })
    .returns("name: Mitch, age: 30, language: Javascript");

  check(createUserString)
    .whenCalledWith({ name: "Anat", age: 24, language: "Ruby" })
    .returns("name: Anat, age: 24, language: Ruby");

  printGreenMessage("Pass :)");
} catch (error) {
  printRedMessage(error);
}

function updateCoinMachine(coinMachine, money) {
  // should take a coinMachine object with the following properties
  //    {
  //      '1p' : [],
  //      '2p': [],
  //    }
  // should update the
}

console.log(`updateCoinMachine() will create a message from an details object`);

// >>>>>>>>>>> DON'T ALTER ANYTHING BELOW THIS LINE <<<<<<<<<<<<<<<

function check(func) {
  const methods = {
    whenCalledWith(...args) {
      this.args = args;
      return this;
    },
    isEqualTo(expected) {
      const { actual } = this;

      if (typeof actual === "object" && typeof expected === "object") {
        if (!checkDeeplyEqual(actual, expected)) {
          throw new Error(
            `${JSON.stringify(actual, null, 2)}\n is not equal to the expected value of \n${JSON.stringify(
              expected,
              null,
              2
            )}`
          );
        }
      } else if (actual !== expected) throw new Error(`${actual} is not equal to the expected value of ${expected}`);
    },
    returns(expected) {
      const actual = this.func(...this.args);
      if (typeof actual === "object" && typeof expected === "object") {
        if (!checkDeeplyEqual(actual, expected)) {
          throw new Error(createFeedback(this.func.name, actual, expected));
        }
      } else if (actual !== expected) throw new Error(createFeedback(this.func.name, actual, expected));
    },
  };
  const obj = Object.create(methods);
  if (typeof func === "function") obj.func = func;
  else obj.actual = func;
  return obj;
}

function checkDeeplyEqual(coll1, coll2) {
  let areEqual = true;
  if (typeof coll1 === "object" && typeof coll2 === "object") {
    if (Object.keys(coll1).length !== Object.keys(coll2).length) return false;
    if (Array.isArray(coll1) === Array.isArray(coll2)) {
      for (let key1 in coll1) {
        if (!coll2[key1]) return false;
        else areEqual = checkDeeplyEqual(coll1[key1], coll2[key1]);
        if (!areEqual) return false;
      }
    } else return false;
  } else return coll1 === coll2;
  return areEqual;
}

function createFeedBackString(item) {
  const lookup = {
    string: (item) => `"${item}"`,
    object: (item) => JSON.stringify(item, null, 3),
    undefined: (x) => x,
    boolean: (x) => x,
    number: (x) => x,
  };
  return lookup[typeof item](item);
}

function createFeedback(name, actual, expected) {
  const actualString = createFeedBackString(actual);
  const expectedString = createFeedBackString(expected);

  const feedback = `${name}'s output was ${actualString}, but it should be ${expectedString}`;
  return feedback;
}

function printRedMessage(message) {
  console.log("\x1b[31m", message, "\x1b[0m");
}

function printGreenMessage(message) {
  console.log("\x1b[32m", message, "\x1b[0m");
}
