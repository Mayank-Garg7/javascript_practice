const data = [
  { name: "john", age: 24, profession: "developer" },
  { name: "jane", age: 27, profession: "admin" },
];

// 1. Print Developers
function printDeveloper(){
  for (let i of data){
    if (i.profession == "developer") {
      console.log(i);
    }
  }
}
//function printDeveloper() {
//   for (let i = 0; i < data.length; i++) {    // i = data 
//     if (data[i].profession == "developer") {      // यह चेक करेगा की profession प्रॉपर्टी  मे developer है या नहीं 
//       console.log(data[i]);     // agar ye profession === "developer" sahi hai to hum print karwa denge 
//     }
//   }
// }

// 1. Print Developers using filter method
// function printDeveloper() {
//   const developer = data.filter(person => person.profession === "developer");
//   developer.forEach(developer => console.log(developer));
// }



// 2. Add Data
function addData() {
  let a = {};
  a.name = prompt("Enter the name : ");
  a.age = parseInt(prompt("Enter the age : "));
  a.profession = prompt("Enter the profession : ");
  data.push(a);
  console.log(data);
// addData();
}

// function addData() {
//   const name = prompt("Enter name:");   // hum prompt ka use karke yahan par name input lenge
//   const age = parseInt(prompt("Enter age:"));   // or yahan par age input lenge  and parseInt means hame number me input lena hai 
//   const profession = prompt("Enter profession:");  //  or yahan par profession
//   const newUser = { name, age, profession };    // yahan par ek new object create karke data array me push karwa denge 
//   data.push(newUser);
//   console.log(data);
// }



// 3. Remove Admins
function removeAdmin() {
const newData = data.filter(item => item.profession !== "admin");
console.log(newData);
}

// 3. Remove Admins
// function removeAdmin() {    // yahan par hum all data ko ramove kar denge array me se || filter karke jinka property profession eqal hai admin ke  
//   const updatedData = data.filter(item => item.profession !== "admin");
//   return updatedData;
// }
// is function me print nhi ho raha tha isliye new function banakar console karwa diya 
// function jeet() {
//   console.log("Data after removal:", removeAdmin());
// }



// 4. Concatenate Array
function concatenateArray() {
  let newData = { name: "satish", age: 27, profession: "developer" };
  let demo = data.concat(newData);
  console.log(demo);
}
// concatenateArray(newData)

// 4. Concatenate Array
// function concatenateArray() {
//   const dummyArray = [               // yahan par hum ek dummy array lenge 
//     { name: "Satish", age: 22, profession: "developer" },
//     { name: "Jeet", age: 21, profession: "admin" },
//   ];
//   const result = data.concat(dummyArray);   // data name ke array me dummyArray ko jod denge 
//   console.log("Concated Array:", result);   // console me print karwa denge
// }



// 5. Average Age
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
// 5. Average Age
// function averageAge() {
//   let sum = 0;            // ek variable lenge sum name ka 
//   for (let i = 0; i < data.length; i++) {    // i = 0  ( i is value of array)
//     sum += data[i].age;     // yahan par sum me age ko plus karwa denge
//   }
//   const average = sum / data.length;   // ek naya variable lekar sum me data name ke array ko devide karwa denge 
//   console.log("Average Age:", average);
// }

// 5. Average Age using forEach method
// function averageAge() {
//   let sum = 0;
//   data.forEach(person => sum += person.age);
//   const average = sum / data.length;
//   console.log("Average Age:", average);
// }



// 6. Age Check
function checkAgeAbove25() {
  for (let i = 0; i < data.length; i++){
    if (data[i].age > 25){
        console.log(data[i]);
    }
  }
}
// let result = data.filter((item) => item.age>25)
// if result.length >=1{
//   console.log("valid");
// }
// else{
//   console.log("invalid");
// }

