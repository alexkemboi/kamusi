let words = ['banana', 'apple', 'orange', 'grape', 'cherry'];
let students=['alex','pius','zack','mary','john'];
let studentsList='';
students.forEach((student)=>{studentsList+=`<li>${student}</li>`});
document.getElementById('word').innerHTML=studentsList;
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


//constructor
function Person(name, age) {
  this.name = name;
  this.age = age;
  
  this.sayHello = function() {
    console.log("Hello, my name is " + this.name);
  };
}

let person1 = new Person("Alice", 30);
let person2 = new Person("Bob", 25);

person1.sayHello(); // output: "Hello, my name is Alice"
person2.sayHello(); // output: "Hello, my name is Bob"
class MyPerson{
  constructor(name,age) {
    this.name =name;
    this.age=age;
  }
  readName(name,age){
    console.log(`My name is ${name} and i have ${age} years old`);
  }
}
const person3=new MyPerson();
person3.readName('alex',20);