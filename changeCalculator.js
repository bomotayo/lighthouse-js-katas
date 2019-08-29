let calculateChange = function(total, cash) {
  let change = {
              twentyDollar: 0, 
              tenDollar: 0, 
              fiveDollar: 0, 
              twoDollar: 0, 
              oneDollar: 0, 
              quarter: 0,
              dime: 0,
              nickel: 0,
              penny: 0 
  };
  let difference = cash - total;

while(difference > 0){
  if(difference >= 2000){
    change.twentyDollar = change.twentyDollar + 1;
    difference = difference - 2000;
  }
  else if( difference >= 1000){
    change.tenDollar = change.tenDollar + 1;
    difference = difference - 1000;
  }
  else if( difference >= 500){
    change.fiveDollar = change.fiveDollar + 1;
    difference = difference - 500;
  }
  else if( difference >= 200){
    change.twoDollar = change.twoDollar + 1;
    difference = difference - 200;
  }
  else if( difference >= 100){
    change.oneDollar = change.oneDollar + 1;
    difference = difference - 100;
  }
  else if( difference >= 25){
    change.quarter = change.quarter + 1;
    difference = difference - 25;
  }
  else if( difference >= 10){
    change.dime = change.dime + 1;
    difference = difference - 10;
  }
  else if( difference >= 5){
    change.nickel = change.nickel + 1;
    difference = difference - 5;
  }
  else if( difference >= 1){
    change.penny = change.penny + 1;
    difference = difference - 1;
  }
}


for(key in change) {
  if(change.hasOwnProperty(key)) {
      var value = change[key];
      if(value === 0){
        delete change[key];
      }
  }
}

return change;

};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));

// { twoDollar: 1, dime: 1, penny: 3 }
// { tenDollar: 1, twoDollar: 1, oneDollar: 1, quarter: 3, penny: 2 }
// { twoDollar: 2, quarter: 3, dime: 2, penny: 4 }


  