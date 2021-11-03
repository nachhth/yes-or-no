'use strict';

const getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const yes = document.querySelector('.si');

yes.addEventListener('mouseover', () => {
  yes.style.cssText = `top: ${getRandom(-100, 200)}px; left: ${getRandom(-100, 200)}px`;
});

let contador = 0;
const intervalo = setInterval(() => {
  const alertas = ['Que pasa? no querés el millón?', 'venga bro, vos podés', 'dale che, es un millón de euros para vos', 'y??? cuando vas a decidirte?', 'parece que sos un poco lento'];
  alert(alertas[contador]);
  console.log(alertas);
  contador++;
  console.log(alertas.length);
  if (contador === alertas.length) {
    contador = 0;
  }
}, 5000);

const no = document.querySelector('.no');

no.addEventListener('click', () => {
  alert('vale, ya me parecia que no los querias');
  clearInterval(intervalo);
});
