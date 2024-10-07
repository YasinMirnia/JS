//Swap the Values of Two Variables
let var1 = 5;
let var2 = 10;

let temp;

temp = var1;
var1 = var2;
var2 = temp;

console.log("var1:", var1);
console.log("var2:", var2);

// Type coercion
let result = 3 + 2 + "7";

// When adding 3 and 2 (Numbers) to "7" (a String), Js performs type coercion. 5 + "7" Should be 57
console.log(result);

//Calculate user's income, expenses, and witing time to buy a car
//Salary = 6000$ per month
//Expenses = 55$ per day
//Car Price = 66000$

let expensesPerMonth = 55 * 30;
let monthlySaving = 6000 - expensesPerMonth;
let witingTime = 66000 / monthlySaving;
console.log("Witing time:", witingTime);

// Evan or not
let num = 348293;
let even = num % 2;
let evenOrNot = even == 0 ? "Even" : "not Even";
console.log(evenOrNot);

// bmi = wight (kg) / (height (m) **2 )
//18.5> = underwight
//18.5<&&<24.9 = normal
//24.9< = overwight

let wight = 50;
let height = 1.83;

let bmi = wight / height ** 2;

let underWight = "underwight";
let normal = "normal";
let overWight = "overwight";

let bodyStatus =
  bmi < 18.5
    ? underWight
    : bmi > 18.5 && bmi < 24.9
    ? normal
    : 25 < bmi
    ? overWight
    : "";

console.log(bodyStatus);
