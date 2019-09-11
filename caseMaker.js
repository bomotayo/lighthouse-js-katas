const makeCase = function(input, x) {
  // Put your solution here
var arr = input.split("");

 
for(let i = 0; i < arr.length; i++){

  if(arr[i] === ' '){
    switch(x){
      case "camel":
          arr.splice(i,2,arr[i+1].toUpperCase());
      break;
      case "pascal":
        arr.splice(0,1,arr[0].toUpperCase());
        arr.splice(i,2,arr[i+1].toUpperCase());
      break;
      case "snake":
        arr.splice(i,1,'_');
      break;
      case "kebab":
          arr.splice(i,1,'-');
      break;
      case "title":
        arr.splice(0,1,arr[0].toUpperCase());
        arr.splice(i+1,1,arr[i+1].toUpperCase());
      break;
      }
  }
    switch(x){
      case "vowel":
        if(arr[i]==='a' || arr[i]==='e' || arr[i]==='i' || arr[i]==='o' || arr[i]==='u'){
          arr.splice(i,1,arr[i].toUpperCase());
        }
      break;
      case "consonant":
        if(arr[i]!=='a' && arr[i]!=='e' && arr[i]!=='i' && arr[i]!=='o' && arr[i]!=='u'){
          arr.splice(i,1,arr[i].toUpperCase());
        }
        break;
      }

    if(x.length > 1){
      if(x[0]==='upper'){
        arr[i] = arr[i].toUpperCase();
        if(arr[i] === ' '){
          switch(x[1]){
            case "camel":
                arr.splice(i,2,arr[i+1].toUpperCase());
            break;
            case "pascal":
              arr.splice(0,1,arr[0].toUpperCase());
              arr.splice(i,2,arr[i+1].toUpperCase());
            break;
            case "snake":
              arr.splice(i,1,'_');
            break;
            case "kebab":
                arr.splice(i,1,'-');
            break;
            case "title":
              arr.splice(0,1,arr[0].toUpperCase());
              arr.splice(i+1,1,arr[i+1].toUpperCase());
            break;
            }
        }
      }
      else if(x[0]==='lower'){
        arr[i] = arr[i].toLowerCase();
        if(arr[i] === ' '){
          switch(x[1]){
            case "camel":
                arr.splice(i,2,arr[i+1].toUpperCase());
            break;
            case "pascal":
              arr.splice(0,1,arr[0].toUpperCase());
              arr.splice(i,2,arr[i+1].toUpperCase());
            break;
            case "snake":
              arr.splice(i,1,'_');
            break;
            case "kebab":
                arr.splice(i,1,'-');
            break;
            case "title":
              arr.splice(0,1,arr[0].toUpperCase());
              arr.splice(i+1,1,arr[i+1].toUpperCase());
            break;
            }
        }
      }
    }
}
  return arr.join("");
}

 

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));
console.log(makeCase("this is a string", ["lower", "kebab"]));


 
// thisIsAString
// ThisIsAString
// this_is_a_string
// this-is-a-string
// This Is A String
// thIs Is A strIng
// THiS iS a STRiNG