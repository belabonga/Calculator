//<button onclick="alert('Anda menekan elemen button!')">Click di sini!</button>

let x; // x merupakan undefined
x = 1 // sekarang x merupakan number
x = true // sekarang x merupakan boolean
x = "Harry" // sekarang x merupakan string

// EMBEDDED SCRIPT
//<script></script>
//<script src="berkas-javascript.js"></script>

// EXTERNAL SCRIPT

console.log("Selamat Anda berhasil menggunakan JavaScript pada Website");
alert("Terimakasih.");

var firstName = "Harry";
console.log(firstName);

firstName = "Ron";
console.log(firstName);

/* output: 
Harry
Ron
*/

x = 100;
var x;
console.log(x);

/* output: 100 */


y = 100;
let y;
console.log(y);

/* ReferenceError: Cannot access 'y' before initialization */

// const untuk deklarasi variable yang immutable (tidak perlu dirubah nilainya)
const z = 100;
console.log(z);

z = 200;
console.log(z)

/* TypeError: Assignment to constant variable. */

// Fungsi typeof() digunakan untuk memastikan tipe data pada variabel dengan mengembalikan tipe data tersebut dalam bentuk teks
let x;
console.log(typeof(x));

/* output: undefined */

let y = 17.25;
console.log(typeof(y))

/* output: number */

let a = 12;
let b = 9;

console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)
console.log(a % b)

/* output:
21
3
108
1.3333333333333333
3
*/

/* Increment dan Decrement */

let postfix = 5;
console.log(postfix++);
/* output: 5 */

let prefix = 5;
console.log(++prefix);
/* output: 6 */

// STRINGS
let greet = "Hello";
console.log(typeof(greet))

/* output: string */

// diantara petik dua = SPECIAL CHARACTERS
let greet = "Hello";
let moreGreet = greet + greet;
console.log(moreGreet);

/* output: HelloHello */

let x = true;
let y = false;

console.log(typeof(x))
console.log(typeof(y))

/* output: 
boolean
boolean
*/

const a = 10;
const b = 12;

let isGreater = a > b;
let isLess = a < b;

console.log(isGreater);
console.log(isLess);

/* output:
false
true
*/

let someLaterData = null;
console.log(someLaterData);

/* output:
null (kosong)
*/

// ARRAYS
let myArray = ["Coklat", 42.5, 22, true, "Programming"];
console.log(myArray);

/* output:
[ 'Coklat', 42.5, 22, true, 'Programming' ]
*/

console.log(myArray[0]);

/* output:
Coklat
*/

// OBJECTS
let object = {key1: "value1", key2: "value2", key3: "value3"}
let user = {
    firstName: "Harry",
    lastName: "Potter", 
    age: 20, 
    isMuggle: false,
    stuff: ["Magic Wind", "Flying Car", "Owl"]
};
console.log("Hallo, nama saya " + user.firstName + " " + user.lastName);
console.log("Umur saya " + user.age + " tahun");

/* output
Hallo, nama saya Harry Potter
Umur saya 20 tahun
*/


// OPERATOR
let x = 10;
let y = 5

x += y;

console.log(x);

/* output
15
*/

let a = 10;
let b = 12;

console.log(a < b);
console.log(a > b);

/* output
true
false
*/

const aString = '10';
const aNumber = 10

console.log(aString == aNumber) // true, karena nilainya sama-sama 10
console.log(aString === aNumber) // false, karena walaupun nilainya sama, tetapi tipe datanya berbeda

/* output
true
false
*/

let a = 10;
let b = 12;

/* AND operator */
console.log(a < 15 && b > 10); // (true && true) -> true
console.log(a > 15 && b > 10); // (false && true) -> false

/* OR operator */
console.log(a < 15 || b > 10); // (true || true) -> true
console.log(a > 15 || b > 10); // (false || true) -> true

/* NOT operator */
console.log(!(a < 15)); // !(true) -> false
console.log(!(a < 15 && b > 10)); // !(true && true) -> !(true) -> false

/* output
true
false
true
true
false
false
*/

let x = 50;

if(x > 70) {
    console.log(x);
} else {
    console.log("Nilai kurang dari 70");
}

/* output
Nilai kurang dari 70
*/

let language = "English";
let greeting = "Selamat Pagi!"

if(language === "English") {
    greeting = "Good Morning!";
}

console.log(greeting);

/* output
Good Morning!
*/

let language = "French";
let greeting = "Selamat Pagi"

if(language === "English") {
    greeting = "Good Morning!";
} else if(language === "French") {
    greeting = "Bonjour!"
} else if(language === "Japanese") {
    greeting = "Ohayogozaimasu!"
}

console.log(greeting);

/* output
Bonjour!
*/

// LOOP
for(inisialisasi variabel; test kondisi; perubahan nilai variabel) {
    // do something
}

for(let i = 0; i < 5; i++) {
    console.log(i);
}

/* output
0
1
2
3
4
*/

const myArray = ["Harry", "Ron", "Hermione", "Tom"];

for(let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}

/* output
Harry
Ron
Hermione
Tom
*/

