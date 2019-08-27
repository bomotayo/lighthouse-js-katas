let talkingCalendar = function(date) {

  let year = parseInt(date.substring(0,4));
  let month;
  let day = parseInt(date.substring(8));
  let calender;


  switch(parseInt(date.substring(5,7))){
    case 1:
      month = "January";
    break;
    case 2:
      month = "February";
    break;
    case 3:
      month = "March";
    break;
    case 4:
      month = "April";
    break;
    case 5:
      month = "May";
    break;
    case 6:
      month = "June";
    break;
    case 7:
      month = "July";
    break;
    case 8:
      month = "August";
    break;
    case 9:
      month = "September";
    break;
    case 10:
      month = "October";
    break;
    case 11:
      month = "November";
    break;
    case 12:
      month = "December";
    break;
  }

 
   if(day === 1){
    calender = `${month} ${day}st, ${year}`;
   }
   else if(day === 2){
    calender = `${month} ${day}nd, ${year}`;
   }
   else if(day === 3){
    calender = `${month} ${day}rd, ${year}`;
   }
   else if(day > 28 && month === "February" && year % 4 !== 0){
    calender = "Max 28 days in February in non Leap Year";
   }
   else if(day > 29 && month === "February" && year % 4 === 0){
    calender = "Max 29 days in February in Leap year";
   }
   else{
    calender = `${month} ${day}th, ${year}`;
   }

   return calender;
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));
console.log(talkingCalendar("1999/08/03"));
console.log(talkingCalendar("2001/02/29"));
console.log(talkingCalendar("2004/02/29"));
console.log(talkingCalendar("2004/02/30"));
console.log(talkingCalendar("2000/01/01"));



// December 2nd, 2017
// November 11th, 2007
// August 24th, 1987



