// conforme a repetição do número vai repetir as palmas também

let quantidadePalmas = 19634;
let sequenciaPalmas = "";

for (let i = 1; i <= quantidadePalmas; i++){
    sequenciaPalmas = sequenciaPalmas + "👏🏻";

    if (i%5 === 0){
        sequenciaPalmas+= "🎉 "
    }
}
console.log(sequenciaPalmas);
