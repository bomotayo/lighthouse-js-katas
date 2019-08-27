const multiplicationTable = function(maxValue) {

  var multTable = "";

for(let c = 1; c <= maxValue; c++){
  for(let r = 1; r <= maxValue; r++){ 
    multTable+=" " + r*c;
  }
  multTable+="\n";
  
}

return multTable;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));


