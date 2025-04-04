/*
ARRAY - is a collection of elements of the same type(sarašas, Arėjus, matrica, masyvas, list'as
- k++ / ++k prideda vienu vienetu skaičiaus reikšmę
- k-- / --k atima vienu vienetu skaičiaus reikšmę
*/

const empty = [];
console.log(empty);

const luckyNumbers = [7, 777, 13, 666, 8, 2];
console.log(luckyNumbers);

const students = ['Petras', 'Maryte', 'Jonas', 'Egle'];
console.log(students);

const firstNumber = luckyNumbers[0];
console.log(firstNumber);

console.log(luckyNumbers[0]);
console.log(luckyNumbers[1]);
console.log(luckyNumbers[2]);
console.log(luckyNumbers[3]);
console.log(luckyNumbers[4]);
console.log(luckyNumbers[5]);
console.log(luckyNumbers[6]);
console.log(luckyNumbers[7]);

console.log(students);

console.log(students[0]);
console.log(students[1]);
console.log(students[2]);
console.log(students[3]);
console.log(students[4]);
console.log(students[5]);
console.log(students[-1]);
console.log(students[-2]);

console.log(empty.length);
console.log(luckyNumbers.length);
console.log(students.length);

console.clear();

const numbers = [10, 2, 8, 4, 6];

const totalSum1 = numbers[0] + numbers[1] + numbers[2] + numbers[3] + numbers[4];
console.log(totalSum1);

let totalSum2 = 0;

totalSum2 = totalSum2 + numbers[0];
totalSum2 = totalSum2 + numbers[1];
totalSum2 = totalSum2 + numbers[2];
totalSum2 = totalSum2 + numbers[3];
totalSum2 = totalSum2 + numbers[4];
totalSum2 = totalSum2 + numbers[5];
totalSum2 = totalSum2 + numbers[6];
console.log(totalSum2);

console.clear();

let totalSum3 = 0;
totalSum3 += numbers[0];
totalSum3 += numbers[1];
totalSum3 += numbers[2];
totalSum3 += numbers[3];
totalSum3 += numbers[4];
console.log(totalSum3);

console.clear();


const dictionary = ['pomidoras', 'agurkas', 'morka', 'bulve', 'paprika', 'svogunas'];

// Patiekalui reikes: a, b, c, d.

const sentence1 = 'Patiekalui reikes: ' + dictionary[0] + ', ' + dictionary[1] + ', ' + dictionary[2] + ', ' + dictionary[3] + ',' + dictionary[4] + ', ' + dictionary[5] + dictionary[6]  + '.';
//const s1 = `Patiekalui reikes: ${dictionary[0]}, ${dictionary[1]}, ${dictionary[2]}, ${dictionary[3]}. ${dictionary[4]}, ${dictionary[5]}.`;

console.log(sentence1);

let sentence2 = 'Patiekalui reikes: ';
 sentence2 += dictionary[0] + ', ';
 sentence2 += dictionary[1] + ', ';
 sentence2 += dictionary[2] + ', ';
 sentence2 += dictionary[3] + ', ';
 sentence2 += dictionary[4] + ', ';
 sentence2 += dictionary[5] + ', ';
 sentence2 += dictionary[6] + '.';

console.log(sentence2);

console.clear();

let index = 0;

let sentance3 = 'Patiekalui reikes: ';

sentance3 += dictionary[index] + ', ';
index += 1;

sentance3 += dictionary[index] + ', ';
index += 1;

sentance3 += dictionary[index] + ', ';
index += 1;

sentance3 += dictionary[index] + ', ';
index += 1;

sentance3 += dictionary[index] + ', ';
index += 1;

sentance3 += dictionary[index] + ', ';
index += 1;

sentance3 += dictionary[index] + '.';

console.log(sentance3);

console.clear();

let k = 0;
k = k + 1;
k += 1;
k++;
++k;

let i = 0;
let sentence4 = 'Patiekalui reikes: ';
sentence4 += dictionary[i++] + ', ';
sentence4 += dictionary[i++] + ', ';
sentence4 += dictionary[i++] + ', ';
sentence4 += dictionary[i++] + ', ';
sentence4 += dictionary[i++] + ', ';
sentence4 += dictionary[i++] + ', ';
sentence4 += dictionary[i++] + '.';
console.log(sentence4);

let j = -1;
let sentence5 = '++ Patiekalui reikes: ';
sentence5 += dictionary[++j] + ', ';
sentence5 += dictionary[++j] + ', ';
sentence5 += dictionary[++j] + ', ';
sentence5 += dictionary[++j] + ', ';
sentence5 += dictionary[++j] + ', ';
sentence5 += dictionary[++j] + ', ';
sentence5 += dictionary[++j] + '.';
console.log(sentence5);

