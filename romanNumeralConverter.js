function convertToRoman(num) {
  let str = num.toString().split('');
  let arr = [];
  let roman;
  let count;

  for(let i = str.length-1; i >= 0; i--){
      arr.push(parseInt(str[i]));
  }
  for(let j = 0; j < arr.length; j++){
    arr[j] = arr[j]*Math.pow(10,j);  
    
    if(arr[j] >= 1000){
      roman = 'M';
      count = arr[j]/1000;
      arr[j]= roman.repeat(count);
    }
    if(arr[j] === 900){
      arr[j] = 'CM';
    }
    if(arr[j] >= 500 && arr[j] < 900){
      roman = 'C';
      count = (arr[j]-500) / 100;
      arr[j]= 'D' + roman.repeat(count);
    }
    if(arr[j] === 400){
      arr[j]= 'CD';
    }
    if(arr[j] >= 100 && arr[j] < 400){
      roman = 'C';
      count = arr[j]/100;
      arr[j]= roman.repeat(count);
    }
    if(arr[j] === 90){
      arr[j] = 'XC';
    }
    if(arr[j] >= 50 && arr[j] < 90){
      roman = 'X';
      count = (arr[j]-50) / 10;
      arr[j]= 'L' + roman.repeat(count);
    }
    if(arr[j] === 40){
      arr[j]= 'XL';
    }
    if(arr[j] >= 10 && arr[j] < 40){
      roman = 'X';
      count = arr[j]/10;
      arr[j]= roman.repeat(count);
    }
    if(arr[j] === 9){
      arr[j] = 'IX';
    }
    if(arr[j] >= 5 && arr[j] < 9){
      roman = 'I';
      count = (arr[j]-5) / 1;
      arr[j]= 'V' + roman.repeat(count);
    }
    if(arr[j] === 4){
      arr[j] = 'IV';
    }
    if(arr[j]<4 && arr[j]>0){
      roman = 'I';
      count = arr[j]/1;
      arr[j]= roman.repeat(count);
    }
    
  }

  arr = (arr.filter(x => x!==0)).reverse().join('');
  return arr;
}

console.log(convertToRoman(2019));
