// Variáveis
var btnAbreDialog = document.querySelector('#abreDialog');
var dialog = document.querySelector('.dialogNewsletter');
var dialogBody = document.querySelector('.dialogNewsletter-body');
var dialogOverlay = document.querySelector('.dialogNewsletter-overlay');

bbtnAbreDialog.style.display = 'block';

// Quando abrir a dialog...
btnAbreDialog.addEventListener('click', function() {
  dialog.classList.add('dialogNewsletter--aberto');
  document.querySelector('.dialogNewsletter-campo').focus()
});

function fechandoDialog() {
  document.activeElement.blur();
  dialog.classList.remove('dialogNewsletter--aberto');    
  conteudoForaDialog.inert = 'false' 
}

// Listeners
document.querySelector('.dialogNewsletter-fechar').addEventListener('click', fechandoDialog);