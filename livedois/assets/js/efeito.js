const section = document.querySelector('section');
const botaoMenu = document.querySelector('button.menu');
const elementoTextoUm = document.getElementById("textoUm");
const elementoTextoDois = document.getElementById("textoDois");

var menuAtivo = false; // Estado para controlar a troca de texto

// Define os conjuntos de textos para alternância
var textosOriginais = [elementoTextoUm.textContent, elementoTextoDois.textContent];
var textosAlternativos = ["VIRAR", "ALUNO"];
var textosAtuais = [...textosOriginais]; // Inicia com os textos originais

// Índices para controle da animação
var indiceAtual = 0;
var letraAtual = 0;

botaoMenu.addEventListener('click', () => {
  section.classList.toggle('ativo');
  botaoMenu.classList.toggle('ativo');
  alternarModoTexto();
});

function alternarModoTexto() {
  menuAtivo = !menuAtivo;
  textosAtuais = menuAtivo ? textosAlternativos : textosOriginais;
  // Reinicia os índices para a nova animação
  indiceAtual = 0;
  letraAtual = 0;
  // Inicia a animação para o primeiro texto
  exibirTextoGradualmente();
}

function exibirTextoGradualmente() {
  var elementoAtual = indiceAtual === 0 ? elementoTextoUm : elementoTextoDois;
  var textoAtual = textosAtuais[indiceAtual];
  elementoAtual.textContent = textoAtual.substring(0, letraAtual + 1);

  if (letraAtual < textoAtual.length) {
    letraAtual++;
    setTimeout(exibirTextoGradualmente, 100); // Continua a animação para a letra atual
  } else if (indiceAtual < textosAtuais.length - 1) {
    // Passa para o próximo texto após um pequeno atraso
    indiceAtual++;
    letraAtual = 0;
    setTimeout(exibirTextoGradualmente, 500); // Dá um espaço antes de começar o próximo texto
  } else {
    // Reset para permitir a reinicialização da animação na próxima alternância
    letraAtual = 0;
    indiceAtual = 0;
  }
}