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
  let a = { name: "mayank", age: 21, profession: "frontend developer" };
  data.push(a);
  console.log(data);
}
// addData();



// 3. Remove Admins
function removeAdmin() {
  for(let i of data ){
  if( i.profession == 'admin'){
    delete data[i];
  }
}
console.log(data);
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
for(let i of data){
  if (i.age >= 25){
  console.log("age is greater than 25");
}
}
}





// 7. Unique Professions
function uniqueProfessions() {
  const professionsSet = new Set(data.map(i => i.profession));
  // Array.from(professionsSet);
  console.log(Array.from(professionsSet));
}
// const uniqueProfs = uniqueProfessions();




// 8. Sort by Age
function sortByAge() {
  data.sort((a, b) => a.age - b.age);
  console.log(data)
}



// 9. Update Profession
function updateJohnsProfession() {
  for(let i of data){
  if(i == 'john')
    data[i.profession] = "designer"
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
