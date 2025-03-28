/*
Reikalinga funkcija, kuri gauna vartotojo amziu (metais) ir atitinkamai grazina zodi:
- suauges
- vaikas
Amziaus ribos kriterijus: >=18 metu.
*/
function isAdult () {
    if (age >= 18) {
        return 'suauges';
    } else {
        return "vaikas";
    }
}
console.log(isAdult(18), '->', 'suauges');
console.log(isAdult(88), '->', 'suauges');
console.log(isAdult(8), '->', 'vaikas');
console.log(isAdult(14), '->', 'vaikas');
console.log(isAdult(0), '->', 'vaikas');
console.log(isAdult(7), '->', 'vaikas');

