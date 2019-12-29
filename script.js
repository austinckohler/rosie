/**************************************
* Variable and Data Types
*/ 

/*var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);

/*******************************
*Variable naming rules 
*
var 3years = 3; error because it started with a number or symbol 
var john/mark = 'John and Mark' error because you can't use the / in the variable
var if = 23 error because if is a javascript keyword
*/

/*****************************
* Variable mutation and type coercion
*/

/*var firstName = 'John';
var age = 20;

// Type Coercion
console.log(firstName + ' ' + age); //joining strings and type coersion 

var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

//Variable Mutation
age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last Name?');
console.log(firstName + ' ' + lastName);*/

/******************************
* Basic Operators
*/
/*var year, yearJohn, yearMark;
now = 2018;
ageJohn = 28
ageMark = 8
//Math Operators
yearJohn = now - ageJohn;
yearMark = now - ageMark;

console.log(yearJohn);
console.log(now + 65437);
console.log(now * .5);
console.log(now / 2018);


//Logical Operators
var johnOlder = ageJohn > ageMark;

console.log(johnOlder);

//Type of Operator
console.log(typeof johnOlder); //boolean
console.log(typeof ageMark); //number
console.log(typeof 'John is older than Mark'); //string

var x;
console.log(typeof x); // undefined

*/

/**********************
* Operator Precedence 
*/
//multiple operators
/*now = 2019;
yearJohn = 1991;
fullAge = 18;
isFullAge = now - yearJohn <= fullAge; // which operator would come first?  this is false

//we want ---  now - yearJohn ---- to hapen first then determine if the answer is greater than or equal to fullAge
console.log(isFullAge);

//use this website for operator precedece https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
// in this example, we can see that the minus sign has a higher precedence than the greater than equal

//grouping
ageJohn = now - yearJohn;
ageMark = 35;
//average = ageJohn + ageMark / 2; the division operator has a higher precedence than the addtion so this will be wrong
// what we need to do is use the grouping operator (ageJohn + ageMark) / 2 to make sure the + takes precedance
average = (ageJohn + ageMark) / 2;
console.log(average);
console.log(now-yearJohn);

//multiple assignments 

x = y = (3 + 5) * 4 - 6; //8 * 4 - 6 // 32-6 // 26
console.log (x, y); //x is equal to y  and y = 26 so x = 26

//2 + 4 + 5  this operator is from left to right but not all operators are L to R
//assignment operator is right to left 
// for example, thats why x = y = (3 + 5) * 4  works it reads the (3+5) * 4-6 before saying y=26 and only then does it recognize that x=y which is 26


//More operators
//x = x * 2;
x*= 2; // these operators are cleaning up code and they mean the same thing
console.log(x);
x+= 10;
console.log(x);

x++ // adds +1 
console.log(x);
x--// subtracts -1
console.log(x);

*/

//coding challenge 1
markHeight = 3;
johnHeight = 4;
markMass = 52;
johnMass = 75;
markBmi = markMass / markHeight^2; 

console.log(markBmi);

johnBmi = johnMass / johnHeight^2;
console.log(johnBmi);
isHigherBmi = johnBmi > markBmi;
console.log(isHigherBmi);
console.log('is johns BMI higher than mark ' + isHigherBmi);



//new stuff


