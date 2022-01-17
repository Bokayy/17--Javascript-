// default browser pop-up
// alert("Hello");

const js = "javascript je superduper xd"
console.log(js);
console.log(40+8-23-10);
console.log('Joža');

const jozek_barica = 'ne moze se napisati kao jozek&barica jer je & reserved';

const cant = 'new cannot be used as a variable name';

/* komentar je Shift + Alt + A */

/* nedozvoljena imena za varijable */
//const new = 28;
//const function = 28;

/* camelCase */
const imePrezime= 'Igor'; //string
const dob = 39; //integer
const polaznik = true; //boolean
let def;  //let se da deklarirati bez da se opiše
console.log(def); //undefined

console.log(typeof true);
console.log(typeof true);
console.log(typeof 23);
console.log(typeof 'algebra vježbe');
console.log(typeof null); //type is object?

/* Reduciranje koda */
const godinaStarostiStjepan = 2022 - 1991;
const godinaStarostiJosip = 2022 - 1998;
console.log(godinaStarostiStjepan);
console.log(godinaStarostiJosip);

//pisanje gore navedenog koda u jednoj liniji
console.log(godinaStarostiJosip,godinaStarostiStjepan);

//skraćivanje pomoću varijabli

const trenutnaGodina = 2022;
const godinaStarostiStjepan1 = trenutnaGodina - 1991; //31
const godinaStarostiJosip1 = trenutnaGodina - 1998; //24
console.log(godinaStarostiJosip1, godinaStarostiStjepan1);
console.log(godinaStarostiJosip1 *2, godinaStarostiStjepan1/10);

const ime = 'Igor';
const prezime = 'Jevremović';

console.log(ime + prezime); //ispiše krivo
console.log(ime + ' ' + prezime);

//matematički operateri
let x = 10 + 15;
x += 10; //x = x+10
x*=4;
x++;
x--;

//usporedbeni operateri, >,<, <=, >=
console.log(godinaStarostiJosip1 > godinaStarostiStjepan1); //izbaci boolean
console.log(godinaStarostiJosip1 >= 18); //true, provjeravamo punoljetnost
console.log(godinaStarostiJosip1 >=18); //provjeravamo punoljetnost
console.log(trenutnaGodina - 1998, trenutnaGodina - 1991); //radi isto što linija  neka
/* console.log(godinaStarostiStjepan1 || godinaStarostiJosip1); //big wtf  */

let y,z;

y = z = 25-10-5; //= je right to left kod compileanja
console.log(y,z);

const prosjek = 5 + (5 / 2);
console.log(prosjek); //bez zagrade it borkey

let zemlja, kontinent, jezik, populacija, otok;
zemlja = 'Ethiopia';
kontinent = false;
jezik = "Ethiopian"
otok = false;
populacija = 3.8e+6; //e+x definira broj decimala

console.log('Zemlja'+ ' ' + zemlja + ' ' + 'kontinent?' + ' ' + kontinent + ' ' + 'pričaju' + ' ' + jezik + ' ' +'ima ih' + ' ' +populacija);

