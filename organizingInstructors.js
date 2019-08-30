const organizeInstructors = function(instructors) {
  // Put your solution here
  //let myMap = new Map();
  let obj = {};
  
 


  for(let i = 0; i < instructors.length; i++){
  //check if object !key create an array and push the value
  //else if it has the key push the value

      
   let key = instructors[i].course;
   let arr = [];

  
   if(!obj.hasOwnProperty(key)){
     arr.push(instructors[i].name);
     obj[key] = arr;
   }
   else{
     obj[key].push(instructors[i].name);
   }



    // Map Version
    // let key = instructors[i].course;
    // let arr = [];
    // if(!myMap.has(key)){
      
    //   arr.push(instructors[i].name);
    //  myMap.set(key,arr);
    // }
    // else{
    //   myMap.get(key).push(instructors[i].name);

    // }

  }

  //return myMap
  return obj;

};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"},
  {name: "Riko", course: "Blockchain"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));

// {
//   iOS: ["Samuel"],
//   Web: ["Victoria", "Karim", "Donald"]
// }
// {
//   Blockchain: ["Brendan"],
//   Web: ["David", "Carlos"],
//   iOS: ["Martha"]
// }