//kaip yra sumuojamos reiksmes?

let a = 5;
let b = 7;
let c = a + b;
let d = a + b + c;
//console.log(a+b+c);

// Kaip elgtis su skaitmeninemis ir raidinemis reiksmemis?
// Skaitmenines reiksmes sudedamos, o raidines sujungiamos

let pirmas = 5;
let antras = 7;

// '' = sujungimas
//console.log(pirmas + antras);

//Kaip galime sukeisti reiksmes vietomis?

let i = 1;
let j = 10;
let k;
k= i; // i reiksme nebesvarbi
i = j; // i 'puode' pateko j reiksme
j = k; 

//console.log(i, j);

//automatiskai uzbaigti komandas
let vienasNamuoseFilmas = 'tv3';
//console.log(vienasNamuoseFilmas);

//geras kitnamuju uzvadinimas

let h = 'flamingas';
let paciantoVardas = "Jonas";
let paciantoAmzius = '24';
//console.log(paciantoVardas);
//console.log(paciantoAmzius);

// uzduotis 1: kas cia netinka?


let gyvunas = 'zirafa'
let amzius = 1
let arZinduolis = 'yes'

//console.log(gyvunas + ' ' + amzius)



//uzduotis 2: sukeiskime a1 ir b1 reikšmes


let a1 = 5;
let b1 = 3;
let c1;
c1 = a1;
a1 = b1;
b1 = c1;

//console.log(a1, b1)


//uzduotis 3: padarykite jog ekrane matytume 555. a2, b2 ir c2 turi išlikti penketais
let a2 = '5';
let b2 = '5';
let c2 = '5';
console.log(a2 + b2 + c2);

console.clear();

/*
1 užduotis - mokytojo suvestinė:

Susikurkite bent 6 sąrašo (array) tipo kintamuosius, kurių pirmas narys yra mokinio vardas, o toliau yra 5 skaičiaus tipo mokinio pažymiai
Sukurkite funkciją, kuri padaro šiuos veiksmus:
Į console išveda mokinio vardą
Į console išveda mokinio pažymių vidurkį ir praneša ar mokinys išlaikė ar neišlaikė kurso
Jei mokinys neišlaiko kurso, parašykite ar mokinys, gavęs vieną gerą įvertį, galėtų pasitaisyti savo vidurkį.

2 užduotis - filmų rekomendacija:

Susikurkite bent 5 sąrašo tipo kintamuosius, kurių pirmas narys yra filmo pavadinimas, antras narys yra filmo žanras, o trečias narys yra skaičiaus tipo filmo įvertis.
Susikurkite 2 kintamuosius kurie -pirmas nurodo jūsų mėgstamą žanrą ir antras nurodo jūsų norimą matyti filmo įvertį.
Padarykite funkciją, kuri iš pasirinktų 3 filmų, pagal jūsų norimą žanrą ir įvertį išveda į console kokie filmai jums patiktų. Jei joks filmas netinka, turi tai pranešti.
*/

//1 užduotis

const mokinys1 = ['Amelija', 2, 6, 7, 5, 9];
const mokinys2 = ['Kornelija', 3, 3, 2, 5, 2];
const mokinys3 = ['Vilius', 7, 10, 7, 4, 9];
const mokinys4 = ['Simona', 3, 9, 9, 10, 9];
const mokinys5 = ['Violeta', 4, 8, 7, 10, 9];

 
function mokinioVidurkis(mokinys) {
    console.log('Mokinio vardas: ' + mokinys[0])
    let sum = mokinys[1] - mokinys[2] + mokinys[3] - mokinys[4] + mokinys[5];
    let vidurkis = (mokinys[1] + mokinys[2] + mokinys[3] + mokinys[4] + mokinys[5]) / 5;
   let vidurkisNaujas = ((vidurkis * 5) + 10) / 6;
    console.log(vidurkisNaujas);
    if (vidurkis >= 3.5) {
        console.log (mokinys[0] + ' išlaikė kursą. Vidurkis yra: ' + vidurkis);
    }           
    else {
        console.log(mokinys[0] + ' neišlaikė kursą. Dabartinis vidurkis yra: ' + vidurkis);
    } 
    if (vidurkisNaujas >= 3.5) {
    console.log(moknys[0]) + ' išlaikys kursą, jei gaus 10.';
}   
}
       


mokinioVidurkis(mokinys1);
mokinioVidurkis(mokinys2);
mokinioVidurkis(mokinys3);y
mokinioVidurkis(mokinys4);
mokinioVidurkis(mokinys5);








/*
function mokinioDuomenys(mokinys) {
    console.log(mokinys[0]);
    let vidurkis = (mokinys[1] + mokinys[2] + mokinys[3] + mokinys[4] + mokinys[5]) / 5;
    console.log(vidurkis);
    if (vidurkis >= 5) {
        console.log('Mokinė islaikė kursą');
    } else {
        console.log('Mokinė neišlaikė kurso');
    }
}
*/



/*
for(let i=1; i<=6; i++) {
    const mokinys = 'mokinys' + i;
    console.log(mokinys);
}
*/