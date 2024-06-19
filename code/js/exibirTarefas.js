// Adiciona um ouvinte de eventos para garantir que o código seja executado após o carregamento do DOM
document.addEventListener('DOMContentLoaded', function() {
  // Função para carregar tarefas do localStorage e exibir na tabela
  function loadTasks() {
    // Obtém as tarefas do localStorage e converte para um array, ou um array vazio se não houver tarefas
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    // Seleciona o corpo da tabela onde as tarefas serão exibidas
    const taskTableBody = document.getElementById('taskTableBody');
    // Limpa a tabela antes de carregar as tarefas
    taskTableBody.innerHTML = '';

    // Itera sobre cada tarefa e seu índice
    tasks.forEach((task, index) => {
      // Cria uma nova linha na tabela para cada tarefa
      const row = document.createElement('tr');
      // Define o conteúdo HTML da linha com os dados da tarefa
      row.innerHTML = `
        <td>${task.nome}</td>
        <td>${task.descricao}</td>
        <td>${task.categoria}</td>
        <td>R$ ${task.valor}</td>
        <td> ${task.data}</td>
        <td>${task.telefone}</td>
        <td><button class="btn btn-success btn-sm" onclick="completeTask(${index})">Concluir</button></td>
      `;
      // Adiciona a linha ao corpo da tabela
      taskTableBody.appendChild(row);
    });
  }

  // Função para concluir uma tarefa
  window.completeTask = function(index) {
    // Obtém as tarefas do localStorage e converte para um array, ou um array vazio se não houver tarefas
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    // Remove a tarefa do array com base no índice
    tasks.splice(index, 1);
    // Atualiza o localStorage com o array de tarefas atualizado
    localStorage.setItem('tasks', JSON.stringify(tasks));
    // Recarrega a tabela após a conclusão da tarefa
    loadTasks();
    // Exibe uma mensagem de sucesso
    alert('Tarefa concluída com sucesso!');
  };

  // Carrega as tarefas ao carregar a página
  loadTasks();
});
