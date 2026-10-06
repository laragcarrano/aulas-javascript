const correr=function(energiaInicial){
    let energia=energiaInicial;
    while(energia>0){
        energia-=10;
        console.log(energia);
    }
};
correr(500);