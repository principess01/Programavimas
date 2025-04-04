/*
OBJECT - objektas, (kitose kalbose siek tiek panasus i: hashmap, dictionary)
*/

const empty = {}; // tuscias objektas
console.log(empty); // {}

const person = {
    name: 'Jonas',
    age: 99,
    isMarried: true,
};
console.log(person); // { name: 'Jonas', age: 99, isMarried: true (viską galima aprašyti) }


// Sveiki, mano vardas X.

console.log(`Sveiki, mano vardas ${person['name']}.`)

// Man yra X metu.
console.log(`Man yra ${person['age']} metu.`);

console.log(person['isMarried']); // true

//Standartine sintakse, kai paimti rakta

console.log(person['name']); // Jonas
console.log(person['age']); // 99
console.log(person['isMarried']); // true

//Supaprastinta sintakse
console.log(person.name); // Jonas
console.log(person.age); // 99
console.log(person.isMarried); // true

const demo = {
    color : 'red',
    5: 777,
    '55' = 7777,
    'is married': true,
}
console.log(demo['color']); // red
console.log(demo['5']); // 5
console.log(demo[5]); // 777
console.log(demo['55']);
console.log(demo['is married']); // true

const pc = {
    cpuCoras: 8,
    ram: 16,
    diskSpace: 512,
    diskType: 'ssd',
    os: 'win10',
}
console.log(pc);
pc.ram = 32;
console.log(pc);
pc.os = 'win98';
console.log(pc);

//Ths PC has X cores.

const s1 = `This PC has ${pc.cpuCoras}`
