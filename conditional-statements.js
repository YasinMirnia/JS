// Convert a number to month and season
const num1 = 2;

if (num1 === 1) {
  console.log("Month:", "Farvardin");
} else if (num1 === 2) {
  console.log("Month:", "Urdibehest");
} else if (num1 === 3) {
  console.log("Month:", "Khordad");
} else if (num1 === 4) {
  console.log("Month:", "Tir");
} else if (num1 === 5) {
  console.log("Month:", "Mordad");
} else if (num1 === 6) {
  console.log("Month:", "Shahrivar");
} else if (num1 === 7) {
  console.log("Month:", "Mehr");
} else if (num1 === 8) {
  console.log("Month:", "Aban");
} else if (num1 === 9) {
  console.log("Month:", "Azar");
} else if (num1 === 10) {
  console.log("Month:", "Dey");
} else if (num1 === 11) {
  console.log("Month:", "Bahman");
} else if (num1 === 12) {
  console.log("Month:", "Isfand");
} else {
  console.log("your number is not valid");
}

if (num1 >= 1 && num1 < 4) {
  console.log("season:", "Spring");
} else if (num1 >= 4 && num1 < 7) {
  console.log("season:", "Summer");
} else if (num1 >= 7 && num1 < 10) {
  console.log("season:", "Fall");
} else if (num1 >= 10 && num1 <= 12) {
  console.log("season:", "Winter");
} else {
  console.log("your number is not valid");
}
