const instructorWithLongestName = function(instructors) {
  // Put your solution here
  let max_length = Number.MIN_VALUE;
  let longestName = {};

  for(var i = 0; i < instructors.length; i++){
      if(instructors[i].name.length > max_length){
        max_length = instructors[i].name.length;
        longestName = instructors[i];
      }
  }

  return longestName;
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));