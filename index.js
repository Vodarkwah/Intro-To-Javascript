//alert("This website is developed by Lextyme");  ----this is more like a popup before site runs
//console.log('val');  --- used to run code from js to the console on the browser

/*
===============================================================================================================
.                                     INTRODUCTION TO JS  
===============================================================================================================

.                                       Basic JavaScript Syntax
.                         '''''''''''''''''''''''''''''''''''''''''''''''''''
*/
//          CREATING VARIABLES IN JS


let age = 20;       //Type 1: Using 'let' (we can change the values at any pt in time)
let year= 2001;

console.log(age,year);

age = 30; // used to override the initial variable value



const past = 100;   // TYPE 2: Using 'const' (value is fixed and can't be changed)
console.log(past);

go=16;
console.log(go);
go=121;
console.log(go);


var prm = 7070; // TYPE 3: Using 'var'  ---- older way of assigning variables

/* 
    STRING METHODS

    let email="vodarkwaah@gmail.com";


*/
let email = "vodarkwaah@gmail.com";
a = email.toUpperCase();
console.log(a);

console.log(email.indexOf('@'));//Position of @ in email
console.log(email.lastIndexOf('@'))//Last position of @ in email

/* 
OTHER STRING METHODS

==== slice() : takes a section from the string
==== substr() : takes a substring from text. Difference b/n this and slice is that 
the 2nd argument in substr counts the number of characters not the position. 
==== replace() : replaces the first occurrence of the argument with the second argument
*/

let result=email.slice(0,10);//from first to the 11th element
console.log(result);

result=email.substr(4,5);//from 5th char to 9th char(moves 5 char away from start or gets 5 characters)
console.log(result);

result=email.replace('a','o');//replace first a with o
console.log(result);

// TEMPLATE STRINGS (I think its not working in 2022)
// We use ${variable name} to incorporate the value of the variable into the string
//NB. use backticks(``) not normal quotes('')

 let vim ='My email address is '+ email +'. i am ' +past +'years old.';
console.log(vim);


/* ----------ARRAYS-----------
these look more like lists in python*/

let names= ['kwesi','ama',12,13];
console.log(names);
//console.log(names[1]);//prints out the 2nd element

//ARRAY METHODS

let results=names.join('**');//joins the items as a str and separate them using '**'
console.log(results);// we can use ' ','-','#',etc
console.log(names.indexOf(12))//looking for the position of 12 in names

names= names.concat(['Victor','Anaani']);
console.log(names);// concat is used to add items to the array

console.log(names.push('Lexab'));//fuction displays the length of the var-names after adding(push) a new variable
console.log(names);//result after altering the var-names

console.log(names.pop());//removes the last item and returns the item poped off
console.log(names);

//null ------ type of data structure that assigns an empty set to the variable
//undefined ------ type of data structure that pops up if the variable is undefined

let myAge=null;
console.log(myAge,myAge+=3,`I am ${myAge} years old`);//know as template literal
console.log(`My name is Victor.\nYou can reach me on "${email}."`)

console.log("\nBOOLEANS \n")
/*BOOLEANS    True/False Statement*/
console.log(names.includes(143));//returns true if 13 is in names, else returns false
console.log(names.includes('ama'));

console.log("Comparison using numbers")
//COMPARISON OPERATORS
let num=30;
console.log(num == 30);
console.log(num != 30);
console.log(num >= 20);
console.log(num <= 20);
console.log(num > 130);
console.log(num < 130); // All these return booleans

console.log("Comparison using strings")
let myName="Victor"
console.log(myName == "Victor")
console.log(myName != "victor")
console.log(myName >= "VICTOR")
console.log(myName > "Solace")
console.log(myName > "zictor")



//TYPES OF COMPARISON

//Loose COMPARISON[Type 1]  we use == for loose comparison.
console.log("Loose COMPARISON")
console.log(num==30,num=='30.0'); //both returns true
console.log(num != 20, num != '30.0');//true False


//Strict COMPARISON[Type 2] We use === for strict comparison.
console.log("Strict COMPARISON")
console.log(num===30,num===30.0);//true true
console.log(num !== '30', num !== '30.0');//true true
console.log('\n')



//TYPE CONVERSION  ----- Turning a var from one datatype to aonther.
console.log('TYPE CONVERSION')

let A1 = '100';

console.log(A1+1); //concatenates the 1 to the A1 since A1 is a string
console.log(Number(A1)+1, 'num'); // Number(arg) is used to convert str num to int num 
// we can use 'typeof arg' to know the type of data type.
console.log(typeof A1);

// we can convet to boolean value
//Eg Boolean(value) true for all argument except 0 and empty str'' which comes out as false.



