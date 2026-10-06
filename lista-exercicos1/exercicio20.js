const calcularGastoTotal=(salarios)=>{
    let gastoTotal=0;
    for(const salario of salarios){
        const valor=salario<2000?salario*1.1:salario;
        gastoTotal+=valor;
    }
    return gastoTotal;
};
console.log(calcularGastoTotal([1500, 2500, 1800]));