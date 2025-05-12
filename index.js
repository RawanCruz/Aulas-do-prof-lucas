// Adiciona funcionalidade de log para outros botões
document.querySelectorAll('.botao').forEach((btn, index) => {
  btn.addEventListener('click', () => {
    // Apenas logando para outros botões
    if (btn !== document.querySelector('a button')) {
      console.log(`Botão ${index + 1} clicado`);
    }
  });
});
