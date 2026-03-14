const generatorBtn = document.getElementById('generator-btn');
const lottoNumbersContainer = document.getElementById('lotto-numbers-container');

generatorBtn.addEventListener('click', () => {
  lottoNumbersContainer.innerHTML = '';
  const numbers = new Set();
  while (numbers.size < 6) {
    const randomNumber = Math.floor(Math.random() * 45) + 1;
    numbers.add(randomNumber);
  }

  const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);

  sortedNumbers.forEach(number => {
    const numberElement = document.createElement('div');
    numberElement.classList.add('lotto-number');
    numberElement.textContent = number;
    lottoNumbersContainer.appendChild(numberElement);
    setNumberBackgroundColor(number, numberElement);
  });
});

function setNumberBackgroundColor(number, element) {
    if (number <= 10) {
        element.style.backgroundColor = '#f4a261';
    } else if (number <= 20) {
        element.style.backgroundColor = '#e76f51';
    } else if (number <= 30) {
        element.style.backgroundColor = '#d62828';
    } else if (number <= 40) {
        element.style.backgroundColor = '#2a9d8f';
    } else {
        element.style.backgroundColor = '#264653';
    }
}
