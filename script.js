const data = [
  { name: "john", age: 24, profession: "developer" },
  { name: "jane", age: 27, profession: "admin" },
];

// 1. Print Developers
//Approach 1 - Using for of loop
function printDeveloper(){
  for (let i of data){
    if (i.profession == "developer") {
      console.log(i);
    }
  }
}

//// Approach 2 - using simple for loop 
// function printDeveloper() {
//   for (let i = 0; i < data.length; i++) {    
//     if (data[i].profession == "developer") {   
//       console.log(data[i]); 
//     }
//   }
// }

//// Approach 3 - using filter method
// function printDeveloper() {
//   const developer = data.filter(person => person.profession === "developer");
//   developer.forEach(developer => console.log(developer));
// }



// 2. Add Data
//// Approach 1 
// function addData() {
//   let a = {};
//   a.name = prompt("Enter the name : ");
//   a.age = parseInt(prompt("Enter the age : "));
//   a.profession = prompt("Enter the profession : ");
//   data.push(a);
//   console.log(data);
// }


//// Approach 2 
function addData() {
  const name = prompt("Enter name:");  
  const age = parseInt(prompt("Enter age:"));  
  const profession = prompt("Enter profession:"); 
  const newUser = { name, age, profession };    
  data.push(newUser);
  console.log(data);
}



// 3. Remove Admins
// function removeAdmin() {
// const newData = data.filter(item => item.profession !== "admin");
// console.log(newData);
// }


// 4. Concatenate Array
function concatenateArray() {
  let newData = { name: "satish", age: 27, profession: "developer" };
  let demo = data.concat(newData);
  console.log(demo);
}


// 5. Average Age
//Approach 1 - usnig new variable and for loop 
function averageAge() {
  let count = 0;
  let sum = 0;
  for(let i of data){
    sum = sum+i.age;
    count++;
  }
  let c = sum/count;
  console.log(c);
}

//// Approach 2 using simple for loop
// function averageAge() {
//   let sum = 0;           
//   for (let i = 0; i < data.length; i++) {    
//     sum += data[i].age;    
//   }
//   const average = sum / data.length;  
//   console.log(average);
// }

//// Approach 3 - using forEach method
// function averageAge() {
//   let sum = 0;
//   data.forEach(person => sum += person.age);
//   const average = sum / data.length;
//   console.log(average);
// }



// 6. Age Check
//// Approach1 - using simple for loop
// function checkAgeAbove25() {
//   for (let i = 0; i < data.length; i++){
//     if (data[i].age > 25){
//         console.log(data[i]);
//     }
//   }
// }


//// Approach 2 - using conditional statements.
// function checkAgeAbove25(){
//   let result = data.filter((item) => item.age>25);
//   if (result.length >=1){
//     console.log("valid");
//   }
//   else{
//     console.log("invalid");
//   }
// }


//// Approach 3 -  using filter method
// function checkAgeAbove25() {
//   const personsAbove25 = data.filter(person => person.age > 25);
//   personsAbove25.forEach(person => console.log(person));
// }


////  Approach 4 - using if-else and forEach
// function checkAgeAbove25() {
//   let foundAbove25 = false;
//   data.forEach(person => {
//     if (person.age > 25) {
//       console.log("Valid user -", person);
//       foundAbove25 = true;
//     }
//   });
//   if (!foundAbove25) {
//     console.log("No person above 25 found.");
//   }
// }




// 7. Unique Professions
//// Approach 1 
function uniqueProfessions() {
  const professionsSet = new Set(data.map(i => i.profession));
  console.log(Array.from(professionsSet));
}


//// Approach2 
// function uniqueProfessions() {
//   let unique = [];
//   data.forEach((item) => {
//     if (!unique.includes(item.profession)) {
//       unique.push(item.profession);
//     }
//   });
//   console.log(unique);
// }



// 8. Sort by Age
//// Approach 1 - Using sort method
function sortByAge() {
  data.sort((a, b) => a.age - b.age);
  console.log(data)
}


// // Aproach 2 - sort by name in ascenfing order
// function sortByAge() {
  // data.sort((a, b) => b.name.localeCompare(a.name));
// }


//// Aproach 3 - sort by name in descending order
// function sortByAge() {
//   data.sort((a, b) => a.name.localeCompare(b.name));
// }



// 9. Update Profession
function updateJohnsProfession() {
  const john = data.find(item => item.name.toLowerCase() == "john");
  if (john) {
    john.profession = "manager";
  }
  console.log(data)
}


// 10. Profession Count
function getTotalProfessions() {
  let count =0;
  for(let i of data){
    count++;
  }
  console.log(count)
}

