const buscarNome=(nomes, nomeBuscado)=>{
    for (const nome of nomes){
        if (nome===nomeBuscado){
            return true;
        }
    }
    return false;
};
//console.log(buscarNome(["Lara","Gabriela"],"Carrano"));
console.log(buscarNome(["Lara","Gabriela"],"Lara"));