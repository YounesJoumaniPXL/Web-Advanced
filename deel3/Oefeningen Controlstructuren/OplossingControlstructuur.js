window.onload = function () {
    vraag7();
}
function vraag1() {
    let geboortejaar = prompt('Wat is je geboortejaar?');
    let datum = new Date().getFullYear();

    if (datum - geboortejaar > 20) {
        alert('Je bent oud genoeg om de informatie op deze pagina te bekijken');
    }
}

function vraag2(){

    let sporten = prompt('Sport je graag? ja of nee?');
    if (sporten.toLowerCase() === 'ja') {
        alert('Just do it!');
    }
    else {
    alert('Jammer, blijf dan maar liggen');
    }
}

function vraag3(){
let uur = new Date().getHours();
let minuut = ('0' + new Date().getMinutes()).slice(-2) ;
    /*let minutes1 = new Date().getMinutes();

    if (minutes1 < 10)
    {
        minutes1 = '0' + minutes1;
    }*/

if (uur < 12){
    console.log(`Het is ${uur}:${minuut} uur Voormiddag`);
}
else
{
    console.log(`Het is ${uur}:${minuut} uur Voormiddag`);
}
}

function vraag4(){
let date = new Date();
let uur = 17;

if (uur >= 7 && uur < 12)
{
    document.getElementById('vraag4').innerText = `Goedemorgen! Het is ${uur} uur!`;
}
else if (uur >= 12 && uur < 18)
{
    document.getElementById('vraag4').innerText = `Goede dag! Het is ${uur} uur!`;
}
else
{
    document.getElementById('vraag4').innerText = `Goede avond! Het is ${uur} uur!`;
}
}

function vraag5(){
let randomgetal = -1;
do {
    var inputOk = true;
    randomgetal = prompt('Geef me een random getal?');
    if (randomgetal < 50) {
        alert('Te laag');
        inputOk=false;
    } else if (randomgetal == 50) {
        document.getElementById('vraag5').innerText = 'Proficiat, goed gegokt';
    } else {
        alert('Te Hoog');
        inputOk = false;
    }
    }
while (inputOk ===false);
}

function vraag6(){
    let vraag = prompt('Sport je graag?');

    switch (vraag.toLowerCase()) {
        case 'ja':
            alert('Just do it!');
            break;
        case 'nee':
            alert('Jammer, blijf dan maar liggen');
            break;
        default:
            alert('Dat was niet duidelijk, antwoord je vanuit je luie zetel?');
    }
}

function vraag7(){
let dag = new Date();
let maand = dag.getMonth();
let month = '';

switch (maand){
    case 0:
        month = 'januari';
        break;
    case 1:
        month = 'februari';
        break;
    case 2:
        month = 'maart';
        break;
    case 3:
        month = 'april';
        break;
    case 4:
        month = 'mei';
        break;
    case 5:
        month = 'juni';
        break;
    case 6:
        month = 'juli';
        break;
    case 7:
        month = 'augustus';
        break;
    case 8:
        month = 'september';
        break;
    case 9:
        month = 'oktober';
        break;
    case 10:
        month = 'november';
        break;
    case 11:
        month = 'december';
        break;
}
document.getElementById('vraag7').innerText = `De maand is ${month}`;
}



