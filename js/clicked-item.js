(function () {
    const allProducts = document.querySelectorAll('.products-item');


    function onOperationItemClick(eventObject) {
        let clicketElement = eventObject.currentTarget;
        if (clicketElement['className'] === 'main-collection-main__item2 all-items') {
        }

    }

    allProducts.forEach(element => element.addEventListener('click', onOperationItemClick))
    console.log(allProducts);
})();
