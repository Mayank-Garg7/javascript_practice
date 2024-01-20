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




// 2. Add Data
function addData() {
  let a = {};
  a.name = prompt("Enter the name : ");
  a.age = parseInt(prompt("Enter the age : "));
  a.profession = prompt("Enter the profession : ");
  data.push(a);
  console.log(data);
}
// addData();



// 3. Remove Admins
function removeAdmin() {
const newData = data.filter(item => item.profession !== "admin");
console.log(newData);
}



// 4. Concatenate Array
function concatenateArray() {
  let newData = { name: "satish", age: 27, profession: "developer" };
  let demo = data.concat(newData);
  console.log(demo);
}
// concatenateArray(newData)


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



// 6. Age Check
function checkAgeAbove25() {
for (let i = 0; i < data.length; i++){
  if (data[i].age > 25){
  console.log(data[i]);
}
  // let result = data.filter((item) => item.age>25)
  // if result.length >=1{
  //   console.log("valid");
  // }
  // else{
  //   console.log("invalid");
  // }
}
}





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
