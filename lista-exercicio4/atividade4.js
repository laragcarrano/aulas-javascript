const nomesRepetidos = ['João', 'Maria', 'João', 'Pedro', 'Maria'];

const limparLista=(lista)=>[...new Set(lista)];

console.log(limparLista(nomesRepetidos));
console.log(nomesRepetidos);