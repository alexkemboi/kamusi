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
const sortedStudents = sortValues(students);
let tableData = "";
sortedStudents.forEach((names) => {
  tableData += `<tr style="background-color: #fff;"><td style="padding: 10px; border: 1px solid #ddd;"><input type="checkbox"/></td><td style="padding: 10px; border: 1px solid #ddd;">John</td><td style="padding: 10px; border: 1px solid #ddd;">${names}</td><td style="padding: 10px; border: 1px solid #ddd;"><button class="clickName">Click</button></td></tr>`;
});
document.getElementById("tBody").innerHTML = tableData;

const tbody = document.getElementById("tBody");
tbody.addEventListener("click", (event) => {
  if (event.target.classList.contains("clickName")) {
    console.log("working");
    const row = event.target.parentNode.parentNode; 
    const name = row.children[2].textContent; // Get the name value from the second td element
    const john = row.children[1].textContent; // Get the John value from the first td element
    alert(`Name: ${name}, John: ${john}`);
  }
});

const checkboxBtn = document.getElementById("checkboxBtn");
checkboxBtn.addEventListener("click", () => {
  const table = document.getElementById("tableData");
  const rows = table.getElementsByTagName("tr");
  const checkedRows = [];
  for (let i = 0; i < rows.length; i++) {
    const checkbox = rows[i].querySelector('input[type="checkbox"]');
    if (checkbox && checkbox.checked) {
      const cells = rows[i].getElementsByTagName("td");
      const rowContent = [];
      for (let j = 1; j < cells.length; j++) { // start at j = 1 to skip the checkbox column
        rowContent.push(cells[j].textContent);
      }
      checkedRows.push(rowContent);
    }
  }
  console.log(checkedRows);
  if (checkedRows.length > 0) {
    alert(`Checked rows:\n${JSON.stringify(checkedRows)}`);
  } else {
    alert("No rows checked.");
  }
});


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