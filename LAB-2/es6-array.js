let groups =["akatsuki","Konoha","7swords"];
let characters = [];
characters[0] = "Naruto";
characters[3] = "Hinata";

let positions = new Array("Hokage","Junin","jonin");
console.log(positions);

let popgroups = groups.pop();
console.log(popgroups);
console.log(groups);

groups.unshift("Animaltail");
console.log(groups);
groups.shift();
console.log(groups);

groups.splice(1, 0, "Orochimaru Group","team 7");
console.log(groups);
const groupsslide = groups.slice(1, 2);
console.log(groupsslide);


const newArr = groups.concat(positions);

console.log(newArr);
const newArr2 = [...groups, ...positions]; //spread Operator
console.log(newArr2);

console.log(newArr.toString());

//itteration
let text = "";
for (value of characters) {
	text += value + ":";
}
console.log(text);

const numbers = [10,20,30];
const sum =numbers.forEach(addNum);

let total =0;
function addNum(value,index,array) {
	console.log(value += 2);
}


const ns = numbers.map(addNumMap);
console.log(ns);
function addNumMap(value) {
    return value *2;
}

numbers.filter(over10fn);
console.log(over10fn);
function over10fn(value) {
    return value > 10;
}

const reOver10 = numbers.reduce(over10fn);
console.log(reOver10);

const everOver10 = numbers.every(over10fn);
console.log(everOver10);
const someOver10 = numbers.some(over10fn);
console.log(someOver10);

let resFind = numbers.find(over10fn)
console.log(resFind);
let resFindIndex = numbers.indexOf(over10fn);
console.log(resFindIndex);
