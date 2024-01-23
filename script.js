$(document).ready(function() {
    $('#taskForm').submit(function(event) {
      event.preventDefault(); // Evita o comportamento padrão do formulário
  
      const taskInput = $('#taskInput').val(); // Obtém o valor do campo de input
  
      if (taskInput !== '') {
        const listItem = $('<li>').text(taskInput); // Cria um elemento <li> com o texto da tarefa
        $('#taskList').append(listItem); // Adiciona o elemento <li> à lista
  
        $('#taskInput').val(''); // Limpa o campo de input
      }
    });
  
    $('#taskList').on('click', 'li', function() {
      $(this).toggleClass('completed'); // Adiciona ou remove a classe 'completed' ao clicar no item da lista
    });
  });