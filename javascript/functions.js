// // There are three types of Javascript functions
// //     1.Named functions
// //     2.Anonymus functions
// //     3.Immmediately invoked function


// //Structure
// /* function name() {}
//  */


// function findBiggestFraction() {
//     a > b ? console.log("a: ", a) : console.log("b: ", b);
// }
// var a = 3/14;
// var b = 5/17;
// findBiggestFraction();


// //Reusable function
// function findBiggFrac(a, b) {
//     a > b ? console.log("a: ", a): console.log("b: ", b);
// }

// var firstFrac = 1/4;
// var secondFrac = 2/4;
// findBiggFrac(firstFrac, secondFrac);
// findBiggFrac(1/2, 3/16);


// //Using Return
// function findBiggyFracUsingReturn(a, b) {
//     var result;
//     a > b ? result = ['firstFraction', a] : result = ['secondFraction:', b];
//     return result;
// }

// var fracResult = findBiggyFracUsingReturn(2/13, 4/19);
// console.log("Bigggest Fraction using return: ", fracResult);
// console.log("The biggest fraction is ", fracResult, "with a value of ", fracResult[1]);



// //=========== Anonymus Function =========
// var findBiggFracAnon = function(a, b) {
//     var result;
//     a > b ? result = ['firstFraction', a] : result = ['secondFraction:', b];
//     console.log("Result of Anonymus fun: ", result);
// }

// findBiggFracAnon(8/8, 10/13);


// //Immediately invoked function expression
// // Can be use to immediately populate the variable or hook the event listners

// var theBiggest = (function(a, b) {
//     var result;
//     a > b ? result = ["firstFrac:", a] : result = ["secondFrac: ", b];
//     console.log("Immediately Invoked fn:", result)
// }) (3/62, 4/789);



// //Variable scope
// var firstNumberV = 10; //Global Variable
// var multiply10times = function() {
//     var result //local variable
//     result =  firstNumberV * 10 //Global variable accessible inside the function
//     return result; 
// }(firstNumberV); //As this is immediately invoved function, value for firstNumber is passed here

// console.log("firstNumberV: ", multiply10times);

// var secondNumberV =  firstNumberV;
// console.log("secondNumberV: ", secondNumberV);


// //Const and Let
// //Once const is defined it cannot be changed in later part of code like var
// //Let is block scope variable. Scope is limited to block of the code. It has smaller scope than varglobal.fetch = require('node-fetch');

// function logScope() {
//     let  localVar = 2;
//     if(localVar) {
//         let localVar = "I'm different";
//         console.log("nested localVar: ", localVar);
//     }
//     console.log("logScope localVar: ", localVar)
// }

// logScope(); //call function (Manually Invoked function)

