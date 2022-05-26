(function () {
    const counterNumber = document.querySelector('.counter-number');
    const counterArrowUp = document.querySelector('.counter-arrows-up');
    const counterArrowDown = document.querySelector('.counter-arrows-down');

    let curentNumber = 1;

    function renderNumber() {
        counterNumber.innerHTML = curentNumber;
    }

    function addItem(item) {
        return item + '2';
    }

    console.log(renderNumber());
})();
