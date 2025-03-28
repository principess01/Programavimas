/*
TYPEOF - duomenu tipo nustatymo operatorius
*/

console.log(typeof 5);
console.log(typeof -5);
console.log(typeof 5.5);
console.log(typeof 3,55452);
console.log(typeof 'asd');
console.log(typeof true);
console.log(typeof false);
console.log(typeof []);
console.log(typeof {});
console.log(typeof multiply);
console.log(typeof empty);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof NaN);
console.log(typeof Infinity);   
console.log(typeof Math);

const a = null;
if (a === null) {
    console.log('NULL');
}

const b = [];
if (Array.isArray(b)) {
    console.log('ARRAY');
}

const c = 5;
if (Array.isArray(c)) {
    console.log('ARRAY');
} else {
    console.log('ne arejus');
}