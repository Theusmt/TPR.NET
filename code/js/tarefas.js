document.addEventListener('DOMContentLoaded', function() {
  // Seleciona o formulário na página
  const form = document.querySelector('form');

  // Adiciona um ouvinte de eventos para o evento de envio do formulário
  form.addEventListener('submit', function(event) {
    // Previne o comportamento padrão do envio do formulário (recarregar a página)
    event.preventDefault();

    // Obtém os valores dos campos do formulário
    const nome = document.getElementById('tarefa-nome').value;
    const descricao = document.getElementById('tarefa-descricao').value;
    const categoria = document.getElementById('tarefa-categoria').value;
    const valor = document.getElementById('valor-tarefa').value;
    const data = document.getElementById('data-tarefa').value;
    const telefone = document.getElementById('telefone').value;
    

    // Cria um objeto de tarefa com os valores obtidos
    const task = {
      nome,
      descricao,
      categoria,
      valor,
      data,
      telefone
    };

    // Recupera as tarefas armazenadas no localStorage, ou um array vazio se não houver nenhuma
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    // Adiciona a nova tarefa ao array de tarefas
    tasks.push(task);
    // Armazena o array de tarefas atualizado no localStorage
    localStorage.setItem('tasks', JSON.stringify(tasks));
    // Exibe uma mensagem de alerta indicando que a tarefa foi criada
    alert("Criação de tarefa concluída");

    // Limpa os campos do formulário após o cadastro
    form.reset();
  });
});
