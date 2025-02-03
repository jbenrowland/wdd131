/*Activity #1
const PI = 3.14;
const radius = 3;
let area = 0;
area = radius * radius * pi;
radius = 4;
area = radius * radius * pi;
console.log("Area2:", area);
This code takes into account the radius and the constant value of PI, and then takes those values and when given a radius it 
calculates the area as defined in the program and the console displays it*/ 

/*Activity 2*/
const PI = 3.14;
let area = 0;

function circleArea(radius) {
  const area = radius * radius * PI;
  return area;
}
area = circleArea(3);
console.log("Area1:", area);
// radius = 4;
area = circleArea(4);
console.log("Area2:", area);

/*this code calculates the area of a circle*/