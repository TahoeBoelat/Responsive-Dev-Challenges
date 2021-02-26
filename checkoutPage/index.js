const MinusButton = document.getElementById('buttonMinus');
const PlusButton = document.getElementById('buttonAdd');
const InputFile = document.getElementById('inputAmmount');

MinusButton.addEventListener('click', event => {
    event.preventDefault();
    const currentValue = Number(InputFile.value) || 0;
    InputFile.value = currentValue - 1;
});

PlusButton.addEventListener('click', event => {
    event.preventDefault();
    const currentValue = Number(InputFile.value) || 0;
    InputFile.value = currentValue + 1;
});
