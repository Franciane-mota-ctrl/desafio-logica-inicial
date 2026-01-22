let Nickname = "Kitcat"; 
let NivelDoHeroi = 7000; 
//Se XP for menor do que 1.000 = Ferro 
//Se XP for entre 1.001 e 2.000 = Bronze 
//Se XP for entre 2.001 e 5.000 = Prata 
//Se XP for entre 5.001 e 7.000 = Ouro 
//Se XP for entre 7.001 e 8.000 = Platina 
//Se XP for entre 8.001 e 9.000 = Ascendente 
//Se XP for entre 9.001 e 10.000= Imortal 
//Se XP for maior ou igual a 10.001 = Radiante 

if (NivelDoHeroi < 1000){ 
console.log("O nível do Héroi " + Nickname + " é ferro") 
} else if (NivelDoHeroi >= 1001 && NivelDoHeroi <= 2000){ 
console.log("O nível do Héroi " + Nickname + " é Bronze") 
}else if (NivelDoHeroi >= 2001 && NivelDoHeroi <= 5000){ 
console.log("O nível do Héroi " + Nickname + " é Prata") 
}else if (NivelDoHeroi >=5001 && NivelDoHeroi <= 7000){ 
console.log("O nível do héroi " + Nickname + " é ouro") 
}else if (NivelDoHeroi >= 7001 && NivelDoHeroi<= 8000){ 
console.log("O nível do héroi " + Nickname + " é platina") 
}else if(NivelDoHeroi >= 8001 && NivelDoHeroi <= 9000){ 
console.log(" O nível do héroi " + Nickname + " é ascedente") 
}else if(NivelDoHeroi >= 9001 && NivelDoHeroi <= 10000){ 
console.log("O nível do héroi " + Nickname + " é Imortal") 
}else {console.log ("O nível do héroi " + Nickname + " é radiante") 
}