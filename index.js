// //Different ways to print in JavaScipt

// //Used to output on the console
// console.log("Hello World");

// //Used to give a message
// alert("This is a alert message");

// //Used to write
// document.write("Harry the coder");



// //JavaScript Console API

// //Used to give a warning
// console.warn("This is a warning");

// //Throws error when the condition is not satisfied
// console.assert(4==(8+4));

// //Used to throw error 
// console.error("This is a error message");



// //Declaring Variables

// // var is used when we want to declare global variable
// var a = 45;
// console.log(a);

// //let is used when we want to declare local variable
// let b = 10;
// console.log(b);

// //We can also declare constant in JavaScript
// const x = 4;
// console.lo(x);


// // Datatypes In JavaScipt

// //objects

// var marks = {
//     "Harry":55,
//     "Dipesh":45,
//     "Shubham":99
// }

// console.log(marks);


// //Arrays

// //Differnt datatypes can be stored in a single array
// var number = [45,55,89,90,79,"Dipesh"];



// //Functions in JavaScript

// //function Keyword is used to define a Funnction
// function avg(a,b){

//     //return type can be any datatype
//     return (a+b)/2;
// }

// console.log(avg(5,6));


// // Loops in JavaScipt
// var number = [45,55,89,90,79,"Dipesh"];


// // forEach loop in JavaScipt

// number.forEach(function(elements){
//     console.log(elements);
// })


// //Array Methods
// var items = [1,2,"Dipesh","vegetables",true,2.5];

// //Return the length of the array
// console.log(items.length);

// //Used to remove a element from the end of the list
// items.pop();
// console.log(items);

// //Used to add a element at the end of a list
// items.push("Mango");
// console.log(items);

// //Used to delete element at the beginning
// items.shift();
// console.log(items);

// //Used to add element at the beginning
// console.log(items.unshift("Apple"));  //return the updated size of the array
// console.log(items);

// // //Used to convert the array into string 
// // console.log(items.toString());

// //Used to sort the array
// //It will covert all the element in string and then sort
// console.log(items.sort());



// //String Methods in Javascript

// let a = "CODEWITHHARRY";

// //Used to get the size of the string
// console.log(a.length);

// //Used to search in a string and first occorence
// console.log(a.indexOf("HARRY"));

// //Used to search in a string and last occorence
// console.log(a.lastIndexOf("HARRY"));

// //String Slicing in JavaScript

// //Used to slice a string
// console.log(a.slice(1,3));

// //Used to replace a word or character in the string

// console.log(a.replace("HARRY","ROHAN"));



// // JavaScript Date-time function

// //Used to get the date
// let mydate = new Date();
// console.log(mydate);

// //getTime->Gives time in seconds
// console.log(mydate.getTime());

// //getFullYear->Gives the current year
// console.log(mydate.getFullYear());

// //getDay->Used to get the day
// console.log(mydate.getDay());

// //getMinutes->Used to get the minutes
// console.log(mydate.getMinutes());

// //getHours->Used to get the hour
// console.log(mydate.getHours());




// //DOM Manuiplation

// //Used to target html tag with the help of id's
// let x = document.getElementById("click");
// console.log(x);

// //Used to target html tag with the help of class name
// let y = document.getElementsByClassName("click");
// console.log(y);

// //Applying style using javascript
// document.getElementById("firstdiv").style.background ="green";

// // let x = document.getElementsByClassName("para");
// // console.log(x);

// //Used to add a classes to html tags 
        // x[0].classList.add("bg_primary");

        // //Used to remove classes from html tags
        // x[0].classList.remove("bg_primary");

        // //Used to see the html content
        // console.log(x[0].innerHTML);
        
        // //Used to get the text
        // console.log(x[0].innerText);

        // //Used to get the element of a particular tag
        // console.log(document.getElementsByTagName("div"));

        // //Used to add a html tag
        // let createElement = document.createElement('p');
        // //Used to add content to the tag
        // createElement.innerHTML = "CODE WITH HARRY IS BEST";
        // // Used to append
        // x[1].appendChild(createElement);

        // let createElement1 = document.createElement('div');
        // createElement1.innerHTML = "CODEWITHHARRYISBEST";

        // // Used to replace html tags
        // x[1].replaceChild(createElement1,createElement);

        // //Used to remove html tags
        // x[1].removeChild(createElement1);

        // //Selecting a  Particular Query
        // p = document.querySelector('.para');
        // console.log(p);

        // //Selecting a  All Query
        // p = document.querySelectorAll('.para');
        // console.log(p);


// //Events in Javascript

        // // 1)onclick => It is used when some event should happen on clicking
        // function push() {
        //     console.log("There is the pushing");
        // }

        // //Used when the window is done loading and some work need to be done
        // window.onload = function(){
        //     console.log("Loading again");
        // }

        // //EventListner
        // 1)click
        // 2)mouseover
        // 3)mouseout
        // 4)mouseup
        // 5)mousedown

        //Arrow Function

        // function sum(a,b){
        //     console.log(a+b);
        // }
        
        // //Can also be wriiten using arrow function as:
        
        // sum = (a,b)=>{
        //     console.log(a+b);
        // }

        // sum(4,5);


        // //SetTimeOut and SetInterval
        // i =-1;
        // run = ()=>{
        //     i++;
        //     console.log("Printed after " + i + "s");

        //     if(i==10){
        //         //The function used to stop setInterval is:
        //         clearInterval(stop);
        //     }
            
        // }

        // //setTimeout takes argument as a function and a time in milliseonds.
        // //ClearTimeout is used to stop setTimeout.
        // setTimeout(run,2000);


        // //SetInterval is used when repeatedly work has to be done

        // stop = setInterval(run,1000);  //returns a id that can be used to stop the setInterval 


// //Json

        // a = {
        //     name:"Harry",
        //     place:"mumbai",
        //     college:"thakur",
        //     age:24
        // }

        // //Used to acess the json element
        // console.log(a["name"]);  
        // console.log(a["place"]);
        // console.log(a["college"]);
        // console.log(a["age"]);


        // //Used to convert the json into a string
        // aString = JSON.stringify(a);
        // console.log(aString);

        // //Used to convert string to Json
        // parse=  JSON.parse(aString);
        // console.log(parse);



