const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log( employees );


function calculateBonus(employeeObj){
  let bonusPercentage = 0;
  let totalCompensation = 0;
  let totalBonus = 0;

  // calculate the bonus percentage
  if (employeeObj.reviewRating <= 2) {
    bonusPercentage = 0;
  } else if (employeeObj.reviewRating === 3) {
    bonusPercentage = 0.04;
  } else if (employeeObj.reviewRating === 4) {
    bonusPercentage = 0.06;
  } else if (employeeObj.reviewRating === 5) {
    bonusPercentage = 0.10;
  }

  // handle special cases
  if (employeeObj.employeeNumber.length === 4) {
    bonusPercentage += 0.05;
  }
  if (employeeObj.annualSalary > 65000) {
      bonusPercentage = bonusPercentage - 0.01;
  }
  if (bonusPercentage > 0.13) {
    bonusPercentage = 0.13;
  } else if (bonusPercentage <= 0){
    bonusPercentage = 0;
  }
  // calculate the final bonus and compensation
  totalBonus = Math.floor(bonusPercentage * employeeObj.annualSalary);

  totalCompensation = Math.floor(totalBonus + Number(employeeObj.annualSalary));
  // console.log(bonusPercentage);
  // console.log(totalBonus);
  // console.log(totalCompensation);
  
  
  
  // create your new 'bonus' object, return that
  let newEmployeeObj = {
    name: employeeObj.name,
    bonusPercentage: bonusPercentage,
    totalCompensation: totalCompensation,
    totalBonus: totalBonus
  }
  return newEmployeeObj;
}

// loop over all employees and run the calculation for them
for(let employeeObj of employees){
  console.log(calculateBonus(employeeObj));
  
}
/*

## Processing Employee Bonuses

Loop over the `employees` array and do the following:

* use each employee object as the input to the function described below.
* `console.log` the results of each iteration.


## Function Logic

Write a declared function that takes in one **Employee** object (as an argument to the function), and returns a new **object** with the following properties:

* The `name` property should contain the employee's name.
* The `bonusPercentage` property should contain the bonus percentage the employee is to receive. See section below for calculation instructions.
* The `totalCompensation` property should be the adjusted annual compensation (base annual + bonus)
* The `totalBonus` should be the employee's total bonus rounded to the nearest dollar.*/


// ### Individual Bonus calculation
// - Those who have a rating of a 2 or below should not receive a bonus.
// - Those who have a rating of a 3 should receive a base bonus of 4% of their base annual income.
// - Those who have a rating of a 4 should receive a base bonus of 6% of their base annual income.
// - Those who have a rating of a 5 should receive a base bonus of 10% of their base annual income.
// - If their employee number is 4 digits long, this means they have been with the company for longer than 15 years,
// and should receive an additional 5%.
// - However, if their annual income is greater than $65,000, they should have their bonus adjusted down 1%.
// - No bonus can be above 13% or below 0% total.

// NOTE: You may abstract out this bonus calculation into a second function if you like, but this is not mandatory.

// ## Stretch Goals
// - Put the output on the DOM (visually on the page).
// - Make the app run only after the user clicks on a button on the page
// - Then style the output, making it visually appealing.