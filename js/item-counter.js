(function () {
    const counterNumber = document.querySelector('.counter-number');
    const counterArrowUp = document.querySelector('.counter-arrows-up');
    const counterArrowDown = document.querySelector('.counter-arrows-down');

    let curentNumber = 1;

    function renderNumber() {
        counterNumber.innerHTML = curentNumber;
    }

    function addItem() {
        curentNumber += 1;
        renderNumber();
    }

    function substractItem() {
        curentNumber === 1 ? curentNumber : (curentNumber -= 1);
        renderNumber();
    }

    counterArrowUp.addEventListener('click', addItem);
    counterArrowDown.addEventListener('click', substractItem);

    renderNumber();
})();
