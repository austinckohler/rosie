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
/*markHeight = 3;
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
/*firstName = 'John';
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

/*job = 'instructor';
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

//coding project 2

*/ 
/* = (89 + 120 + 103) / 3;

avgMike = (116 + 94 + 123) / 3;
firstName = 'John'

console.log(avgJohn, avgMike);

if (avgJohn >= avgMike)	{
	console.log('John\'s team has the highest average score with a score of 104. ');
} else {
	console.log('Mike\'s team has the highest average score with a scrore of 111. ');
}



avgJohn = (89 + 120 + 143) / 3;

avgMike = (116 + 94 + 123) / 3;

console.log(avgJohn, avgMike);

if (avgJohn >= avgMike)	{
	console.log('John\'s team has the highest average score with a score of 117.33. ');
} else {
	console.log('Mike\'s team has the highest average score with a scrore of 111. ');
}


avgMary = (97 +134 + 156) /3;

console.log(avgMary);

if (avgMary > avgMike && avgJohn)	{
	console.log('Mary\'s team has the highest avgerage score');
} else {
	console.log('Mike or John has a higher average score. ');
}


//coding challenge solution 


avgJohn = (20 + 120 + 143) / 3;
avgMike = (119 + 94 + 123) / 3;
avgMary = (119 + 94 + 123) /3;
console.log(avgJohn, avgMike, avgMary);

/*if (avgJohn > avgMike)	{
	console.log('John\'s team has the highest average score with a score of ' + avgJohn);
} else if (avgMike > avgJohn) {
	console.log('Mike\'s team has the highest average score with a score of ' + avgMike);
} else {
	colsole.log('There is a draw. ');
}



if  (avgJohn > avgMike && avgJohn > avgMary) {
	console.log('John\'s team has the highest average score with a score of ' + avgJohn);
} else if(avgMike > avgJohn && avgMike > avgMary) {
	console.log('Mike\'s team has the highest average score with a score of ' + avgMike);
} else if(avgMary > avgMike && avgMary > avgJohn) {
	console.log('Mary\'s team has the highest average score with a score of ' + avgMary);
} else {
	console.log('There is a tie. ');

}

*/

/*******************************

FUNCTIONS - piece of code you will use ofton, they are like  containers that hold lines of code and can return results
*/

/*function calculateAge(birthYear) // this is like a variable in  a function 
{
	return 2019 - birthYear;
}

ageJohn = calculateAge(1991); // this is now the function
ageMike = calculateAge(1994);
ageMary = calculateAge(1992);
console.log(ageJohn, ageMary, ageMike);


function yearUntilRetirement(year, firstName)
{
	age = calculateAge(year);
	retirement = 65 - age;

if (retirement > 0) { 
	console.log(firstName + ' retires in ' + retirement + ' years. ');
} else {
	console.log(firstName + ' has already retired. ')
}
	}

yearUntilRetirement(1991, 'John');
yearUntilRetirement(1994, 'Mike');
yearUntilRetirement(1992, 'Mary');

//2 arguements 1991 which is year and 'firstname' is john 


/*************************
FUNCTION STATEMENTS AND EXPRESSIONS	
*/

//Function declaration
//function whatIsYourJob(job, firstName){}
//

//FUNCTION expression 
/*whatIsYourJob = function(job, firstName)	{
	switch(job) {
		case 'teacher':
		case 'instructor':
			return firstName + ' teaches kids how to code. ';
		case 'driver':
			return firstName + ' drivers an uber in denver. ';
		case 'designer':
			return firstName + ' designs websites. ';
		default:
			return firstName + ' does something else. ';
	}
}

console.log(whatIsYourJob('instructor', 'John'));
console.log(whatIsYourJob('runner', 'Mark'));
console.log(whatIsYourJob('driver', 'Mary'));

//statements and expressions do not only apply to functions

//expressions: pieces of code that always produce a value
// for example, if (avgJohn > avgMike) is an expression that needs a value 
//statements do not produces immediate results and only produce actions
//if else statements, while loop, function declaration 

/*************************
	ARRAYS - collections of variables that have different data types
  arrays are 0 based
	*/
//NEW ARRAY
/*names = ['John', 'Mark', 'Mary'];
years = new Array(1990, 1969, 1948);

console.log(names[0]); // finds specific name from array 
console.log(names.length); // shows how many elements are in the array

//MUTATING ARRAY DATA
names[1] = 'Ben';
names[5] = 'Jane';
console.log(names);

//DIFFERENT DATA TYPES
john = [ 'John', 'Smith', 1991, 'teacher', false];

//push method - add element at the end of the array. 
john.push('blue');
//unshift adds an element to the beggining of the array
john.unshift('Mr.');
console.log(john);

//pop removes last element from array
john.pop()
john.pop()
//shift removes the first element from the array
console.log(john);

// indexOf shows which order the john array 
console.log(john.indexOf(1991)); 

//this is a great way to see if the elemement is in the array or not
//we know the john.indexOf('designer') is not part of the array meaning it would return -1 
// ? mark asks if john.indexOf('designer') is equal to -1 then john isn't a desinger

isDeisgner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer';
console.log(isDeisgner);

*/
total_15 = (124 + (124 * .15));
total_20 = (48 + (48 * .20));
total_10 = (268 + (268 * .10));
console.log(total_15, total_20, total_10);

