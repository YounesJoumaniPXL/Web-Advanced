//Oef1
let zin1 = 'Dit is de eerste zin.';
let zin2 = 'Dit is de tweede zin.';
let zin3 = 'Dit is de derde zin.';

console.log(zin1);
console.log(zin2);
console.log(zin3);
//Oef2
let langezin = zin1 + ' ' + zin2 + ' ' + zin3;

console.log(langezin);
alert(langezin);
//Oef3
let koekje = 'Ik wil een koekje';

console.log(koekje.charAt(0));
console.log(koekje.charAt(3));
console.log(koekje.lastIndexOf('k'));
console.log(koekje.lastIndexOf('e'));
console.log(koekje.length);
//oef4
console.log(koekje.replace('koekje', 'lasagne van PXLcatering'));
//oef5
let randomword = prompt('Geef een random woord?')
let lengte= randomword.length;

alert(`Het woord bestaat uit ${lengte} karakters`);
//oef6

let randomzin = prompt('Geef een random zin');
let indexbeginmeteen = randomzin.indexOf(' ') + 1;
alert(`De eerste spatie van je zin staat op positie: ${indexbeginmeteen}`);

//oef7

let randomgetal1 = prompt('Geef de eerste getal?');
let randomgetal2 = prompt('Geef de tweede getal?');
let vermenigvuldigen = parseFloat(randomgetal1) * parseFloat(randomgetal2);
let uitkomst = 'De uitkomst van de vermenigvuldiging is:' + vermenigvuldigen;
document.getElementsByClassName('vermenigvuldigen')[0].innerHTML = uitkomst;

//oef8
let Optellen = parseFloat(randomgetal1) + parseFloat(randomgetal2);
let Aftrekken = parseFloat(randomgetal1) - parseFloat(randomgetal2);
let Delen = parseFloat(randomgetal1) / parseFloat(randomgetal2);

let uitkomstsom = 'De uitkomst van de som is:' + Optellen;
let uitkomstaftrekken = 'De uitkomst van de aftrekking is:' + Aftrekken;
let uitkomstdelen = 'De uitkomst van de deling is:' + Delen;
document.getElementById('optellen').innerText = uitkomstsom;
document.getElementsByClassName('aftrekken')[0].innerHTML = uitkomstaftrekken;
document.getElementById('Delen').innerText = uitkomstdelen;

//oef10

let leeftijd = prompt('Geef je leeftijd in?')

if (leeftijd < 18)
    alert('Helaas... Probeer de volgende editie maar opnieuw');
else
    alert('Welkom!!');