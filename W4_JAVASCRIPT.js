/*

ACM Design Dev Workshop 4
Script the Future - An Introduction to Javascript (JS)
File contains examples of JS code

Note: console.log() prints things inside the parathesis
      To run code, open up terminal and run the command: node (your_file_name_after) 
      ^^ Make sure that you have node.js installed to do this

*/

/* -----------------------------------------------------------------------------------------------*/

                                         /* Variables */

//Example 1: Declaring Variables 

// let x = 10
// let greet = "Hello World!"
// const acm_workshop_number = 4 

// console.log ("Value at x:", x)
// console.log ("Greeting:", greet)
// console.log ("What workshop are we on?", acm_workshop_number)

//Example 2: Weakly-Typed and the Dynamically Typed 

// x = "Hello world"
// greet = 4
// acm_workshop_number = "hello"

// console.log ("New x:", x)
// console.log ("New greet:", greet)
// console.log ("What is in acm_workshop_number?", acm_workshop_number)

//Example 3:Scoping of variables 

// function scoping_example () {

//     if(true){
//         let x = 10
//         const y = 11
//         var z = 12

//         console.log(x)
//         console.log(y)
//         console.log(z)
  
//     }

//     console.log(x)
//     console.log(y)
//     console.log(z)

// } 

//function call:

// scoping_example()

/* -----------------------------------------------------------------------------------------------*/

                                       /* Functions */

//Example 2: Function for adding two numbers 
// const sum1 = (num1,num2) =>{
//     let sum_result 

//     sum_result =  num1 + num2

//     return sum_result
// }

// let add1 
// add1 = sum1(2,3)
// console.log("Result of 2+3:", add1)

/* Coding Exercises */

//Example 3: Create a function for multiplying two numbers 

// function multiply (num1,num2) {
//     let result = num1*num2
//     return result
// }

// let mult_res = multiply(5,4)
// console.log(mult_res)


//Example 4: Create a function for finding the Euclidean distance between (0,0) and target position (x,y)

/* 

Before starting:

   *  run (npm i math) in your terminal; This downloads the math library  
    where you can access more complex mathematical functions

   *  npm stands for Node Package Manager and it is a tools that help developers manage
        and share reusable code packages (libraries, frameworks, utilities, etc. )

Tips:
    * Pythagorean Theorem is (x^2 + y^2 = z^2)
    * Use Math.sqrt(expression) function to compute the sqrt of any value!

 */

//Answer:
// function distance(x,y){
//     return Math.sqrt(x*x + y*y)
// }

// let euclidean_distance = distance(3,4)
// console.log("result:", euclidean_distance)

/* -----------------------------------------------------------------------------------------------*/

                                        /* Conditionals */

// Example 1: Mode of Commuting  

// let miles = distance(3,5)
// if (miles <= 1  && miles >= 0){
//     console.log("Will walk!")
// }
// else if (miles > 5){
//     console.log("Will Drive")
// }
// else{
//     console.log("Having a hard time deciding...")
// }

//what will this print out if miles = distance(3,5)?
//what will this print out if miles = distance(0,1)


//Example 2: Movie Ticket Price

/* 

People 5 an under get in for free
People between the ages 4 and 10 (inclusive) get a 5% Discount 
People older than 58 get the senior discount
Everyone else has to pay full price 

*/

//Answer: 

// let age = 20

// if (age <= 5){
//     console.log("Free Ticket")
// }
// else if (age >= 4 && age <= 10){
//     console.log("5% Discount")
// }
// else if (age >= 58){
//     console.log("Senior Discount")
// }
// else{
//     console.log("Pay full price")
// }


//Example 3: Write a function that checks if a number is an even number 

// Tip: can use the modulo operator which returns the remainder
// a%b gives us the remainder when computing a/b

// Answer:
// function is_even (x) {
//     let mod = x%2
//     if (mod == 0){
//         console.log("Number is even!")
//         return true
//     }
//     else{
//         console.log("Number is not even!")
//         return false
//     }
// }

// is_even(4)
// is_even(5)

//Example 4: Ternary Operator Example

// let number = 7; 
// let result = (number % 2 == 0) ?  "Even" : "Odd"; 
// console.log(result)

// let attendance = true;
// let greeting = attendance ? "Welcome back!" : "Come next week!";
// console.log (greeting)

//Example 5: Switch Case Example

// let day = 1;
// let dayName;

// switch (day) {
//   case 1:
//     dayName = "Monday";
//     break;
//   case 2:
//     dayName = "Tuesday";
//     break;
//   case 3:
//     dayName = "Wednesday";
//     break;
//   case 4:
//     dayName = "Thursday";
//     break;
//   case 5:
//     dayName = "Friday";
//     break;
//   case 6:
//     dayName = "Saturday";
//     break;
//   case 7:
//     dayName = "Sunday";
//     break;
//   default:
//     dayName = "Invalid day";
// }

// console.log(dayName);


/* -----------------------------------------------------------------------------------------------*/

                                            /* Arrays */

//Example 1:

// let arr = [] //initializing an empty array

// arr.push(1)
// arr.push(2)
// arr.push(3)
// arr.push(4)

// console.log(arr)

// arr.pop()
// console.log("Popped applied", arr)

// console.log("Length of array:", arr.length)
// console.log("Index of element 1:", arr.indexOf(1))

//Example 2: 

//Write a function that goes through an array to find all the even numbers
//You can use the is_even function we created above with modifications

/* 

Tips: For Loops --> allows us to repeat a block
Syntax: 

for(initialization; condition; increment){

}

initialization --> first number you want to start your iteration
condition --> how long you want the chunk of code within the loop to execute for
increment --> allows us to move onto the next iteration and prevent an infinite loop

*/

// function find_even (arr){

//     // initializing an empty array
//     let even_nums = [] 

//     for ( i = 0; i < arr.length; i++){
//         if (is_even(arr[i])){
//             even_nums.push(arr[i])
//         }
//     }
//     return even_nums
// }

// console.log(find_even(arr))

/* -----------------------------------------------------------------------------------------------*/

/* Objects */

//Example 1: Designer 

// let designer = {
//     firstname: "Bethany",
//     lastname: "Kim",
//     age: 100,
//     design: true,
//     talks(){
//         console.log(designer.firstname + " designs!")
//     }

// }

// //What do these print out?

// let first_name = designer.firstname
// let last_name = designer.lastname
// let full_name = first_name + " " + last_name
// console.log (full_name)

// let designer_talk = designer.talks()

//Modifying values 
// designer.age = 21
// console.log(designer.age)

// designer["age"] = 20
// console.log(designer.age)

// deleting values:

// delete designer.lastname;
// console.log(designer.lastname)

// delete designer["age"];
// console.log(designer["age"])

//Practice: Create an object for yourself! Include any data about yourself!
























