/* 
.                                                   WORKFLOW IN JAVASCRIPT
=============================================================================================================================


*/

// consists of loops and conditional statements

console.log("FOR LOOP\n");
//=============================
//Type 1 For loop
//=============================
// initialization;condtion;final expression;

for(let i=0; i<5; i++){
    console.log('Loop: ', i)
};// more like saying let i=0, and if i<5, i=i+1;

/* Syntax
NB.{} -----code block -----
    
    for(some coditions if true){
        do something
    } 
*/

console.log("\nLoooping through an array\n");
const Names=['Victor', 'Ama', 'Anaani'];
for(let i=0; i<Names.length; i++){//Names.length means the total no of items in array/str
    //console.log(Names[i]);//prints out the items based on where i is

    let html=`<div>${Names[i]}</div>`;
    console.log(html); //prints out names in the div tag
}

//=================================================================================================
// For 'for' loop, the initializtion, condition and final expression should be in the parenthesis 
//=================================================================================================


console.log("WHILE LOOP\n")
```================================================================================================
//          TYPE 2--------------While loop
---------------------------------------------------------------------------------------------------
 Unlike for loops, for while loops, the initializtion is specified outside and the final expression
 is specified in the codeblock. Only the condition is specified in the parenthesis


 Eg. syntax:
                let i=0;    initialization
                while(i<5){----condition-----
                    ----other expressions----
                    i++; ------final expression----
                    ----other expressions----
                }
/*================================================================================================*/```


    let i=0; 
    while(i<5){
        console.log(`Loop: ${i}`);
        i++;
    }

/* 
======================================================================================================
.           'do while' loops

used to execute a particular code even if conditionis not true, after which we specify the condition

Example/ syntax
    let i=0; 
    do{console.log(`Loop: ${i}`);
        i++;}
    while(i<5);
======================================================================================================

*/

console.log('Do-while loop\n')
let x = 0;
do {// This code will be executed even the condition is true or false.
    console.log(`Loop: ${x}`);
    x++;
}
while (x < 5);//condition

// if x= 0; Code will be executed till x=4, with x =0
// if x=3; Code will be executed from 3,4, with x=3.
// if x=10; Code will be executed once with x=10.

 
```-------------------------------------------------------------
.               Type 3. If statement(conditional)
================================================================
.   used to execute a certain coed once a condition is satisfied.
    code fails to execute once the statement is 

    Syntax   

 .           if(condition){
                    do something
                                    }

```


const age=20;
if(age<30){
    console.log(`I am ${age} years old`);
}

const ninjas = ['mario','luigi','ryu','shaun'];
if(ninjas.length<=4){
    console.log(`There are ${ninjas.length} ninjas in the club`)
}
//-------------------------if else statement--------------------

//try using if to create a password length checker module.
console.log("\nPassword Example\n")

console.log("if-else")
const password='lacis-asdasda@sdasd';
if(password.length<8){
    console.log('Password is not long enough');
} else{
    console.log('Password is long enough');
}
console.log('\n')

//--------------------if else if statement (to check multiple conditions-----------------
console.log("if-elseif") 
if(password.length>12){
        console.log("Password is very strong");
 } else if(password.length>7) { console.log("Password is long enough");
} else { console.log("Password is weak")}

console.log("\n")

/* ===========================================================================
.                   Using logical Operators 'OR (||)' and 'AND (&&)'
   ===========================================================================
    || ------ returns true if at least one of the conditions is fulfilled
    && ------ returns true if and only if all of the conditions are fulfilled

*/
console.log("LOGICAL STATEMENTS")

if(password.length>=12 && password.includes('@')){
    console.log("Password is very strong")
} else if(password.length>7 || password.includes('@') && password.includes('.')){
    console.log("Password is strong")
} else{ "password is weak"}

console.log('\n')

/*=========================================================================
.           Using the logical NOT (!) Operator
___________________________________________________________________________
    Used to execute the condition if the condition is false
    the conditin in the if statement by default is always true
    bringing the '!' in front of the condition makes the statement false
*/

console.log("LOGICAL NOT OPERATOR", 'Not true(!true)=', !true, 'Not false(!false)=', !false)
console.log('\n')

//Break and continue in loops
console.log("BREAK AND CONTINUE STATEMENTS")
const scores=[50,75,0,10,35,100,20,66];
for(i=0; i<scores.length;i++){
    if(scores[i]===0){
        console.log(`i can't log the score of ${scores[i]}, so i will skip this`); 
        continue; //if score is 0, it will skip this code and run the next iteration
    } 
    console.log(`Your score: ${scores[i]}`);
    if(scores[i]===100) {
        console.log("congrat, you got the top score!!"); break
    }  // if score reaches 100, break out of loop
}


```     -----------------------------------------------------------------------------------------------------------
.                    Switch and Case statement

             simulates the if-else-if (morelike a grading system)
               *****syntax*******

                var variable_name=val

                switch(variable_name){
                case arguments(value):
                her arguments;break;
                 default:
            default argument;   triggered when the value entered is not present in any of the cases
    }
--------------------------------------------------------------------------------------------------------------------
      
```

console.log("\nSWITCH STATEMENT")
const grade='A';
switch(grade){
    case 'A':
        console.log("You got grade 'A'");break;
    case 'B':
        console.log("You got grade 'B'"); break;
    case 'C':
        console.log("You got grade 'C'"); break;
    case 'D':
        console.log("You got grade 'D'"); break;
    case 'E':
        console.log("You got grade 'E'"); break;
    default :
        console.log("Grade not Valid"); break;
}



```===================================================================================

.                        Global and local variable

    global varibles -------------accessible anywhere in the file/code
    local variables -------------accessible only in a certain codebo=lock section

====================================================================================
```

console.log("\nGLOBAL & LOCAL VARIABLES")
let MyAge=25; //Global variable
console.log("global variable = ",MyAge)
if(true){let MyAge=20;
        let MyName='Lextyme';
   // MyAge=33;//alters the value of the global if not declared at the start  of code
    console.log("Inside 1st code block after altering global var ",MyAge,MyName)
     MyAge=200;//to set up a local variable, we need to declare the variable
    console.log("Insde 1st code block ",MyAge);

    if(true){
       // console.log("Inside the 2nd codeblock before redeclaring",MyAge,MyName);
       //if nothing is redefined, it oicks up the previous local variable.
        let MyAge=150;
        let MyName='Kweku';
        console.log("Inside the 2nd code block after redeclaring ",MyAge,MyName)
    }
}

console.log('Outside the codeblock ',MyAge);
//======================================
//||  We can change const in blocks   ||
//======================================












