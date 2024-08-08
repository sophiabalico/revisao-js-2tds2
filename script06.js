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