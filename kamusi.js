let words = ['banana', 'apple', 'orange', 'grape', 'cherry'];
let students=['alex','pius','zack','mary','john'];
// Sort the array in reverse alphabetical order
function sortValues(values){
  
const sortedValues= values.sort();
return sortedValues;
}
console.log(sortValues(students));

//switch statement
let day = 5;
let dayName;

switch (day) {
  case 0:
    dayName = "Sunday";
    break;
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  case 6:
    dayName = "Saturday";
    break;
  default:
    dayName = "Unknown";
}

console.log("Today is " + dayName);
