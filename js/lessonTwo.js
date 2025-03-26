function greetings(names) {
  console.log("Task 1: ");

  names.forEach((name) => console.log(`Hello, ${name}!`));
}

greetings(["Alice", "Bob", "Charlie"]);

// Why does it HAVE to be ``? ' and "" doesn't work

function doubleNumbers(number) {
  let double = number.map((number) => number * 2);
  console.log("Task 2: " + double);
}

doubleNumbers([1, 2, 3]);

function filterNumbers(num) {
  return num.filter((number) => number >= 10);
}

console.log(filterNumbers([5, 12, 18, 7]));

function summarise(numbers) {
  return numbers.reduce((total, current) => total + current, 0);
}

console.log(summarise([1, 2, 3, 4]));
