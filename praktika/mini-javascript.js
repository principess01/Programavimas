// JAVA SCRIPT MINI UZDUOTYS
const a1 = 4;
console.log(a1);

const a2 = 7;
console.log(a2);

const a3 = 12;
console.log(a3);

console.clear();

const b1 = 'mama';
console.log(b1);

const b2 = 'dukra';
console.log(b2);

const b3 = 'vaikas';
console.log(b3);

console.clear();

const loto1 = [2, 7, 5, 9, 18];
console.log(loto1);

const l1 = 2;
const l2 = 7;
const l3 = 5;
const l4 = 9;
const l5 = 18;

const totalSum1 = [l1 + l2 + l3 + l4 + l5];
console.log(totalSum1);

const loto2 = [12, 5, 4, 85, 19];
console.log(loto2);

const o1 = 12;
const o2 = 5;
const o3 = 4;
const o4 = 85;
const o5 = 19;

const totalSum2 = [o1 + o2 + o3 + o4 + o5];
console.log(totalSum2);

const loto3 = [25, 1, 55, 88, 45];
console.log(loto3);

const t1 = 25;
const t2 = 1;
const t3 = 55;
const t4 = 88;
const t5 = 45;

const totalSum3 = [t1 + t2 + t3 + t4 + t5];
console.log(totalSum3);

const menu1 = 'vistiena' + ', ' + 'kiauliena' + ', ' + 'steikas' + ', ' + 'sriuba' + ', ' + 'saltibarsciai' + '.';
console.log(menu1);

const menu2 = 'kiausiniai' + ', ' + 'lavasas' + ', ' + 'kebabas' + ', ' + 'ceburekai' + ', ' + 'kibinai' + '.';
console.log(menu2);

const menu3 = 'makaronai' + ', ' + 'grikiai' + ', ' + 'ryziai' + ', ' + 'bananai' + ', ' + 'arbuzas' + '.';
console.log(menu3);

console.clear();

//Skaiciu kintamieji
let skaicius1 = 20;
let skaicius2 = 30;

if (skaicius1 > skaicius2) {
    console.log("Saldainis - Pirmas skaicius didesnis.");
    } 
    else {
        console.log("Bandykite kita karta.");
        }

if (skaicius1 < skaicius2) {
    console.log("Saldainis - Antras skaicius didesnis.");
    } 
    else {
        console.log("Bandykite kita karta.");
        }

if (skaicius1 === skaicius2) {
    console.log("Saldainis - Skaiciai lygus.");
    } 
    else {
        console.log("Bandykite kita karta.");
        }

if (skaicius1 !== skaicius2) {
    console.log("Saldainis - Skaiciai nelygus.");
    } 
    else {
        console.log("Bandykite kita karta.");
        }

if (skaicius1 >= skaicius2) {
    console.log("Saldainis - Pirmas skaicius didesnis arba lygus.");
    } 
    else {
        console.log("Bandykite kita karta.");
        }

if (skaicius1 <= skaicius2) {
    console.log("Saldainis - Antras skaicius didesnis arba lygus.");
    } 
    else {
        console.log("Bandykite kita karta.");
        }

//Zodziu kintamieji

let tekstas1 = "Labutis";
let tekstas2 = "Sveikutis";

// Palyginimas pagal ilgi

if (tekstas1.length > tekstas2.length){
    console.log("Karamele - Pirmas tekstas ilgesnis.");
    } 
    else {
        console.log("Bandykite kita karta.");
        }

if (tekstas1.length < tekstas2.length) {
    console.log("Karamele - Antras tekstas ilgesnis.");
    } 
    else {
        console.log("Bandykite kita karta.");
        }

if (tekstas1.length === tekstas2.length) {
    console.log("Karamele - Tekstu ilgiai lygus.");
    } 
    else {
        console.log("Bandykite kita karta.");
        }

if (tekstas1.length !== tekstas2.length) {
    console.log("Karamele - Tekstu ilgiai nelygus.");
    } 
else {
    console.log("Bandykite kita karta.");
    }

if (tekstas1.length >= tekstas2.length) {
    console.log("Karamele - Pirmas tekstas ilgesnis arba lygus.");
} 
else {
    console.log("Bandykite kita karta.");
    }

if (tekstas1.length <= tekstas2.length) 
{console.log("Karamele - Antras tekstas ilgesnis arba lygus.");
} 
else {
        console.log("Bandykite kita karta.");
        }

// Saraso tipo kintamieji (masyvai)

let sarasas1 = [1, 2, 3];
let sarasas2 = [4, 5, 6, 7];

// Palyginimas pagal sarasu ilgiai

if (sarasas1.length > sarasas2.length) {
    console.log("Keksiukas - Pirmas sarasas ilgesnis.");
} 
else {
    console.log("Bandykite kita karta.");
    }

if (sarasas1.length < sarasas2.length) {
    console.log("Keksiukas - Antras sarasas ilgesnis.");
} else {
    console.log("Bandykite kita karta.");
}

if (sarasas1.length === sarasas2.length) {
    console.log("Keksiukas - Sarasu ilgiai lygus.");
} else {
    console.log("Bandykite kita karta.");
}

if (sarasas1.length !== sarasas2.length) {
    console.log("Keksiukas - Sarasu ilgiai nelygus.");
} else {
    console.log("Bandykite kita karta.");
}

if (sarasas1.length >= sarasas2.length) {
    console.log("Keksiukas - Pirmas sarasas ilgesnis arba lygus.");
} else {
    console.log("Bandykite kita karta.");
}

if (sarasas1.length <= sarasas2.length) {
    console.log("Keksiukas - Antras sarasas ilgesnis arba lygus.");
} else {
    console.log("Bandykite kita karta.");
}

// Ciklo 

function sumaIntervale(start, end) {
    let suma = 0;
    for (let i = start; i <= end; i++) {
        suma += i;
    }
    return suma;
}

console.log(sumaIntervale(0, 0));   // 0
console.log(sumaIntervale(0, 4));   // 10
console.log(sumaIntervale(0, 100)); // 5050
console.log(sumaIntervale(574, 815)); // 415269
console.log(sumaIntervale(-50, 50)); // 0
console.log(sumaIntervale(-70, 30)); // -1320


function apverstiTekstą(tekstas) {
    let apverstasTekstas = '';
    for (let i = tekstas.length - 1; i >= 0; i--) {
        apverstasTekstas += tekstas[i];
    }
    return apverstasTekstas;
}

console.log(apverstiTekstą("abcdef")); // "fedcba"

function skaiciuotiDalijimus(start, end, daliklis) {
    let skaiciai = 0;
    for (let i = start; i <= end; i++) {
        if (i % daliklis === 0) {
            skaiciai++;
        }
    }
    return skaiciai;
}

function ataskaita(start, end) {
    console.log(`Skaičių intervale tarp ${start} ir ${end}, besidalijančių be liekanos iš 3 yra ${skaiciuotiDalijimus(start, end, 3)} vienetai.`);
    console.log(`Skaičių intervale tarp ${start} ir ${end}, besidalijančių be liekanos iš 5 yra ${skaiciuotiDalijimus(start, end, 5)} vienetai.`);
    console.log(`Skaičių intervale tarp ${start} ir ${end}, besidalijančių be liekanos iš 7 yra ${skaiciuotiDalijimus(start, end, 7)} vienetai.`);
}

ataskaita(0, 11);
ataskaita(8, 31);
ataskaita(-18, 18);

