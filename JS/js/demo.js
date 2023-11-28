// console.log("Welcome from external file");
// var fname = "ali"; // string
// var num = 30.289; // number
// var flag = true; // boolean

// var test; // uninitalized

// console.log(test); // undefined
// console.log(typeof test);
/** ---------------- Datatypes ------------
 * --------------   Primitve Datatype --------
 *  == string
 *  == number
 *  == boolean
 *  == undefined
 *  == null
 * == (symbol)(es6)
 *
 *
 *------------- Refernce Datatype ------------
  == Object
 * ------------------- */

// console.log(typeof fname);
// console.log(typeof num);
// console.log(typeof flag);
// camelCase
// var firstName = "mona";
/**
 * first
 * firstSecond
 * firstSecondThird
 * bim --
 *------------------------
  typeof 
 */
/** -------------
 * Var
 * -----------------
 *  == reaasign with deferent datatypes
 *  == redeclartion
 *
 * --------

        var fname = "ali"; // string
        fname = "alaa"; // string

        fname = 50; // 50

        fname = true;

        console.log(typeof fname);
--------  */

// var fname = "mona";

// var num = 40; // decalre num = 40
// var num = "omar";
// num = 80; // reassign

// num = "omar";
// console.log(num);
// var fname = 30; // redeclartion
// var fname = true;
// console.log(typeof fname);

// var fname = null; // js engine V8 --> fname ={}

// fname = "mona";
// console.log(typeof fname); // object
// console.log(fname);
/**---------------------------- */

// var fname = "mona"; // literal Creation
// var fname = String(10); // using built in function

// console.log(fname);
// console.log(typeof fname);

// var num = 10;

// console.log(num);
// console.log(typeof num);

// var num = 30;

// var num = Number("mona");

// console.log(num);
// console.log(typeof num);

/** NaN --> Not A Number
 *  typeof --> NaN --> typeof NAN ==> Number
 */

/**----------
 *  == Falsy Values
 *  ---------------------------
 *  == false
 *  == 0
 *  == ""
 *  == NaN
 *  == null
 *  == undefined
 * ---------------------------------
 * == truthy values
 *
 *   ---------- */

// var flag = true;

// var flag = Boolean([]);

// console.log(flag);

/** -------------- Operator ----------------------
 * 1- arithm operator (+,-.*,/)
 * 2- comparasion operator(>,<,>=,<=,== , ===)
 * 3- logical operator (and, or,not)
 * ------------------------------------------------
 * [+] ==> number + number ==> (add)
 *     ==> string + string ==> (concat)
 *    ==> string + number --> (string)--> concat
 *
 * [-] ==> number - number --> sub
 *
 * [coercion] ==> js engine convert automatic from datatype to anther datatype
 * ----------- */

// var num1 = 40; // 40

// var num2 = "mona"; // NaN

// var result = num1 + num2;
// console.log(result);

// var num1 = "mona"; // string -- Nan number

// var num2 = 40; // number

// console.log(num1 - num2);
/**-------------------------------- */

// var num1 = "mona"; // NaN
// var num2 = "30"; // 30

// console.log(num1 - num2);
/**--------------- Logical Operator
 *
 * and
 * ---------------------------------
 *  true && true --> true
 *  false && true --> false
 *  false && false --> false
 *  false && false --> false
 * ---------------------------------
 *  true
 * --------------------------------
 * true || true ==> true
 * true || false ==> true
 * false || true ==>true
 * false|| false ==>false
 * -------------------------------
 * Not
 * -------------------------------
 * True --> false
 * false --> true
 * ----------------- */

// (5>1) || --> true

// (1>5) ||(6>7) --> false

// 1 > 2 && ; // false
// false &&

// ( 5 > 2 ) &&  (2>1)
//     true && --> true

// !(1>2) --> --> true

// console.log(!(6 > 1));

/** ----------Short circuits -----------  */
/**
 * mona && ola
 * true && true -->ola
 *
 * ---------------------------
 *  0 && "alaa" ------> 0
 *  false &&  -->0
 * ------------------------
 *  == mona || ali
 *     true ==> mona
 */

/**--------------
 * [==] --> (values ) (coercion in case [deferent datatypes][number])
 * [===] --> (values & datatype)
 *
 * ------------------------------------------------ */
// var x = 10; // number
// var y = "20"; // string -- 20 -- number

// console.log(x == y);
// console.log(x === y);

// var x = true; // boolean  --> number  ---> 1

// var y = "true"; // string --> number -->NaN

// console.log(x == y);

// var x = 1; // number
// var y = true; // boolean --> 1

// console.log(x === y);
/* ------------------------------------------------ */
// var i = 0;
// for (var i = 0; i < 5; i++) {
// 	console.log("Welcome from iti");
// }

// while (i < 5) {
// 	i++;
// 	console.log("welcome");
// }

// do {
//     i++;
//     console.log("Welcome")
// }while(i<5)

// var color = "green";
// if ( color == "red" )
//     console.log( "True block" );
// else
//     console.log( "Else Block" );
/** Ternary Operator */

// color == "red" ? console.log("green") : console.log("Else Block");

// (condition)?// true ://false

// document.writeln("Welcome DotNet");

// var i = 3;
// // document.writeln("<h1>Welcome Dotnet</h1>");

// document.writeln("<h" + i + ">Welcome Dotnet</h" + i + ">");
// for (var i = 1; i < 7; i++) {
// 	document.writeln("<h" + i + ">Welcome Dotnet</h" + i + ">");
// }

// var num = prompt("Enter Your num"); // string

// document.writeln(10 + Number(num));
/**-------------------------------------------- */
/**
 *  Lab
 * 1- take your Name ,, print your name from h1 to h6
 * 2- take a number --> check fizzbuzz
 *      15 --> fizzbuzz
 *      3 --> fizz
 *      5 --> buzz
 *      7 --> none
 *
 * 3- 10
 *    30
 *    20
 *    10
 *    80
 */

/** regex   (self study) */
