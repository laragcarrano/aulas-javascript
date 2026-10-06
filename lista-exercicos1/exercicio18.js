function traduzirStatus(status){
    const resultado=[];
    for (const item of status){
        const texto=item?"Concluído":"Pendente";
        resultado.push(texto);
    }
    return resultado;
}
console.log(traduzirStatus([true, false, true]));