// i < myArray.length sebagai batasan pada proses looping, sehingga proses looping tidak lebih dari panjang array.


for(arrayItem of myArray) {
    // do something
}


let myArray = ["Harry", "Ron", "Hermione", "Tom"];

for(const arrayItem of myArray) {
    console.log(arrayItem)
}

/* output
Harry
Ron
Hermione
Tom
*/

// FUNCTION
function greeting() {
    console.log("Good Morning!")
}

greeting();

/* output
Good Morning!
*/

function greeting(name, language) {
    if(language === "English") {
        console.log("Good Morning " + name + "!");
    } else if (language === "French") {
        console.log("Bonjour " + name + "!");
    } else {
        console.log("Selamat Pagi " + name + "!");
    }
}

greeting("Harry", "French");

/* output
Bonjour Harry!
*/

function multiply(a, b) {
    return a * b;
}

let result = multiply(10, 2)
console.log(result)

/* output
20
*/

// VARIABLE SCOPE
// global variable, dapat diakses pada parent() dan child()
const a = 'a'; 
 
function parent() {
    // local variable, dapat diakses pada parent() dan child(), tetapi tidak dapat diakses diluar dari fungsi tersebut.
    const b = 'b'; 
    
    function child() {
        // local varible, dapat diakses hanya pada fungsi child().
        const c = 'c';
    }
}

function multiply(num) {
    total = num * num;
    return total;
}

let total = 9;
let number  = multiply(20);

console.log(total)

/* output
400
*/
// Mungkin kita berharap nilai total akan tetap 9. Mengingat variabel total pada fungsi multiply, seharusnya tidak akan berpengaruh untuk kode di luar dari fungsi tersebut. Hal ini bisa terjadi karena pada fungsi multiply() kita tidak menetapkan variabel total sebagai cakupan lokal, kita tidak menggunakan keyword const, let, atau var ketika mendeklarasikan variabel total pada fungsi multiply() sehingga variabel total menjadi global.


// STRICT MODE
// memastikan tidak terjadinya kegagalan dalam menjalankan kode akibat penulisan script yang buruk, dan juga mencegah timbulnya bug. 

"use strict";
x = 9;       // ini akan dianggap error karena variabel belum dideklarasikan
showAngka();   // ini akan dianggap error karena function belum dideklarasikan
 
function showAngka() {
  var x = 9;
  alert(x);
}

x = 9;       // ini tidak dianggap error karena tidak kena mode Strict
showAngka();   // ini tidak dianggap error karena tidak kena mode Strict
 
function showAngka() {
  “use strict”;
   x = 9; // ini akan dianggap error karena variabel belum dideklarasikan
  alert(x);
}


// mengakses method alert() pada window
window.alert("Hello Browser!")
 
// Kita juga bisa mengaksesnya seperti ini
alert("Hello Browser!")



const firstName = prompt("Siapa nama depanmu?");
const lastName = prompt("Siapa nama belakangmu?");
const language = prompt("Bisa berbahasa apa?");
 
const user = {
   name: {
       first: firstName,
       last: lastName,
   },
   language: language
};
 
if (user.language === "English") {
   alert("Nice to meet you " + user.name.first + " " + user.name.last + "!");
} else if (user.language === "French") {
   alert("Ravi de vous rencontrer " + user.name.first + " " + user.name.last + "!");
} else if (user.language === "Japanese") {
   alert("Hajimemashite, " + user.name.first + " " + user.name.last + "!");
} else {
   alert("Senang bertemu dengan Anda " + user.name.first + " " + user.name.last + "!");
}

//Melalui DOM inilah JavaScript dapat memanipulasi elemen beserta atributnya pada HTML.

const head = document.head;
const body = document.body;
document.getElementById(“display”);
document.getElementsByName(“button”)
document.getElementsByClassName(“button”)
document.getElementsByTagname(“div”)
document.querySelector(“.button”);
document.querySelectorAll(“.button”);

for(let item of buttons) {
    console.log(item)
 } 

 // MANIPULATION ELEMENT
 someElement.setAttribute("attributName", "attributeValue");

 /*
<!DOCTYPE html>
<html>
<head>
   <title>Manipulating Attribute</title>
</head>
<body>
<figure>
   <img id="catImage" src="https://i.ibb.co/9WT6LG6/two-three.jpg" alt="three-cats" width="600px"/>
   <figcaption id="caption">Tiga Anak Kucing</figcaption>
</figure>
</body>
</html>
 */

let catImage = document.querySelector("#catImage");
catImage.setAttribute("src", "https://i.ibb.co/55VG7vL/three-cat.jpg");

let caption = document.querySelector("#caption");
caption.innerHTML = '<em>Tiga Anak Kucing</em>'

caption.innerText = "<em>Tiga Anak Kucing</em>";

let newElement = document.createElement('p');

newElement.innerHTML = 'Anda menekan gambar kucing sebanyak <span id="count">0</span> kali';

document.body.appendChild(newElement);

catImage.addEventListener('click', function(event) {
    document.querySelector('#count').innerText++;
 });