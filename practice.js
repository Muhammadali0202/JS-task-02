//SUM OF ALL NUMBERS OF A DIGITS

// let number = +prompt("Enter a Number: ");
// let sum = 0;

// // for (let digit; number > 0; number = Math.floor(number / 10)) {
// //   digit = number % 10;
// //   sum += digit;
// // }

// for (let i = 0; i <= number.length; i++) {
//   sum = sum + parseInt(number[i]);
// }

// // console.log("Sum of digits:", sum);

//RANGE OF 2 NUMS

// let num1 = +prompt("Enter a 1st Number: ");
// let num2 = +prompt("Enter a 2nd Number: ");
// let sum = 0;

// for (let i = num1; i <= num2; i++) {
//   sum += i;
// }

// console.log("The sum of the range from", num1, "to", num2, "is:", sum);

//AVERAGE

// let numbers = [];
// let n = parseInt(prompt("Enter the number of elements:"));

// for (let i = 0; i < n; i++) {
//     let num = parseInt(prompt("Enter number " + (i+1) + ":"));
//     numbers.push(num);
// }

// let sum = 0;
// let count = numbers.length;

// for (let i = 0; i < count; i++) {
//     sum += numbers[i];
// }

// let average = sum / count;
// console.log("Average:", average);

//COMPARING EQUAL CHARACTERS

// let num1 = +prompt("Enter a 1st Number: ");
// let num2 = +prompt("Enter a 2nd Number: ");
// if (num1.length === num2.length) {
//   console.log("Yes, they have equal Characters");
// } else {
//   console.log("No,they do not have equal Characters");
// }

//SWAPPING WORDS

let word = prompt("Write a word: ");

if (word.length > 0) {
  let replacedWord = word[word.length - 1] + word.slice(1);
  console.log("Original Word:", word);
  console.log("Word with first letter replaced by last letter:", replacedWord);
} else {
  console.log("Empty word.");
}
