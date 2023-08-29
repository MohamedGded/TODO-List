// script.js
$(document).ready(function() {
    $('#addTask').click(function() {
      var taskText = $('#taskInput').val();
      if (taskText !== '') {
        $('#taskList').append('<li class="list-group-item">' + taskText + ' <button class="btn btn-danger btn-sm float-right deleteTask">Delete</button></li>');
        $('#taskInput').val('');
      }
    });
  
    $('#taskList').on('click', '.deleteTask', function() {
      $(this).parent().remove();
    });
  });
  