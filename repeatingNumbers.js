let repeatNumbers = function(data) {
  // Put your solution here
  let sum;
  let narr = [];

  for(let r = 0; r < data.length; r++){
      sum = data[r][0];

      let c = 1;
      while(c < data[r][1]){
        sum += data[r][0].toString();
        c++;
      }

      narr.push(sum);
  }
  return narr.toString();
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));

