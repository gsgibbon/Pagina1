const botao = document.querySelector('#botao');
const msg = document.querySelector('#msg');

botao.addEventListener('click', () => {
  msg.innerHTML = "Bem vindo ao meu trabalho de fundamentos de desenvolvimento de software.";
  botao.remove();
});