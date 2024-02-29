function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
document.addEventListener('DOMContentLoaded', allContent);

function allContent() {
  const input = document.querySelector('#controls input');
  const createBtn = document.querySelector('[data-create]');
  const destroyBtn = document.querySelector('[data-destroy]');
  const boxesContainer = document.querySelector('#boxes');

  createBtn.addEventListener('click', handlerBtn);

  function handlerBtn() {
    const amount = parseInt(input.value);

    if (amount >= 1 && amount <= 100) {
      destroyBoxes();
      createBoxes(amount);
      input.value = '';
    }
  }

  destroyBtn.addEventListener('click', destroyBoxes);

  function createBoxes(amount) {
    for (let i = 0; i < amount; i++) {
      const box = document.createElement('div');
      box.style.width = `${30 + i * 10}px`;
      box.style.height = `${30 + i * 10}px`;
      box.style.backgroundColor = getRandomHexColor();
      boxesContainer.appendChild(box);
    }
  }
  
  function destroyBoxes() {
    boxesContainer.innerHTML = '';
  }

  
}




 
