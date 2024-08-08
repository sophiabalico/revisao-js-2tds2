let carro1 = "fuscao";
let carro2 = "brasilia";
let carro3 = "fiesta;";

const carro = [];
carro [0] = "celta";
carro [1] = "corsa";

console.log(carro);
console.table(carro);
console.log(carro.length);
console.clear();

let carroCopia1 = [...carro];
console.log(carro);
console.log(carroCopia1);
console.log(carro == carroCopia1);


let carroCopia2 = carro.slice();
let carroCopia3 = [].concat(carro);
let carroCopia4 = Array.from(carro);

const frutas = ["uva", "maca", "banana", "morango"];

console.table(frutas);

frutas.pop();
frutas.push("kiwi");

console.table(frutas);

