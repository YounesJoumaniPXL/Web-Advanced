// IF - ELSE
/*
let spaargeld = 2500;
let laptopStuk = false;
if (spaargeld >= 2000 && laptopStuk) {
    document.getElementById("divResult1").innerHTML = "Nieuwe laptop komt eraan!";
} else {
    document.getElementById("divResult1").innerHTML = "Nog even wachten...";
}
*/
/*
// TERNARY OPERATOR
//  Verkorte notatie
spaargeld = 1900;
(spaargeld >= 2000 && laptopStuk)
    ? (document.getElementById("divResult2").innerHTML = "Nieuwe laptop komt eraan!")
    : (document.getElementById("divResult2").innerHTML = "Nog even wachten...");

*/

// IF - ELSE IF
/*
let dagIndex = new Date().getDay();
let dag;
if (dagIndex === 0) {
    dag = "zondag";
} else if (dagIndex === 1) {
    dag = "maandag";
} else if (dagIndex === 2) {
    dag = "dinsdag";
} else if (dagIndex === 3) {
    dag = "woensdag";
} else if (dagIndex === 4) {
    dag = "donderdag";
} else if (dagIndex === 5) {
    dag = "vrijdag";
} else {
    dag = "zaterdag";
}
document.getElementById("divResult1").innerHTML = `Het is vandaag: ${dag}`;
*/


//  SWITCH
/*
let dagIndex = new Date().getDay();
let dag;
switch (dagIndex) {
    case 0:
        dag = "zondag";
        break;
    case 1:
        dag = "maandag";
        break;
    case 2:
        dag = "dinsdag";
        break;
    case 3:
        dag = "woensdag";
        break;
    case 4:
        dag = "donderdag";
        break;
    case 5:
        dag = "vrijdag";
        break;
    case 6:
        dag = "zaterdag";
        break;
}
document.getElementById("divResult1").innerHTML = `Het is vandaag: ${dag}`;
*/


// SWITCH ZONDER BREAK
/*
let dagIndex = new Date().getDay();
switch (dagIndex) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        document.getElementById("divResult1").innerHTML = "Werkdag :(";
        break;
    case 0:
    case 6:
        document.getElementById("divResult1").innerHTML = "WEEKEND!";
        break;
}

switch (dagIndex) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        document.getElementById("divResult2").innerHTML = "Werkdag :(";
        break;
    default:
        document.getElementById("divResult2").innerHTML = "WEEKEND!";
}
*/


//WHILE
/*
let teller = 1, getal = 10;

while (teller <= 10) {
    document.getElementById("resultWhile").innerHTML += `<li>${teller} maal ${getal} = ${teller * getal}</li>`;
    teller++;
}
*/


//DO WHILE
/*
let teller = 5;
let uitkomst = "";
do {
    console.log(teller);
    uitkomst += `<li>De teller staat op ${teller}</li>`;
    teller++;
}
while (teller < 10);
document.getElementById("resultWhile").innerHTML = uitkomst;
*/


//FOR
/*
let getal = 10;
for (let i = 1; i <= 10; i++) {
    document.getElementById("resultFor").innerHTML += `<li> ${i} maal ${getal} = ${i * getal}</li>`;
}
*/


//BREAK
/*
let target = 17, n = 0;
while (true) {
    n++;
    console.log(n);
    if (n === target) {
        console.log("Target is bereikt.");
        break; // spring uit de lus zodra n gelijk is aan 17
    }
}
document.getElementById("divResult1").innerHTML = `n heeft het doel bereikt: ${n}<br />`;
*/



//CONTINUE
/*
let getal = 10;
for (let teller = 1; teller <= 10; teller++) {
    if (teller % 2 !== 0) {
        console.log(teller);
        continue; //verbreekt Ã©Ã©n iteratie en gaat verder met de volgende iteratie
    }
    document.getElementById("divResult1").innerHTML += `${teller} maal ${getal} = ${teller * getal}<br />`;
}
*/

// ARRAY AANMAKEN EN BEWERKEN

