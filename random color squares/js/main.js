const squareContainer = document.getElementById('squareContainer');
const generateButton = document.getElementById('generateButton');

generateButton.addEventListener('click', generateSquares);

function generateSquares() {
  squareContainer.innerHTML = '';

  const minSquares = 10;
  const maxSquares = 100;
  const numSquares = getRandomNumber(minSquares, maxSquares);

  for (let i = 0; i < numSquares; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.backgroundColor = getRandomColor();
    squareContainer.appendChild(square);
  }
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
