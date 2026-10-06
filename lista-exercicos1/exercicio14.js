const somarTotal=function(precos){ 
    let total=0;
    for(const preco of precos){
        total+=preco;
    }
    return total;
};
console.log(somarTotal([10, 20, 5]));