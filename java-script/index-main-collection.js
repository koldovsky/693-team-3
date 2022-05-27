(function () {
    const tabWomen = document.querySelector('.main-collection-main__women');
    const tabMen = document.querySelector('.main-collection-main__men');
    const tabShoes = document.querySelector('.main-collection-main__shoes');
    const buttonWomen = document.querySelector('.tab-women');
    const buttonMen = document.querySelector('.tab-men');
    const buttonShoes = document.querySelector('.tab-shoes');

    const tabs = [tabWomen, tabMen, tabShoes];
    const buttons = [buttonWomen, buttonMen, buttonShoes]

    let i = 0;
    let j = 1;
    let k = 2;

    function showTab() {
        tabs[i].classList.add('tabs-block-activator');
        buttons[i].classList.add('tabs-red-line-activator')
        tabs[j].classList.remove('tabs-block-activator');
        buttons[j].classList.remove('tabs-red-line-activator')
        tabs[k].classList.remove('tabs-block-activator');
        buttons[k].classList.remove('tabs-red-line-activator')
    }
     showTab();
    function womenShow() {
        i = 0;
        j = 1;
        k = 2;
        showTab()
    }
    function menShow() {
        i = 1;
        j = 2;
        k = 0;
        showTab()
    }
    function shoesShow() {
        i = 2;
        j = 0;
        k = 1;
        showTab()
    }

    buttonWomen.addEventListener('click', womenShow);
    buttonMen.addEventListener('click', menShow);
    buttonShoes.addEventListener('click', shoesShow)

    console.log(menShow());
})();
