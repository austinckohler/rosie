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


/*console.log('Hello World');

firstName = 'John';
lastName = 'Doe'; //string
age = 28; //number

console.log(firstName + ' is age ' + age);


//variable is a container in wich we can store as a value

//different variable types
/* 

1. number
2. string
3. boolean
4. undefined
5. null

*/ 

/*fullAge = true; //boolean 
console.log(fullAge);

//camelcase = firstName, notice Name is uppercase

//job;

//console.log(job); // undefined 

job = 'teacher';
console.log(job); 

// 3years = 3;


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
/*markHeight = 3.23; //meters
johnHeight = 4.78; //meters
markMass = 52; //kg
johnMass = 75; //kg
markBmi = markMass / (markHeight * markHeight); 

johnBmi = johnMass / (johnHeight * johnHeight);

console.log(markBmi, johnBmi);



isHigherBmi = johnBmi > markBmi;
console.log(isHigherBmi);
console.log('is john\'s BMI higher than mark\'s? ' + isHigherBmi);

*/

/***************************************
* IF / else statements
*/

//allows us to take decisons using code

/*firstName = 'John';
maritalStatus = 'single'


if (maritalStatus === 'married') //not necessary because we created a boolean isMarried below
 {
	console.log(firstName + ' is married!');	
}
else {
	console.log(firstName + ' will hopefully marry soon :)');
}


isMarried = true;

if (isMarried) {
	console.log(firstName + ' is married!');	
} else {
	console.log(firstName + ' will hopefully marry soon :)');
}

markHeight = 3.23; //meters
johnHeight = 4.78; //meters
markMass = 52; //kg
johnMass = 75; //kg
markBmi = markMass / (markHeight * markHeight); 

johnBmi = johnMass / (johnHeight * johnHeight);

console.log(markBmi, johnBmi);


if (markBmi > johnBmi) {
	console.log('Mark\'s BMI is higher than John\'s.');
} else {
		console.log('John\'s BMI is higher than Mark\'s.');

}

//bmi is higher than the bmi of john, this will give a true or false value
/*isHigherBmi = johnBmi > markBmi;
console.log(isHigherBmi);
console.log('is john\'s BMI higher than mark\'s? ' + isHigherBmi);
*/

/*************************************
* Boolean Logic
*/

//AND (&&) => true if  ALL are true
//OR (||) => true if ONE is true
// NOT (!) => inverts true/false values

/* else if statements 

firstName = 'John';
age = 27;

if (age < 13)	{
	console.log(firstName + ' is a child.');
} else if (age >= 13 && age < 20) { //between 13-20 // age >= 13 AND age < 20
	console.log(firstName + ' is a teenager.');

} else if (age >= 21 && age <= 25)	{
		console.log(firstName + ' is an adolecent.');
}
else  if (age > 26 || age > 25)	{
		console.log(firstName + ' is an adolecent-adult');
}
else {
		console.log(firstName + ' is an adult.');
}

firstName = 'Jack';
age = 32;
isMarried = true;

if (age < 28 )	{
	console.log(firstName + ' married at age ' + age);
}
else {
	console.log(firstName + ' isn\'t married.' )
}

console.log(firstName + ' isn\'t married yet, but will be married in 5 months. ' + isMarried);

*/

/*************** 
* Turnery Operation and Switch statements 
/*

//conditional operator allows us to write an if else statement all in onne line 

*/
 // Turnery Operators
 firstName = 'John';
 age = 16 

 age >= 18 ? console.log(firstName + ' drinks beer. ')
 :  console.log(firstName + ' drinks juice. '); 

 //the parts that interact with the operarants 
 //condition = age >=
 //if block is the firstName + drinks beer
 //else block is the firstName + drinks juice


drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

//beer if greater than 18 juice if not then assigned to drink varibale
//turnery operater is before assignemnt  operator 

/*if (age >= 18) {
	drink = 'beer';
} else {
	drink = 'juice';
}

this is the same thing as the turney operator 

*/
// SWITCH STATEMENT 
//else if statement with multiple else if clauses 

job = 'instructor';
switch (job)	{
	case 'teacher':
	case 'instructor':
		console.log(firstName + ' teaches kids how to code.');
		break;
	case 'driver': 
		console.log(firstName + ' drives an uber in denver.');
		break;
	case 'designer':
		console.log(firstName + ' designs websites.');
		break;
	default:
		console.log(firstName + ' does something else.');
}



//3 different ways to write condistional code
//else if statement'
//turnary 
// switch

//truthy and falsey values
//falsey = false in if else statement
//falsey: undefined, null, 0 , empty strings '', not a number 
//truthy: all values that are true in if else statements


height = 23;
if (height || height === 0)	{
	console.log('Variable is defined');
} else {
	console.log('Variable has NOT been defined');
}

// == does type coersion 

//equality operators
if (height == '23') {
	console.log('The == operator does type coercion.');
}

// always use the === 

//new





















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
