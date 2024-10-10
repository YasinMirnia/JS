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
  console.log("your date is not valid");
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
  console.log("your date is not valid");
}

//Convert a number to month and season with Switch/case
const numMonth = 7;

switch (numMonth) {
  case 1:
    console.log("Month: Farvardin", "Season: Spring");
    break;
  case 2:
    console.log("Month: Urdibehesht", "Season: Spring");
    break;
  case 3:
    console.log("Month: Khordad", "Season: Spring");
    break;
  case 4:
    console.log("Month: Tir", "Season: Summer");
    break;
  case 5:
    console.log("Month: Mordad", "Season: Summer");
    break;
  case 6:
    console.log("Month: Shahrivar", "Season: Summer");
    break;
  case 7:
    console.log("Month: Mehr", "Season: Fall");
    break;
  case 8:
    console.log("Month: Apan", "Season: Fall");
    break;
  case 9:
    console.log("Month: Azar", "Season: Fall");
    break;
  case 10:
    console.log("Month: Dey", "Season: Winter");
    break;
  case 11:
    console.log("Month: Bahman", "Season: Winter");
    break;
  case 12:
    console.log("Month: Isfand", "Season: Winter");
    break;
  default:
    console.log("your date is not valid");
}
