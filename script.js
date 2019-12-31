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

// coding challenge 3

function tipCalculator(bill) {
	var percentage;
	if (bill < 50){
		percentage = .2;
	} else if ( bill >= 50 && bill < 200) {
		percentage = .15;
	} else {
		percentage = .1;
	}
	return percentage * bill;
}

bills = [124, 48, 268];
tips = [tipCalculator(bills[0]),
		tipCalculator(bills[1]),
		tipCalculator(bills[2])];

total = [bills[0] + tips[0],
		bills[1] + tips[1],
		bills[2] + tips[2]];

console.log(tips, total);

//objects and properties
//objects are the single most important feature of the javascript language 

// naming each value with value 
//object defines key value pairs 
//objects group together diff variables that belong together but have no order
//one key difference between objects and arrays
//arrays order matters alot and objects it doesn't

//object literal = using curly brackets
john = {
	firstName: 'John', //firstName is key and john is value. key value pair 
	lastName: 'Smith',
	birthYear: 1991,
	family: ['jane', 'mark', 'bob', 'emily'], 
	job: 'teacher',
	isMarried: false
};

console.log(john.firstName); 
console.log(john['lastName']);
x = 'birthYear' // mutating data
console.log(john[x]);

job = 'designer';
john['isMarried'] = true;
console.log(john);

//new object syntax
jane = new Object();
jane.firstName = 'Jane';
jane.birthYear = 1952;
jane['lastName'] = 'Smith';
console.log(jane);

//methods
//in the last set we learned that objects can hold different types of data like arrrays or other objects
//this set we will learn more about how to use a function in an object

john = {
	firstName: 'John', //firstName is key and john is value. key value pair 
	lastName: 'Smith',
	birthYear: 1991,
	family: ['jane', 'mark', 'bob', 'emily'], 
	job: 'teacher',
	isMarried: false,
	calcAge: function(birthYear) {
		this.age = 2019 - this.birthYear; //keyword (this) = the current object / john.birthyear 
	}
};
//this = very important understand how this works

john.calcAge();
console.log(john);
//how to calculate the age of john? 

//coding challenge 4 
john = {
	fullName: 'John Smith',
	mass: 52, // kg
	height: 3, //meters
	calcBMI: function() {
		this.BMI = this.mass / (this.height * this.height);
		return this.BMI;
	}
}
john.calcBMI();

mark = {
	fullName: "Mark Gold",
	mass: 52,
	height: 3,
	calcBMI: function()	{
		this.BMI = this.mass / (this.height* this.height);
		return this.BMI;
	}
}
mark.calcBMI();
console.log(john, mark);

/*if (john.firstName + john.lastName + this.BMI > mark.firstName + mark.lastName BMI) {
	john.calcBMI();
} else {
	mark.calcBMI();
}

console.log();*/

if (john.BMI > mark.BMI) {
	console.log(john.fullName + ' has a higher BMI with ' + john.BMI);
} else if (mark.BMI > john.BMI) {
	console.log(mark.fullName + ' has a higher BMI with ' + mark.BMI);
} else {
	console.log('They have the same BMI');
}
