const igor = 39;
const punoljetan = igor >= 18;

if(punoljetan){
    console.log('Mozes voziti auto 🚗');
}

if (igor >= 18){
    console.log('Mozes voziti auto 🚗');
}

const maloljetan = 15;

if(maloljetan >= 18){
    console.log('Mozes voziti auto 🚗');
}
else{
    const razmakGodina = 18-maloljetan;
    console.log(`Ne mozes voziti auto 🚗. pričekaj još ${razmakGodina} godine`);
}

const godinaRođenja = 1999;

if(godinaRođenja <=2000){
    let stoljece = 20;
    console.log(stoljece);
}
else{
    let stoljece = 21;
}

//console.log(stoljece); //broken jer je let lokalna tj. blok varijabla

const hrvatska = 3.8e+6;
let prosjek;

if(hrvatska >= 33e+6){
    prosjek = ` iznad prosjeka`
}
else{
    prosjek = `za ${33e+6-hrvatska} ispod prosjeka`
}

console.log(`Hrvatska populacija je za ${prosjek}`);