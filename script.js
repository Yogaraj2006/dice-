const diceElement = document.getElementById('dice');
const resultElement = document.getElementById('result');
const rollButton = document.getElementById('rollButton');

// Unicode dice characters from ⚀ (U+2680) to ⚅ (U+2685)
const diceUnicode = ['⚀','⚁','⚂','⚃','⚄','⚅'];

rollButton.addEventListener('click', () => {
    const roll = Math.floor(Math.random() * 6);
    diceElement.textContent = diceUnicode[roll];
    resultElement.textContent = `You rolled a ${roll + 1}!`;
    diceElement.style.transform = 'rotate(' + (360 * Math.random()) + 'deg)';
});
