function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Використовуй document.querySelector для отримання посилань на елементи <input>, <button data-create>, <button data-destroy>, і <div id="boxes">.
// Homework:
const inputElement = document.querySelector('input');
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

createButton.addEventListener('click', createBoxes);
destroyButtonButton.addEventListener('click', destroyBoxes);
