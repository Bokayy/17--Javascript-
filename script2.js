let zemlja, kontinent, jezik, populacija, otok;
zemlja = 'Ethiopia';
kontinent = false;
jezik = "Ethiopian"
otok = false;
populacija = 3.8e+6; //e+x definira broj decimala

console.log('Zemlja'+ ' ' + zemlja + ' ' + 'kontinent?' + ' ' + kontinent + ' ' + 'pričaju' + ' ' + jezik + ' ' +'ima ih' + ' ' +populacija);

//zadatak 2
prepolovljenaPopulacija = (populacija/2);
console.log('pola populacije etiopije je ' +" "+ prepolovljenaPopulacija);
let slovenija = 2e+6;

if (slovenija > populacija){
    console.log('Slovenija ima vise stanovnika')
}
else{
    console.log('Etiopija ima vise stanovnika')
}

populacija++; //povecava broj za 1 - nepromjenjivo jer je const

const prosjekSvijeta = 33.0e+6;
console.log(populacija > prosjekSvijeta); //jednostavna usporedba 

/* izracunaj BMI Marka i Josipa
Marko je tezak 95kg i visok 1.98m, josip je 85kg i visok 1.76
također provjeri booleanom da li je markov BMI veci od Josipovog
BMI = tezina/visina **2 */

const markoWeight = 95;
const markoHeight = 1.98;
const josipWeight = 85;
const josipHeight = 1.76;
let MarkoBMI;
let JosipBMI;

MarkoBMI = ((markoWeight/markoHeight) **2) /* ** oznacava kvadrat */
JosipBMI = ((josipWeight/josipHeight) **2)
console.log(MarkoBMI);
console.log(JosipBMI);

let tezi = MarkoBMI > JosipBMI

console.log(tezi);