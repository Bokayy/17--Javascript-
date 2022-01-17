const ime = 'Igor';
const posao = 'SamSvojRob'
const godinaRođenja = 1983;
const godina = 2022;

/* const mojiPodaci = "Ja sam " + ime + " " + (godina-godinaRođenja) + '-godisnji' + " " + posao +'!'
console.log(mojiPodaci); */

let mojiPodaci = `Ja sam ${ime}, ${godina - godinaRođenja}-godišnji ${posao}`; 
console.log(mojiPodaci);

console.log('String\n\
sa više \n\
linija\n\
koda');

console.log(`String
sa više
linija
koda`);

const zemlja = 'Hrvatska';
const populacija = 3.8e+6;
const kontinent = 'Europa';

/* console.log(zemlja +' '+'ima'+' '+populacija+' '+'M'+' '+'stanovnika'+' '+'i nalazi se u'+' '+kontinent); */
console.log(`${zemlja} ima ${populacija} M stanovnika i nalazi se u ${kontinent}`);