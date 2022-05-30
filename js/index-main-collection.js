(function () {
    const tabWomen = document.querySelector('.main-collection-main__women');
    const tabMen = document.querySelector('.main-collection-main__men');
    const tabShoes = document.querySelector('.main-collection-main__shoes');
    const buttonWomen = document.querySelector('.tab-women');
    const buttonMen = document.querySelector('.tab-men');
    const buttonShoes = document.querySelector('.tab-shoes');

    const tabs = [tabWomen, tabMen, tabShoes];
    const buttons = [buttonWomen, buttonMen, buttonShoes];

    let firstTabIndex = 0;
    let secondTabIndex = 1;
    let thirdTabIndex = 2;

    function showTab() {
        tabs[firstTabIndex].classList.add('tabs-block-activator');
        buttons[firstTabIndex].classList.add('tabs-red-line-activator');
        tabs[secondTabIndex].classList.remove('tabs-block-activator');
        buttons[secondTabIndex].classList.remove('tabs-red-line-activator');
        tabs[thirdTabIndex].classList.remove('tabs-block-activator');
        buttons[thirdTabIndex].classList.remove('tabs-red-line-activator');
    }
    showTab();
    function womenShow() {
        firstTabIndex = 0;
        secondTabIndex = 1;
        thirdTabIndex = 2;
        firstTabIndex;
        showTab();
    }
    function menShow() {
        firstTabIndex = 1;
        secondTabIndex = 2;
        thirdTabIndex = 0;
        showTab();
    }
    function shoesShow() {
        firstTabIndex = 2;
        secondTabIndex = 0;
        thirdTabIndex = 1;
        showTab();
    }

    buttonWomen.addEventListener('click', womenShow);
    buttonMen.addEventListener('click', menShow);
    buttonShoes.addEventListener('click', shoesShow);
})();
