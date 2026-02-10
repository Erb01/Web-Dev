
const form = document.querySelector('.todo-form');
const input = document.querySelector('#todo-input');
const list = document.querySelector('#todo-list');

function createTodoItem(text, isDone = false) {
  const li = document.createElement('li');
  li.className = 'todo-item';

  const left = document.createElement('div');
  left.className = 'todo-left';

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.checked = isDone;

  const span = document.createElement('span');
  span.className = 'todo-text';
  span.textContent = text;

  if (isDone) {
    span.classList.add('done');
  }

  checkbox.addEventListener('change', () => {
    span.classList.toggle('done', checkbox.checked);
  });

  const deleteButton = document.createElement('button');
  deleteButton.type = 'button';
  deleteButton.className = 'delete-btn';
  deleteButton.setAttribute('aria-label', 'Delete');
  deleteButton.textContent = '🗑';

  deleteButton.addEventListener('click', () => {
    list.removeChild(li);
  });

  left.appendChild(checkbox);
  left.appendChild(span);
  li.appendChild(left);
  li.appendChild(deleteButton);

  return li;
}

function addTaskFromInput() {
  const value = input.value.trim();
  if (!value) return;

  const item = createTodoItem(value);
  list.appendChild(item);
  input.value = '';
  input.focus();
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  addTaskFromInput();
});

[
  { text: 'First item', done: true },
  { text: 'Second item', done: false },
  { text: 'Third item', done: false },
].forEach((task) => {
  list.appendChild(createTodoItem(task.text, task.done));
});
