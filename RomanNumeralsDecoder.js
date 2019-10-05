/*
Symbol    Value
I          1
V          5
X          10
L          50
C          100
D          500
M          1,000
*/


function solution(roman){
  let arr = [];
  let sum = 0;
  let obj = {
    'I' : 1,
    'V' : 5,
    'X' : 10,
    'L' : 50,
    'C' : 100,
    'D' : 500,
    'M' : 1000
  }

  for(let i=0; i < roman.length; i++){
    arr.push(obj[roman[i]]);
  }

  for(let j=0; j < arr.length; j++){
    if(arr[j] < arr[j+1]){
      sum = arr[j+1] - arr[j];
      j++;
    }
    else{
      sum+=arr[j];
    }
    
  }
 
 return sum;
  
}


console.log(solution('IV'));
/* 
solution('XXI') == 21, 'XXI should == 21')
solution('I') == 1, 'I should == 1')
(solution('IV') == 4, 'IV should == 4')
(solution('MMVIII') == 2008, 'MMVIII should == 2008')
(solution('MDCLXVI') == 1666, 'MDCLXVI should == 1666')
*/