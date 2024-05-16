// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Defining the employee array
const employeesArray = [];

// Collect employee data
const collectEmployees = function () {
  // TODO: Get user input to create and return an array of employee objects
  let addAnotherEmployee = true;

  while (addAnotherEmployee) {
    // Prompts for the First Name and checks to see it is not empty
    const firstName = prompt('Enter the employee first name');
    if (firstName === null) {
      alert('You must enter a first name');
      return employeesArray;
    }

    // Prompts for the Last Name and checks to see if it is not empty
    const lastName = prompt('Enter the employee last name');
    if (lastName === null) {
      alert('You must enter a last name');
      return employeesArray;
    }

    // Prompts for the salary and checks to be sure it is a number
    let salary = prompt('Enter employee salary.', 0);
    if (isNaN(salary) || null) {
      alert('Salary is not a number');
      salary = prompt('Enter employee salary.', 0);
    }

    // Adding those employee details into the array
    employeesArray.push({
      firstName: firstName,
      lastName: lastName,
      salary: Number(salary),
    });

    addAnotherEmployee = confirm('Add another employee?');
  }
  return employeesArray;
};

// Display the average salary
const displayAverageSalary = function (employeesArray) {
  // TODO: Calculate and display the average salary
  if (employeesArray && employeesArray.length > 0) {
    let sum = 0;
    for (i = 0; i < employeesArray.length; i++) {
      sum = sum + employeesArray[i].salary;
    }
    const avg = sum / employeesArray.length;
    console.log(
      `The average employee salary between our ${
        employeesArray.length
      } employee(s) is ${avg.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
      })}`
    );
  } else {
    console.log('There is no employee data to show');
  }
};

// Select a random employee
const getRandomEmployee = function (employeesArray) {
  // TODO: Select and display a random employee
  if (employeesArray && employeesArray.length > 0) {
    const randomEmployee =
      employeesArray[Math.floor(Math.random() * employeesArray.length)];
    console.log(
      `Congratulations to ${randomEmployee.firstName} ${randomEmployee.lastName} for winning our raffle drawing!`
    );
  }
};

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement('tr');

    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement('td');
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement('td');
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
};

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
};

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
