// Adiciona um ouvinte de eventos ao botão com id 'criar'
document.getElementById('criar').addEventListener('click', function(event) {
    // Previne o comportamento padrão do clique (se for um submit, por exemplo)
    event.preventDefault();
    // Chama a função criar()
    criar();
});

// Adiciona um ouvinte de eventos ao botão com id 'btn2'
document.getElementById('btn2').addEventListener('click', function(event) {
    // Previne o comportamento padrão do clique (se for um submit, por exemplo)
    event.preventDefault();
    // Chama a função Ver()
    Ver();
});

// Função que redireciona para a página 'tarefas.html'
function criar() {
    window.location.href = "tarefas.html";
}

// Função que redireciona para a página 'tabela.html'
function Ver(){
    window.location.href = "tabela.html";
}
function voltar(){
    window.location.href="main.html";
}