let leeg = [];                                      // een lege array
let legeArray = new Array();                        // nieuwe lege array
/*
let tientallen1 = [10, 20, 30, 40, 50];           // array met vijf numerieke waarden
let tientallen2 = new Array(60, 70, 80, 90, 100);
document.getElementById("divResult1").innerHTML = tientallen2[1];
*/
/*
let diversen = ['Hello', 'World', 10, 20, true]     // array met diverse waarden
let tellen = [1, , 3]                               //array met twee elementen, een leeg element in het midden
document.getElementById("divResult1").innerHTML = diversen;
document.getElementById("divResult2").innerHTML = tellen[1];
*/
/*
let a = tientallen1[2];                              // a heeft nu de waarde 30
document.getElementById("divResult1").innerHTML = a;
*/
/*
document.getElementById("divResult2").innerHTML = tientallen1[5];
tientallen1[5] = 60;                                 // waarde 60 is als nieuw element toegevoegd aan het einde van de array
document.getElementById("divResult3").innerHTML = tientallen1[5];
*/
/*
tientallen1[0] = 70;                                 // het eerste element heeft nu waarde 70 (overschreven)
document.getElementById("divResult4").innerHTML = tientallen1[0];
*/
/*
let tientallen1 = [10, 20, 30];
console.log(tientallen1);
let lengte = tientallen1.length;                     // 5; het aantal elementen in de array
tientallen1.length = 2;                              // tientallen1 heeft nu nog maar een lengte van 2; [70, 20]
console.log(tientallen1);
*/
/*
const myArray = ["PXL", "Hasselt", "Digital"];
myArray[2] = "Business";
document.getElementById("divResult4").innerHTML = myArray;
*/


// ARRAY METHODEN
let intArray = [10, 20, 30, 40, 50];
let stringArray = ['rood', 'geel', 'blauw', 'groen', 'zwart', 'wit'];

//  .join()
/*
console.log(intArray.join());               // "10,20,30,40,50"
console.log(intArray.join('-'));            // "10-20-30-40-50"
*/
/*
//  .split()
let joined = intArray.join('-');               // joined = "10-20-30-40-50"
console.log(joined.split(','));        // ["10", "20", "30", "40", "50"]
*/
/*
// .reverse()
intArray.reverse();                         // array omkeren
console.log(intArray);                      // [50, 40, 30, 20, 10]
intArray.reverse();                         // array terugplaatsen
console.log(intArray);                      // [10, 20, 30, 40, 50]
*/

//  .sort()
/*
stringArray.sort();                         // array sorteren
console.log(stringArray);                   // ["blauw", "geel", "groen", "rood", "wit", "zwart"]
*/
/*
//  .unshift()
console.log(intArray.unshift(500, 600));    // toevoegen aan begin
console.log(intArray);                      // [500, 600, 10, 20, 30, 40, 50]
*/
/*
//  .push()
console.log(intArray.push(60));             // toevoegen aan einde
console.log(intArray);                      // [10, 20, 30, 40, 50, 60]
*/
/*
//  .shift()
console.log(intArray.shift());              // Ã©Ã©n element verwijderen aan begin
console.log(intArray);                      // [20, 30, 40, 50]
*/
/*
//  .pop()
console.log(intArray.pop());                // Ã©Ã©n element verwijderen aan einde
console.log(intArray);                      // [10, 20, 30, 40]
*/
/*
//  .concat()
console.log(stringArray.concat(intArray));  // ["rood", "geel", "blauw", "groen", "zwart", "wit", 10, 20, 30, 40, 50]
*/
/*
//  .slice()
console.log(stringArray.slice(1, 3));       // ["geel", "blauw"]
console.log(stringArray);
*/

//  .splice()
// [10, 20, 30, 40, 50]
intArray.splice(2, 0, 100, 200);
console.log(intArray);                      // [10, 20, 100, 200, 30, 40, 50]
intArray.splice(4, 2, 19, 78);
console.log(intArray);                      // [10, 20, 100, 200, 19, 78, 50]