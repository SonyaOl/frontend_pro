 //Є блок із текстом на сторінці та кнопка. При натисканні на кнопку текст змінює колір. При повторному натисканні – повертається попередній колір
 let button = document.querySelector('.color-button');
 let text = document.querySelector('.color-text');

 button.addEventListener('click', changeColor);

 function changeColor() {
     text.classList.toggle('change-color');
 }