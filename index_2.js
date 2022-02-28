/*==========================================JAVASCRIPT FUNCTIONS===============================================
helps us store a certain code(reusable code) we want to run. this prevents us to stop typing repetitive codes

*/

```/*      ============DECLARING FUNCTIONS============================================

************SYntax***************************

    function funtion_name(){
        codes with the necessary conditions
    }

            we invoke function by using 'function_name()'

************************************************************************************
    ....................
    FUNCTOIN EXPRESSION| (we assign a variable name to the function)
    ````````````````````
    ***************Syntax*******************

    const var_name = functoin(){
        code
    }
        we invoke fuctoin by var_name()

*/```

console.log("FUNCTIONS\n")
function greet(){
    console.log("Hello tthere!!!")
}

const speak = function(){
    console.log("I'm funtoin speak")
}

        speak()
        greet()//invoked. No need for console.log()



/*========================================Creating functions with arguments and default values========================
    
    Const var_name = function(val1 ='default_val1', val2 ='default_val2',val3='default_val3'){
     conditions that involve val1-val3
 }               ***********  (REGULAR FUNCTION)  *******************

        ******************************ARROW FUNCTION*****************************
        SYNTAX

        const var = (arg) => {conditions};
        _______________________________________


********NB: Default val is the outpu val when no argument is inputted in the function**********************
*/

const Greet= function(name="Kofi", age=20, year=2000){
    console.log(`My name is ${name}. I am ${age}years and was born in ${year}`);
}


Greet()// Prints the default values
Greet('Victor',16,2006)// overrides the default values. NB. Arrangement is very important



/*=============================Functions that return values========================================
    ***********syntax********************************
    const calc_area = function(radius){
        return calculations
    }
    ///////////Return stores the value obtained after computation////////////////



*/
console.log("\nREGULAR FUNCTION")
const calc_area = function(radius){
    return 3.142 * radius**2;
}; // does not print out the saved value. the value is reused afterstored in another variable

const circle = calc_area(10);//stored the calc value in the circle
console.log(circle)


// Calling another function into a function
const calc_volume = function(radius,base){
    return (1/3)*calc_area(radius)*base;
}               //function call

const cylinder = calc_volume(3.142,7);
console.log(cylinder)



console.log("\nARROW FUNCTIONS");

const AREA = (radius) => { return 3.142*radius**2;}
const CIRCLE = AREA(10)
console.log(`Area is ${CIRCLE}`)


const VOL = (radius,base) => {return (1/3)*AREA(radius)*base;
}

const CYLINDER = VOL(10,7);
console.log(`The volume is ${CYLINDER}`)


```/*=============================METHODS AND FUCTOINS===============================================================
        methods and functions behave the same way. the major difference is how they are invoked into a function
        and where they are defined.
        METHODS are defined by data type, but functions need to be creted.

        eg. let name = 'ama'
            console.log(name.toUpperCase());------------method. 
            Methods affects the value itself

````````````````````````````````````````````````````````````````````````````````````````````````````````````````````
.                *******************Callback Functions***********

These are functions that is passed as an argument to another functoin so that it can be executed in the other function

--------------------------------------------------------------------------------------------------------------------

*/```

//             func argument(more like the functoin name before being converted into a callback function)
const myFunc = (Lex) => { //myFunc is the function that will contain our callback function
    let value =30;
    return Lex(value);  // Lex= function name    val = function parameter
}         //Lex(which was the parameter in myFunc is converted to a function(i.e. the callback function))
        
myFunc(function(value){console.log(value);})// invoking the callback function in myFunc
// myFunc(Lex(i.e. the call back function))

//we can rewrite as myFunc((value)=>{console.log(value);})



/*================================CALLBACK & FOREACH-function====================================
        array.forEach(funtion with thier respective conditions)---------------used to iterate through an array
        we can use a callback function
        forEach()---method for iterating through an array

*/

let people=['Boy',"Girl",'Ama','Kofi','Bob'];
//array             callback function
people.forEach((person)=>{console.log(person)});
// we are saying that for parameter(person/i) in people(array), print person 

console.log("\n APPLYING CALLBACK FUNC IN FOREACH METHOD")
const logPersons = (person, index)=>{console.log(`${index} - hello ${person}`)}//function to be invoked
people.forEach(logPersons)



//We are going to apply the function concept in html(web interactivity)

const div = document.querySelector('.people');// used to target elements where we want to inject our functions
let html = ``;//template string                 this time we are targeting div tags with class= people

//we are saying that for each element in array(people), we are creating an <li> tag with the name(person in it)
people.forEach((person) => {
    // Creating the html template for each element
    html+=`<li style="color:#00a00f;">${person}</li>`}); //appends the various elements(person) in the li tags


//incorporating the html into the main browser window
div.innerHTML = html;   //used to incoporate the html into the browser

console.log('\n',html)//display the tags that'll show in the browser@console