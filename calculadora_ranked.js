function calcula_Rank(vitorias, derrotas){
     saldo = vitorias - derrotas

     if (saldo <= 10){
        rank = 'Ferro'
        console.log(`O Herói tem de saldo de **${saldo}** está no nível de **${rank}**`)
     } else if(saldo >= 11 && saldo <= 20){
        rank = 'Bronze'
        console.log(`O Herói tem de saldo de **${saldo}** está no nível de **${rank}**`)
     } else if(saldo >= 21 && saldo <= 50){
        rank = 'Prata'
        console.log(`O Herói tem de saldo de **${saldo}** está no nível de **${rank}**`)
     } else if(saldo >= 51 && saldo <= 80){
        rank = 'Ouro'
        console.log(`O Herói tem de saldo de **${saldo}** está no nível de **${rank}**`)
     } else if(saldo >= 81 && saldo <= 90){
        rank = 'Diamante'
        console.log(`O Herói tem de saldo de **${saldo}** está no nível de **${rank}**`)
     } else if(saldo >= 91 && saldo <= 100){
        rank = 'Lendário'
        console.log(`O Herói tem de saldo de **${saldo}** está no nível de **${rank}**`)
     } else if(saldo >= 101){
        rank = 'Imortal'
        console.log(`O Herói tem de saldo de **${saldo}** está no nível de **${rank}**`)
     }
}

calcula_Rank(5, 4)
calcula_Rank(19, 3)
calcula_Rank(40, 6)
calcula_Rank(70, 7)
calcula_Rank(85, 4)
calcula_Rank(98, 6)
calcula_Rank(200, 10)
