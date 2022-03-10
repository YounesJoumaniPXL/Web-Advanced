window.onload = function () {
    vraag9();
}
function vraag1() {
    let Opleidingen = ['Opleiding1', 'Opleiding2', 'Opleiding3', 'Opleiding4', 'Opleiding5'];
    console.log(Opleidingen.length);
}

function vraag2() {
    let Opleidingen = ['Opleiding1', 'Opleiding2', 'Opleiding3', 'Opleiding4', 'Opleiding5'];
    Opleidingen.push('Bachelor Multimedia- en Commmunicatietechnologie')
    console.log(Opleidingen.length);
}

function vraag3() {
    let Opleidingen = ['Opleiding1', 'Opleiding2', 'Opleiding3', 'Opleiding4', 'Opleiding5'];
    Opleidingen.push('Bachelor Multimedia- en Commmunicatietechnologie')
    console.log(Opleidingen.join('\n'));
}

function vraag4() {
    const hondenrassen = ['hond1', 'hond2', 'hond3', 'hond4', 'hond5', 'hond6', 'hond7'];
    let vraag = prompt('Geef een nummer van 1 tot 10?');
    let hond = hondenrassen[vraag - 1];

    if ((vraag - 1) >= 1 && (vraag -1) <= 10){
        console.log(hond);
    }else{
        console.log('Sorry, katten niet toegelaten');
    }
}

function vraag5() {
    const hondenrassen = ['hond1', 'hond2', 'hond3', 'hond4', 'hond5', 'hond6', 'hond7'];
    hondenrassen.unshift('hond8','hond9','hond10');
    console.log(hondenrassen);
}

function vraag6() {
    const hondenrassen = ['hond1', 'hond2', 'hond3', 'hond4', 'hond5', 'hond6', 'hond7'];
    hondenrassen.pop();
    hondenrassen.shift();
    console.log(hondenrassen);
}

function vraag7() {
    let fruits = ['banaan', 'mango', 'appel', 'peer'];
    fruits.splice(0, 1, 'kiwi');
    fruits.splice(3, 1);
    console.log(fruits);
}

function vraag8() {
    let today = new Date();
    let currentMonth = today.getMonth();
    let currentYear = today.getFullYear();
    let numberOfDays = new Date(currentYear, currentMonth + 1, 0).getDate();

    for (let i = 1; i <= numberOfDays; i++) {
        console.log(i + '/03/2021');
    }
}

function vraag9() {
    let dagenPerMaand = [30, 28, 30, 31, 30, 31, 30, 31, 30, 31, 30, 31];
    let dagenVanDeWeek = ['zo', 'ma', 'di', 'woe', 'do', 'vr', 'za'];

    let today = new Date();
    let currentMonth = today.getMonth();
    let currentYear = today.getFullYear();
    let numberOfDays = new Date(currentYear, currentMonth + 1, 0).getDate(); // Huidige maand, maart

    let startDay = new Date(currentYear, currentMonth, 1).getDay(); // 1

    for (let i = 1; i <= numberOfDays; i++) {
      if(startDay > 6){
          startDay = 0;
      }
      console.log( dagenVanDeWeek[startDay] + ', ' + i+'/03/2021'); // ma, 1/03/2021
      startDay += 1; // 3
  }
}
