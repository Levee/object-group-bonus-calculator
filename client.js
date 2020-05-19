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

$(document).ready(whenReady);
function whenReady() {
  console.log('DOM is ready to be manipulated!');
  $('#seeEmployees').on('click', printEmployees);
} // end whenReady

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
function printEmployees(){
  let elObjects = $('#objects');
  let newEmployee = ' ';
  for(let employeeObj of employees){
    newEmployee = JSON.stringify(calculateBonus(employeeObj));
    elObjects.append(`<li>` + newEmployee + `</li>`).fadeIn();
  }
}

// NOTE: You may abstract out this bonus calculation into a second function if you like, but this is not mandatory.

// ## Stretch Goals
// - Put the output on the DOM (visually on the page).
// - Make the app run only after the user clicks on a button on the page
// - Then style the output, making it visually appealing.