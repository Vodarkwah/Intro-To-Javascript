/* =========================================== INTRODUCTION TO DOCUMENT OBJECT MODEL(DOM) ==================================================
.   the DOM enables us to interact with the browser. it enables us to

******** add contents to the browser
******** change CSS styles
******** react to user events (eg. clicking, pop ups, ) 



the DOM is a document created by the browser when a an HTML content is loaded into it. when the html object is loaded, the browser creates
an object model that contains the html objects (called the 'Document object')

to use the methods/objects, you can use "document." and the various methods can be used."

the DOM arranges the various elements as a heirachy or node. (describes how a document looks visually)*/

```
********************************************************   VISUALIZING THE DOM  ***********************************************************
*                                                                                                                                         *
*                                                                                                                                         *
*                       _________________________________HTML(root node)___________________________ //Highest Heirachy (descending order) *
*                      |                                                                           |                                      *
*                      |                                                                           |                                      *
*                                                                                                                                         *                   
*                     head tag            element node                                          body tag                                  *
*                                                                                                                                         *
*                      |                                                                           |                                      *
*                      |                                                                           |                                      *
*                                                                                                                                         *
*                     title                    text node                                    h1 and div tags                               *
*                                                                                                p tags                                   *
*                                                                                                                                         *
*                                                                                                                                         *
*                                                                                                                                         *
*                                                                                                                                         *
*******************************************************************************************************************************************
```
/*___________________________________________________________________________________________________________________________________________

=====================================   querying the DOM    ================================
This is when we reach an element in the DOM by querying the DOM ny using a reference that
the element possess.

*****************   Syntax  *******************
        document.querySelector('CSS selector')s

this selects the first tag in the doc. it could be a class, id, hover etc(just like how we reference the cssprops) and ignores the rest
___________________________________________________________________________________________________________________________________________
*/

// console.log("\ndocument.querySelector('') property")
// const para = document.querySelector('p'); // Grabs the first p tag and ignores the rest of the p tags
//  console.log(para)


// // const para = document.querySelector('div'); // Grabs the first div tag and ignores the rest
// // console.log(para)


// // const para = document.querySelector('.error'); // Grabs the first error class and ignores the rest
// // console.log(para) Grabs only 1element
// console.log('\nquerySelectorAll')//used to selectsall the elements
// const par = document.querySelectorAll('p')
// console.log(par)//stores the nodes into a list(nodelist). We can use foreach on the nodelist

// par.forEach((item)=>{console.log(item)})//loop through the nodes


/*===========================  Alternative Ways to Query the DOM ===============================

******************* 1. document.getElementById('ID')
******************* 2. document.getElementsByClassName('class') //Can't use for each dor this
******************* 3. document.getElementsByTagName('tagName') // gets all elements by tags
  

*/



// const para = document.querySelector('p')
// console.log(para.innerText)//prints out the content of the html tags
// //Eg <p>Hello World</p> would print Hello World. We can replace the inner text or add something to it
// console.log('\nBefore InnerText')
// console.log(para.innerText="I am a boy")
// console.log(para.innerText+=" new text (using inner text+=)")// appends the para tag with the new text

// console.log('\n******* Before InnerText Using querySelectorAll ********')
// //changing all occurences
// const paras = document.querySelectorAll('p')//returns all lists of p tags
// console.log(paras)
// paras.forEach((item) => console.log(item)) // loops through the list of p tagsand prints them

// console.log('\n*************** Adding/Appending Text ******************')
// // we are going to add a text to the inner para tags
// paras.forEach(function(item){console.log(item.innerText+=" Added text using innerText")})

// console.log('\n************* Replacing Text ****************')
// //replacing the items with a new text
// paras.forEach((item,index) => console.log(item.innerText=" Replaced text using inner",index))


/*=================================  Changing the html element of something ===================

*/
const Paras = document.querySelectorAll('p')
const content = document.querySelector('.content')
//console.log(content.innerHTML)//prints what is in the html element with class 'content'

//InnerHTML grabs the parent and focuses on the inside of the parent element
const people = ['Kofi','Ama','Esi'];

// appending p tags to an HTML with class 'content'
people.forEach((person) => {
        content.innerHTML += `<p>${person}</p>` //use template string (This creates extra child tags i.e p in the parent tag with class 'content')
       //NB ===== the new div tag has 4 p tags
})



```//==============  GET & SET Attribute =============================
/*
**************** GET ATRIBUTE ********* This grabs the attribute value
SYNTAX = ___.getAttribute('Attribute name') //___is the tag we grabbed from the querry selector


**************** SET ATRIBUTE ********* This grabs the attribute value and replaces it with the new value
SYNTAX = ___.setAttribute('Attribute name', 'new attribute value')

when the attribute does not exist, the new value will be added(created with the first arg). well explained in the example
*/```

console.log("USING GET ATTRIBUTE")
const link = document.querySelector('a')//grabs the a tag and stores it in link
console.log("Result after using the querrySelector('a'):--- ",link,'\n')
console.log("after using link.getAttribute('href'):---",link.getAttribute('href'),'\n')//prints out the attribute in link

console.log("\nUSING SET ATTRIBUTE")

//console.log(link.setAttribute('href','http://github.com')) //Changes the href attribute to github.com
const MSG = document.querySelector('.error') // grabs the first element with class error
MSG.setAttribute('style',"color:red")//creates a new attribute(style) with value (color:red)
// Because the attribute 'style' is not present in class 'error' the 'setAttribute' creates a new attribute 

```
// MAJOR DRAWBACK OF GETATTRIBUTE ----- It ovverides the old attibute if it exists

/* ************** STYLING in JAVASCRIPT **********************
        syntax ----------- varibleName.style.style_property = 'property value'

        eg, setting link color to red (NB, link was the var used to store the a tag)
        link.style.color = 'red'
        link.style.fontSize = '10px'

        console.log(link.style) ------ used to lookup for the various CSS properties

*/```

link.style.color = 'blue'
link.style.fontSize = '20px'
console.log('-------------All CSS properties: -------------- ',link.style)

const Content = document.querySelector('p')

console.log(Content.classList) //Prints out the number of classes a certain element contains

 
/*========= add and remove classes of html tags in JS ======
\
        were using the p tag with class error

        const para = document.querySelector('p')
        ***** para.classList.add('className') //used to add classes to the tag

        ***** para.classList.remove('className') //remove the class

        we can also toggle classlist (classlist.toggle) ----- toggles between the classes (more like on and off)



*/




/* ==================   TEXT CONTENT and INNER TEXT   ======================

innerText ============= prints out visible text in a tag (i.e. obly tags that doesnt have display: none)


textContent =========== prints out text regardless of display type


*/



