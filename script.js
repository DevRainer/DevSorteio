

document.querySelector('.sortear').addEventListener('click', () => {
  const min = parseInt(document.querySelector('.min').value);
  const max = parseInt(document.querySelector('.max').value);
  const resultSpan = document.querySelector('.result-number');

  if (isNaN(min) || isNaN(max) || min >= max) {
    resultSpan.textContent = '❌';
    return;
  }

  const sorteado = Math.floor(Math.random() * (max - min + 1)) + min;
  resultSpan.textContent = sorteado;
});
