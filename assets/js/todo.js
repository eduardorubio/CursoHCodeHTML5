let data = [];
function renderTodo() {
  document.querySelector('.todo').innerHTML = '';
  data.forEach((task) => {
    const li = document.createElement('li');
    li.innerHTML = `<input id="task-${task.id}" type="checkbox">
                    <label for="task-${task.id}">${task.title}</label>
                    <button type="button">x</button>`;
    li.querySelector('input').addEventListener('change', (e) => {
      if (e.target.checked) {
        li.classList.add('complete');
      } else {
        li.classList.remove('complete');
      }
    });
    li.querySelector('button').addEventListener('click', (e) => {
      const li = e.target.parentNode;
      const title = li.querySelector('label').innerText;
      const todoId = li.querySelector('input').id.split('-')[1];
      if (confirm(`Deseja realmente excluir a tarefa ${title}?`)) {
        data = data.filter((task) => task.id !== parseInt(todoId));
        renderTodo();
      }
    });
    document.querySelector('.todo').append(li);
  });
}
document.querySelector('#new-task').addEventListener('keyup', (e) => {
  if (e.key === 'Enter') {
    data.push({ id: data.length + 1, title: e.target.value });
    e.target.value = '';
    renderTodo();
  }
});

renderTodo();
