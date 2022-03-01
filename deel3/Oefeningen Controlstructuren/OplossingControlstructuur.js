window.onload = function () {
    vraag3();
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

}

