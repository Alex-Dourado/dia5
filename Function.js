function imprimir (num) {
    console.log ("O numero é " + num);
}

imprimir(5);
imprimir (10);
imprimir (20);


function multiplicar (a,b,c) {   //multiplica os numero abaixo 5,4,10
    return a*b*c;
}

console.log (multiplicar( 5,4,10));


function dirigir (idade,cnh){        //confirma se tem mais de 18 e a cnh é true
    if(idade > 18 && cnh == true){
        console.log ("pode dirigir");
    }else {
        console.log ("não pode dirigir");
    }
}

console.log (dirigir (19,true));
console.log (dirigir(17,false));
console.log (dirigir(19,0));
console.log (dirigir(21,1));


