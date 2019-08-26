let camelCase = function(input) {

  let arr = input.split('');
  
  for(let i = 0; i < arr.length; i++){
    if(arr[i]===" "){
      arr.splice(i, 2, arr[i+1].toUpperCase());
      }		
  }
  
    return arr.join('');
  };
  
  console.log(camelCase("this is a string"));
  console.log(camelCase("loopy lighthouse"));
  console.log(camelCase("supercalifragalisticexpialidocious"));