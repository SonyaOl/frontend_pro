$(function () {
    const STORAGE_KEY = 'todos';

    const $form = $('.js--form');
    const $input = $('.js--form__input');
    const $list = $('.js--todos-wrapper');
    const $empty = $('.js--empty');
    const $modalText = $('.js--modal-text');
    const taskModal = new bootstrap.Modal('#taskModal');

    // Зберігаємо не HTML, а масив об'єктів — так стан чекбоксів
    // відновлюється коректно, а текст завдання не може зламати розмітку.
    let todos = [];

    try {
        todos = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    } catch (e) {
        todos = [];
    }

    function saveTasks() {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
    }

    function createItem(todo, index) {
        const $li = $('<li>', {
            class: 'todo-item' + (todo.done ? ' todo-item--checked' : ''),
            'data-index': index
        });

        $('<input>', {
            type: 'checkbox',
            class: 'checkbox',
            checked: todo.done
        }).appendTo($li);

        $('<span>', {
            class: 'todo-item__description',
            text: todo.text,
            title: 'Показати текст завдання'
        }).appendTo($li);

        $('<button>', {
            class: 'todo-item__delete',
            text: 'Видалити'
        }).appendTo($li);

        return $li;
    }

    function render() {
        $list.empty();
        $.each(todos, function (index, todo) {
            $list.append(createItem(todo, index));
        });
        $empty.toggle(todos.length === 0);
    }

    // Індекс завдання, на яке клікнули
    function indexOf($el) {
        return $el.closest('.todo-item').data('index');
    }

    // Додати завдання
    $form.on('submit', function (event) {
        event.preventDefault();

        const text = $input.val().trim();
        if (text === '') return;

        todos.push({
            text: text,
            done: false
        });
        saveTasks();
        render();
        $input.val('').focus();
    });

    // Відзначити як виконане
    $list.on('change', '.checkbox', function () {
        todos[indexOf($(this))].done = this.checked;
        saveTasks();
        render();
    });

    // Видалити завдання
    $list.on('click', '.todo-item__delete', function () {
        todos.splice(indexOf($(this)), 1);
        saveTasks();
        render();
    });

    // Показати текст завдання в модальному вікні
    $list.on('click', '.todo-item__description', function () {
        $modalText.text(todos[indexOf($(this))].text);
        taskModal.show();
    });

    render();
});