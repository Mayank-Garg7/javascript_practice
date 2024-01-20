
# Array Manipulation Tasks

- This project demonstrates various array manipulation tasks using JavaScript. The functionality is implemented through a set of functions that can be triggered by buttons on an HTML page. Let's break down the code and provide a brief explanation for each function:
-----
## Author

- Mayank Garg (mayank-garg7)
----
## Code Explanation

### 1. Print Developers
```javascript
function printDeveloper() {
  // Iterate through the 'data' array and print developers
  for (let i of data) {
    if (i.profession == "developer") {
      console.log(i);
    }
  }
}
```
- This function prints all developers in the 'data' array
----
### 2. Add Data
```javascript
function addData() {
  // Prompt user for input and add a new object to the 'data' array
  let a = {};
  a.name = prompt("Enter the name : ");
  a.age = parseInt(prompt("Enter the age : "));
  a.profession = prompt("Enter the profession : ");
  data.push(a);
  console.log(data);
}
```
- This function adds a new data object to the 'data' array based on user input.
----
### 3. Remove Admins
```javascript
function removeAdmin() {
  // Create a new array excluding objects with the 'admin' profession
  const newData = data.filter(item => item.profession !== "admin");
  console.log(newData);
}
```
- This function removes administrators from the 'data' array.
-----
### 4. Concatenate Array
```javascript
function concatenateArray() {
  // Create a new object and concatenate it to the 'data' array
  let newData = { name: "satish", age: 27, profession: "developer" };
  let demo = data.concat(newData);
  console.log(demo);
}
```
- This function concatenates a new object to the 'data' array.
----
### 5. Average Age
```javascript
function averageAge() {
  // Calculate and log the average age of objects in the 'data' array
  let count = 0;
  let sum = 0;
  for (let i of data) {
    sum = sum + i.age;
    count++;
  }
  let c = sum / count;
  console.log(c);
}
```
- This function calculates and logs the average age of objects in the 'data' array.
----
### 6. Age Check
```javascript
function checkAgeAbove25() {
  // Log objects with age above 25 from the 'data' array
  for (let i = 0; i < data.length; i++) {
    if (data[i].age > 25) {
      console.log(data[i]);
    }
  }
}
```
- This function logs objects with an age above 25 from the 'data' array.
----
### 7. Unique Professions
```javascript
function uniqueProfessions() {
  // Use a Set to get unique professions and convert it back to an array
  const professionsSet = new Set(data.map(i => i.profession));
  console.log(Array.from(professionsSet));
}
```
- This function logs an array of unique professions from the 'data' array.
----
### 8. Sort by Age
```javascript
function sortByAge() {
  // Sort the 'data' array based on age
  data.sort((a, b) => a.age - b.age);
  console.log(data);
}
```
- This function sorts the 'data' array in ascending order based on age.
----
### 9. Update Profession
```javascript
function updateJohnsProfession() {
  // Find and update John's profession in the 'data' array
  const john = data.find(item => item.name.toLowerCase() == "john");
  if (john) {
    john.profession = "manager";
  }
  console.log(data);
}
```
- This function finds and updates John's profession in the 'data' array.
----
### 10. Profession Count
```javascript
function getTotalProfessions() {
  // Count and log the total number of objects in the 'data' array
  let count = 0;
  for (let i of data) {
    count++;
  }
  console.log(count);
}
```
- This function counts and logs the total number of objects in the 'data' array.
----
## Running the Project

1. Open the HTML file (`index.html`) in a web browser.
2. Click on the buttons to trigger the corresponding array manipulation tasks.
3. Observe the results in the console.

> Feel free to explore, modify, and extend the JavaScript functions in the script file (`script.js`) to further customize the array manipulation tasks.
