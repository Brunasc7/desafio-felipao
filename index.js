let name = "Bruna"
let xp = 10001
let category

if (xp < 1000){
    category = "Ferro"
}else if(xp >= 1001 && xp <= 2000){
    category = "Bronze"
}else if (xp >= 2001 && xp <= 5000){
    category = "Prata"
}else if(xp >= 5001 && xp <= 7000){
    category = "Ouro"
}else if(xp >= 7001 && xp <= 8000){
    category = "Platina"
}else if(xp >= 8001 && xp <= 9000){
    category = "Ascendente"
}else if(xp >= 9001 && xp <= 10000){
    category = "Imortal"
}else if(xp >= 10001){
    category = "Radiante"
}


console.log("O heroi  de nome " + name + " esta no nivel "+ xp + " de " + category);


