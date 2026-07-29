//Доробити TODO лист, в якому буде можливість:

//Додати завдання
//Видалити завдання
//Відзначити як виконану
//Усі дані повинні зберегтися після перезавантаження сторінки.

let form = document.querySelector('.js--form');
let input = document.querySelector('.form__input');
const list = document.querySelector('.js--todos-wrapper');
list.innerHTML = localStorage.getItem('todoListHTML') || '';





function createLi() {
    const li = document.createElement('li');
    li.classList.add('todo-item');
    return li
}

function checkbox() {
    const input = document.createElement('input');
    input.type = "checkbox";
    input.classList.add('checkbox');
    return input
}

function createSpan(text) {
    const span = document.createElement('span');
    span.classList.add('todo-item__description');
    span.textContent = text;
    return span
}

function deleteBtn() {
    const btn = document.createElement('button');
    btn.classList.add('todo-item__delete');
    btn.textContent = 'Видалити';
    return btn
}


function saveTasks() {
    localStorage.setItem('todoListHTML', list.innerHTML);
}


function createTask(event) {
    event.preventDefault();
    if (input.value.trim() != '') {
        const li = createLi();
        li.append(checkbox(), createSpan(input.value), deleteBtn());
        list.append(li);
        input.value = '';
    }
    saveTasks();

}






list.addEventListener('click', function (event) {
    if (event.target.classList.contains('todo-item__delete')) {
        const li = event.target.closest('.todo-item');
        li.remove();

    }
    if (event.target.checked) {
        const li = event.target.closest('.todo-item');
        li.classList.add('todo-item--checked');
        event.target.setAttribute('checked');
    } else {
        const li = event.target.closest('.todo-item');
        li.classList.remove('todo-item--checked');
        event.target.removeAttribute('checked', );
    }
    saveTasks();
});


form.addEventListener('submit', createTask);