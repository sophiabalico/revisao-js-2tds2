let massas = ["Tradicional", "Integral", "Pan"];
let molhos = ["Molho de Tomate", "Molho Branco", "Molho Pesto"];
let queijos = ["Mussarela", "Queijo Prato", "Provolone", "Gorgonzola"];
let carnes = ["Calabresa", "Pepperoni", "Frango", "Bacon"];
let vegetais = ["Tomate", "Cebola", "Pimentão", "Azeitona", "Manjericão"];

let pizza = [];

pizza.push(massas[1]);
pizza.push(molhos[0]);
pizza.push(queijos[2]);
pizza.push(carnes[3]);
pizza.push(vegetais[4]);

console.log("pizza montada:");

for (let i = 0; i < pizza.length; i++) {
    console.log(pizza[i]);
}


let armas = ["sniper", "fuzil", "AK47", "MP40","magnum"];
let ataques = [];

ataques.push("leleo");
ataques.push(armas[0]);
ataques.push(armas[1]);
ataques.push(armas[2]);
ataques.push(armas[3]);
ataques.push(armas[4]);

console.log("nome:leleo");

for (let i = 0; i < ataques.length; i++) {
    if (i == 0) {
        console.log("nome do rôbo:" + ataques[i]);
    } else {
        console.log("ataque " + i + ":" + ataques[i]);
    }
}
