/*
Reikalinga funkcija, kuri gauna vartotojo amžių (metais) ir atitinkamai gražina žodį:
- suauges
- vaikas
Amžiaus ribos kriterijus: >=18 metų.
*/
function isAdult (age) {
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


