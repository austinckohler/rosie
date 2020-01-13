///////////////////////////////////////
// Execution Contexts:
/* a box, or container, or a wrapper which stores variables and in which a piece of our 
code is evaluated and executed.

The default: global execution context
    - code that isn't inside a function
    - associated with the global object
    - aka the window object

lastName === window.lastName // true

each time we call a function it gets its own execution context and the new context is on top of the current context

execution context object:
VAriable Object: contains arguements and variable and function declarations
Scope Chain: contains current VO and VO of its parents
'This' variable:

1. Creation Phase
- Creation of Variable Object (VO)
- Creation of scope chain  
- 'this' variable is determined
2. Execution Phase:
- the code of the fdunction that is generated the current execution cutext is run line by line 

VO: 
- the arguement object is created, containing all the arguements that were passed into the function
- code is scanned for the function declarations: for each function, a property is created in the VO, pointing to the function
- all functions stored in the VO
- code is scanned for variable declarations: for each variable, a property is created in the VO and set to undefined.  
- are available before the phase starts: hoisting
*/





///////////////////////////////////////
// Lecture: Hoisting
calcAge(1965);

//function delcaration
function calcAge(year) {
    console.log(2020 - year);
}

//retirement(1990); 

//this is a function expression. hoisting  only works for function declarations 
retirement = function(year) {
    console.log(65 - (2020 - year));
}

// Variables
console.log(age); // this will return undefined because code is scanned for varible declarations
var age = 23;
console.log(age);

function foo()  {
    console.log(age);
    var age = 65;
    console.log(age);
}
foo();
console.log(age);

// biggest takeaway from hoisting:
// we can use function declaration before we use them in the code


///////////////////////////////////////
// Lecture: Scoping

/* 
Scoping answers the question "where can we access a certain variable?"
    - each function creates a scope: the environment in which the variables it defines are accessible
    - lexical scoping: where something is written in the code, function that is written within another function 
        gets access to the scope of the outer function or parent function  
*/
// First scoping example


/*var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}

*/


// Example to show the differece between execution stack and scope chain


var a = 'Hello!'; //global scope includes var = a and the first function and third function
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third() //third function was called from second function because of the scope chain
    }
}


function third() {
    var d = 'John';
    console.log(a + d); //c is undefined, 3rd function can't access variable c because execution stack is diffwerent from scope chain
}

// EXECUTION STACK: order in which functions are caled
// SCOPE CHAIN: order in which fuctions are written lexically (written within other functions)
// since function three is called before functions one and two it can't access variables B & C



///////////////////////////////////////
// Lecture: The this keyword

/*
this: 
    - regular function call: the default, points towards the global object (windown object, in the browser)
    - method call: the this variable points to the object that is calling the method
    - this keyword is not assigned a value until a function where it is defined is actually called
        - techinally only assigned a value as soon as an object calls a method.

for example



/parentdirectory/subdirectory/another/subdirectory/

//objects: unique entity which has some property and methods
//class: blueprint of an object. class is a template while object are instances of the class





