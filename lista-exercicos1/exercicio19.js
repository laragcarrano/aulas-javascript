function aspirar (distanciaParede){
    let= passos=0;
    while(true){
        passos++;
        if(passos===distanciaParede){
            console.log("Bateu e Parou!");
            break;
        }
    }
}
aspirar(2);