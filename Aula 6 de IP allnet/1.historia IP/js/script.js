// Este arquivo contém scripts JavaScript para adicionar interatividade à página sobre a história da rede de IP. 

document.addEventListener('DOMContentLoaded', function() {
    // Exemplo de uma função para mostrar uma mensagem ao clicar em um botão
    const button = document.getElementById('infoButton');
    if (button) {
        button.addEventListener('click', function() {
            alert('Você clicou no botão para mais informações sobre a história da rede de IP!');
        });
    }

    // Função para exibir uma seção específica ao clicar em um link
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});