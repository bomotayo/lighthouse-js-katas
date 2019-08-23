const urlEncode = function(text) {
  // Put your solution here
  let arr = text.split('');
  if(arr[0] === ' '){
	arr.splice(0,1);
  }
  for(let i=1; i < arr.length-1; i++){
    if(arr[i]===' '){
      arr.splice(i,1,'%20');
    }
  }

  return arr.join('');
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));