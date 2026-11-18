console.log("Sobrevivente conectado ao DOM!");
const header=document.querySelector('header');

console.log(cabecalho);

const btnTema=document.querySelector('#btn-tema');

const boasVindas=document.querySelector('#boas-vindas');

const tituloSite=document.querySelector('header h1');

const listaBeneficios=document.quertSelector('ol li');
 console.log(listaBeneficios.lenght);

const campoNome=document.querySelector('input[type="text"]');
const campoEmail=document.querySelector('input[type="email"]');

tituloSite.textContent="The Walking Date 🧟";

const citacao = document.querySelector('cite');
 citacao.innerHTML = "- <strong>Zezinho da Foice</strong>, Sobrevivente Nível 5";
 
const textoBoasVindas = document.querySelector('#boas-vindas p').textContent;
 console.log(textoBoasVindas);
 
 const asideDica = document.querySelector('aside');
 asideDica.style.borderColor = 'var(--cor-sangue)';
 
 asideDica.style.fontSize = '1.1rem';
 
 const imagem = document.querySelector('#boas-vindas img');
 console.log(imagem.getAttribute('alt'));
 
 imagem.setAttribute('alt', 'Casal de zumbis apaixonados caminhando ao pôr do sol');
 
 campoNome.value = "Sobrevivente Anônimo";
 
 const primeiraLinha = document.querySelector('tbody tr');
 primeiraLinha.classList.add('destaque-infectado');
 
 const aviso = document.createElement('p');
 
 aviso.textContent = "⚠️ ALERTA DE HORDA: Encontros hoje apenas em zonas seguras!";
 aviso.style.backgroundColor = 'var(--cor-sangue)';
 aviso.style.color = 'white';
 aviso.style.padding = '10px';
 aviso.style.textAlign = 'center';
 
 const barraAlerta = document.querySelector('#barra-alerta');
 barraAlerta.appendChild(aviso);

 const novoBeneficio = document.createElement('li');
 novoBeneficio.textContent = "Seguro contra perda de membros durante o primeiro encontro.";
 
 const listaOl = document.querySelector('#beneficios ol');
 listaOl.appendChild(novoBeneficio);
 
 const btnFechar = document.querySelector('#fechar-alerta');
 btnFechar.addEventListener('click', function () {
     document.querySelector('#barra-alerta').remove();
 });
 
 const htmlRoot = document.documentElement;
 
 btnTema.addEventListener('click', function () {
     if (htmlRoot.getAttribute('data-theme') === 'light') {
         htmlRoot.removeAttribute('data-theme');
         btnTema.textContent = "Modo Sobrevivência ☀️";
     } else {
         htmlRoot.setAttribute('data-theme', 'light');
         btnTema.textContent = "Modo Sombrio 🌙";
     }
 });
 
 const placar = document.querySelector('#placar-matches');
 const btnMatch = document.querySelector('.botao-match');
 
 btnMatch.addEventListener('click', function (event) {
     event.target.textContent = "Match Confirmado! 💘🧟";
     event.target.disabled = true;
 
     totalMatches = totalMatches + 1;
     placar.textContent = "Matches: " + totalMatches;
 });