total_15 = total_15 - 124;
total_20 = total_20 - 48;
total_10 = total_10 - 268;
console.log(total_15, total_20, total_10);

tip = [18.59, 9.60, 26.80];
console.log(tip);

totalWithTip = [142.6, 57.6, 294.8];
console.log(totalWithTip);

// teachers solution

function tipCalc(bill)	{
	var percentage;
	if (bill < 50) {
		percentage = .2;
	} else if (bill >= 50 && bill < 200) {
		percentage = .15;
	} else {
		percentage =.1;
	}
	return percentage * bill;
} 

/*var bills = [124, 48, 268];
var tip = 	[tipCalc(bills[0]),
		tipCalc(bills[1]),
		tipCalc(bills[2])];

console.log(bills)

var finalValue = [bills[0] + tip[0],
				 [bills[1] + tip[1],
				 [bills[2] + tip[2]]

console.log(finalValue);
/*














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


//LOOPS aND iteration 
//this is why loops would be useful, we don't need to console.log() 1-4 we could do a loop
console.log(1);
console.log(2);
console.log(3);
console.log(4);
//FOR LOOP
for (var i = 0; i < 10; i++) 	{
	console.log(i);
}

// i is standard for a counter variable
// i = 0, 0 < 10 is true, then log i to console, i++ 
//i = 1, 1 <10, true, log to console, i++
//....
//i = 9, 9 <10, true, log to console, i++
//i = 10, 10 <10, FALSE , exit the loop

john = ['John', 'Smith', 1991, 'designer', false];
for (i = 0; i < john.length; i++)	{
	console.log(john[i]);
}

//while loop only has condition 
//WHILE LOOP
i = 0;
while(i < john.length){
	console.log(john[i]);
	i++;
}

//continue and break statements 
//continue statements are used for quitting the current iteration and contunue to the next one
/*john = ['John', 'Smith', 1991, 'designer', false];
for (i = 0; i < john.length; i++)	{
	if (typeof john[i] !== 'string') continue; //!== means different strict different operator. this means !== different than string than continue 
	console.log(john[i]);
}
//breaks exits current iteration and current loop
for (i = 0; i < john.length; i++)	{
	if (typeof john[i] !== 'string') break; //!== means different strict different operator. this means !== different than string than continue 
	console.log(john[i]);
}

//best way to understand continue vs break 
//continue will continue loop past pieces that are not strings
//break end the loop as soon as it finds something that isn't a string


//BACKWARDS LOOP
for (i = john.length -1; i >= 0; i--)	{
	console.log(john[i]);
}
*/
//coding challenge 5
john = {
	fullName: 'John Smith',
	bills: [124, 48, 268, 180, 42],
	calcTips: function() { //inside of this calctips method we have a loop that calculates all of the 5 tips
		this.tips = []; //empty arrays so we can fill them with the i 
		this.finalValues = [];

		for (i = 0; i < this.bills.length; i++) //this.bills.length reads bills array then length 
		{
			//determine percentage based on tipping rules
			var percentage;
			bill = this.bills[i];

			if (bill < 50)	{
				percentage = .2;
			} else if (bill >= 50 && bill < 200) {
				percentage = .15;
			} else {
				percentage = .1;
			}
		
		// add results to corresponding arrays
		this.tips[i] = bill * percentage;
		this.finalValues[i] = bill + bill * percentage;
		}
	}
}


mark = {
	fullName: 'Mark Gold',
	bills: [77, 475, 110, 45],
	calcTips: function() {
		this.tips = [];
		this.finalValues = [];

		for (i = 0; i < this.bills.length; i++) 
		{
			//determine percentage based on tipping rules
			var percentage;
			bill = this.bills[i];

			if (bill < 100)	{
				percentage = .2;
			} else if (bill >= 100 && bill < 300) {
				percentage = .1;
			} else {
				percentage = .15;
			}
		
		// add results to corresponding arrays
		this.tips[i] = bill * percentage;
		this.finalValues[i] = bill + bill * percentage;
		}
	}
}


function calcAverage(tips) {
	sum = 0;
	for (i = 0; i < tips.length; i++) {
		sum = sum + tips[i];  
//example of how this works lets say we have the following (tips) array [2, 6, 4] -> 
//sum = 0  // 0 = 0 +2 = 2 new sum = 2 
//next iterration 2 = 2 + 6 = 8 
//8 = 8 + 4 = 12 
//final sum is 12 
	}
	return sum / tips.length;
}
// 12 / 3 = 4 
//4 is the average

//calculations
john.calcTips();
mark.calcTips();


john.average = calcAverage(john.tips); //john.tips = the array in which all the tips are stored
mark.average = calcAverage(mark.tips);

console.log(john, mark);

if (john.average > mark.average) {
	console.log(john.fullName + ' has a higher average tip with ' + john.average)
} else if (mark.average > john.average) {
	console.log(mark.fullName + ' has a higher average tip with ' + mark.average)
}


