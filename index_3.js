/*======================================================JAVASCRIPT OBJECTS===================================================

Objects have properties and things they can do(methods in js). 
Eg. Let's take phone for example
props include - color -size - model -year relased -etc...
things it can do - ring - take pics and vids -play music - etc...

Examples of real life js object
1. let's consider a certain object(user) with props(-email -username -gender) and
methods(things they can do) - login -logout

2. lets consider a blog object. Props include - title - content - author
                    methods - publish - unpublish -delete
*/



/*=========================================Object Literals====================================================
. Object Literal Notation-------we use curly braces(more like dictionaries in python) with their key-value pairs

*******************syntax****************************
let const var_name = {key1:val1, key2:val2, key3:val3};

*/

let user = {
    name:'lextyme',
    age:18,
    email: 'lextyme@gmail.com',
    location:'Ghana',
    blogs:['How to make money 2022','10 reasons to worship God']
};
console.log(user);

//ways to access and change the properties of the properties in an object literal

console.log('New name using .prop= ', user.name='Asisis');//changes the name property
console.log('New Age using .prop= ', user.age=30);//changes the age property
console.log('New Name using [] prop= ', user['name']='Victor')
console.log('New Age using [] prop= ', user['age']=11)
console.log('\n')

/*_________________________________________________________________________
.                          Creating methods in object
.           create a funtion in the object literal. This
        *****syntax*******
        login:function(){props};
*/
let User = {
    name:       'lextyme',
    age:        18,
    email:      'lextyme@gmail.com',
    location:   'Ghana',
    blogs:      ['How to make money 2022', '10 reasons to worship God'],
    login:      function(){console.log("User logged in");},//create an object method called login
    logout:     function(){console.log("User logged out");},//another object method
    logBlogs:   function(){console.log(this.blogs); // prints out the array 'blogs'
                this.blogs.forEach((blog) => console.log(blog));//loops through the array and prints out the elements in the array
    }           //array 'blogs'     'element in array'blogs''
};

// We can rewrite the  methods using the following syntax*******remove the colon and the function******
//.  EG. for the login method,   login(){console.log(this.blogs)};=============shorter way to write the code           

User.login();
User.logout();
User.logBlogs();


```/* -------------------------------------- Using 'this' keyword in a certain method -----------------------------------------------------
. We are trying to log(print) the elements in blogs. We use this to access the object in the particular object   
NB. 'this' is a context object. So using Eg ***console.log(this)*** prints out the entire user object.
  
to print out the element in a particular object we want to print out(blog in this case) we create a call back function to print out
the particular item in the object as shown above
 

*/```

console.log('\n*****************OBJECTS WITHIN OBJECTS*******************')

User = {
    name: 'lextyme',
    age: 18,
    email: 'lextyme@gmail.com',
    location: 'Ghana',
    blogs: [
        {title: 'How to make money 2022', likes:30}, //element1 
        {title:'10 reasons to worship God', likes:50}//element2
    ],
    login() { console.log("User logged in"); },
    logout() { console.log("User logged out"); },
    logBlogs() {console.log("\nThe User has the following blogs");
        this.blogs.forEach((blog) => console.log(blog.title,'with ',blog.likes, 'likes'));
    }          //represents an ibect in array   // inside the object, print obj.title and obj.likes
};
User.login();
User.logout();
User.logBlogs();




console.log('\n****************  MATH OBJECTS  **************************')

/* ========================================== MATH OBJECTS =======================================================
. Math Object is a built-in object in javascript. We access the math module by using Math.para

*/

console.log('PI in javascript',Math.PI, 'Eulers number(ln2) in JS =',Math.E)
console.log('\nUSING (MAth methods)')

const area= 5.515;

console.log('Initial area=',area,'Using Math.round(area), A=',Math.round(area))//rounds to the nearest integer
console.log(`Using floor area${area}, New area=`,Math.floor(area))//scraps off the decimal point
console.log(`Using ceil area${area}, New area=`,Math.ceil(area))//opposite of floor (scraps the dp but shift the int val by +1)
console.log(`Using trunc area${area}, New area=`,Math.trunc(area))//scraps off the decimal point

//============================= Generating Random Numbers ===============================================
const random = Math.random();//random() generates random numbers b/n 0 and 1
console.log(random*30)// Genrates random nos bn 0 and 30.
console.log(Math.round(random*100));//random in b/n 1 and 100.




/*=======================PRIMITIVE and REFERENCE TYPES =============================================
primiftive types inclde - numbers -strings -booleans - null - undefined - symbols
reference types include OBJECTS eg. object literals - arrays -functions - dates - all other objects


difference between primitive and reference types has to do with how they are stored.
************** Stack and Heap ******************
primitive are stored in a stack(i.e variable to one value)
reference are stored in a heap(i.e. different arrays in one variable and we can hold complex data)


NB. When we modify data in primitive, a new data is printed


*/

console.log('\n Primitve and Reference Types: ')
console.log('\nPrimitive Type')
let scoreOne = 50;
let scoreTwo = scoreOne; //implies that var 2 inherits the properties of var 1
console.log(`scoreOne=${scoreOne} and scoreTwo=${scoreTwo}`,'>>>>>>Primitive Types');
scoreOne = 100; //chancging the val of scoreOne doesnot affect val of scoretwo

console.log(`After changing scoreOne to 100, results after. scoreOne=${scoreOne} and scoreTwo=${scoreTwo}`)

console.log('\nReference Type')

const userOne = {name:'John', age:30};
const userTwo=userOne; //reference type. references the val of user2 to user1's data.

console.log('Userone =',userOne,'Usertwo =',userTwo)

userOne.age = 40;//trying to change the age of user1 to 40
console.log('Userone =',userOne,'Usertwo =',userTwo)//Changing the age of user1 affects all the var since the data is a reference for the variables
//NB. Changing any parameter in reference type affects all the variables in the objects


