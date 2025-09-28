const form = document.getElementById('form-tarea');
const input = document.getElementById('nueva-tarea');
const lista = document.getElementById('lista-tareas');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const texto = input.value.trim();
  if (texto === '') return;

  const li = document.createElement('li');
  li.innerHTML = `
    <span>${texto}</span>
    <button class="completada">Completada</button>
    <button class="eliminar">Eliminar</button>
  `;
  lista.appendChild(li);
  input.value = '';
});

lista.addEventListener('click', function(e) {
  if (e.target.classList.contains('completada')) {
    const span = e.target.parentElement.querySelector('span');
    span.style.textDecoration = 'line-through';
    span.style.background = '#d4edda'; 
  }
  if (e.target.classList.contains('eliminar')) {
    e.target.parentElement.remove();
  }
});