// // 6. Age Check
// function checkAgeAbove25() {
//   for (let i = 0; i < data.length; i++) {   // yahan par hum ek for loop lekar check karenge ki array me koi user 25 age se bada hai usko print karwa denge 
//     if (data[i].age > 25) {   // age is grater then 25 to console log 
//       console.log(data[i])
//     }
//   }
// }

// 6. Age Check with filter method
// function checkAgeAbove25() {
//   const personsAbove25 = data.filter(person => person.age > 25);
//   personsAbove25.forEach(person => console.log(person));
// }

// // 6. Age Check with filter method
// function checkAgeAbove25() {
//   const personsAbove25 = data.filter(person => person.age > 25);
//   personsAbove25.forEach(person => {
//     console.log("Valid user -", person);
//   });
// }

// 6. Age Check with if-else and forEach
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

// // 6. Age Check with if-else and for loop
// function checkAgeAbove25() {
//   const personsAbove25 = [];
//   for (let i = 0; i < data.length; i++) {
//     if (data[i].age > 25) {
//       personsAbove25.push(data[i]);
//     }
//   }
//   if (personsAbove25.length > 0) {
//     for (let i = 0; i < personsAbove25.length; i++) {
//       console.log("Valid user -", personsAbove25[i]);
//     }
//   } else {
//     console.log("No person above 25 found.");
//   }
// }



// 7. Unique Professions
function uniqueProfessions() {
  const professionsSet = new Set(data.map(i => i.profession));
  // Array.from(professionsSet);
  console.log(Array.from(professionsSet));
}
// const uniqueProfs = uniqueProfessions();
/*
let unique={};
data.forEach(itme)=>{
if(!unique.includes(item.profession)){
unique.push(item.profession);
}
}
console.log(unique);
*/

// 7. Unique Professions
// function uniqueProfessions() {
//   let unique = []
//   data.forEach((item) => {
//     if (!unique.includes(item.profession)) {
//       unique.push(item.profession)
//     }
//   })
//   console.log("Unique Professions:", unique);
// }



// 8. Sort by Age
function sortByAge() {
  data.sort((a, b) => a.age - b.age);
  console.log(data)
}
/*
sort by name in ascenfing order
data.sort((a, b) => b.name.localeCompare(a.name));
sort by name in descending order
data.sort((a, b) => a.name.localeCompare(b.name));
*/



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

/ // 10. Profession Count
// function getTotalProfessions() {
//   const professionCount = {};
//   // Assuming 'data' is an array of objects with a 'profession' property
//   data.forEach(item => {
//     const profession = item.profession;
//     professionCount[profession] = (professionCount[profession] || 0) + 1;
//   });
//   // Print counts for each profession
//   Object.keys(professionCount).forEach(profession => {
//     console.log(`${profession} = ${professionCount[profession]}`);
//   });
//   // Print total number of unique professions
//   console.log("Total Professions =", Object.keys(professionCount).length);
// }

// function getTotalProfessions() {
//   let unique = [];
//   let professionCount = {};
//   data.forEach((item) => {
//     const profession = item.profession;
//     if (!unique.includes(profession)) {
//       unique.push(profession);
//     }
//     // Count occurrences of each profession
//     professionCount[profession] = (professionCount[profession] || 0) + 1;
//   });
//   unique.forEach((profession) => {
//     console.log(`${profession} = ${professionCount[profession]}`);
//   });
//   console.log("Total profession =", unique.length);
// }



// // 10. Profession Count
// function getTotalProfessions() {
//   const professionCount = {};
//   // Assuming 'data' is an array of objects with a 'profession' property
//   data.forEach(item => {
//     const profession = item.profession;
//     professionCount[profession] = (professionCount[profession] || 0) + 1;
//   });
//   // Print counts for each profession
//   Object.keys(professionCount).forEach(profession => {
//     console.log(`${profession} = ${professionCount[profession]}`);
//   });
//   // Print total number of unique professions
//   console.log("Total Professions =", Object.keys(professionCount).length);
// }
