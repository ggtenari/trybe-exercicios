function sum(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("parameters must be numbers");
  }

  return a + b;
}

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

function myFizzBuzz(num) {
  if (typeof num !== "number") return false;
  if (num % 3 === 0 && num % 5 === 0) return "fizzbuzz";
  if (num % 3 === 0) return "fizz";
  if (num % 5 === 0) return "buzz";
  return num;
}

function encode(string) {
  let newString = "";
  for (letter of string) {
    if (letter === "a") {
      newString += "1";
    } else if (letter === "e") {
      newString += "2";
    } else if (letter === "i") {
      newString += "3";
    } else if (letter === "o") {
      newString += "4";
    } else if (letter === "u") {
      newString += "5";
    } else {
      newString += letter;
    }
  }
  return newString;
}

function decode(string) {
  let newString = "";
  for (letter of string) {
    if (letter === "1") {
      newString += "a";
    } else if (letter === "2") {
      newString += "e";
    } else if (letter === "3") {
      newString += "i";
    } else if (letter === "4") {
      newString += "o";
    } else if (letter === "5") {
      newString += "u";
    } else {
      newString += letter;
    }
  }
  return newString;
}

module.exports = { sum, myRemove, myFizzBuzz, encode, decode};
