let clickedProduct;
(function () {
    const allProducts = document.querySelectorAll('.products-item');

    function onOperationItemClick(eventObject) {
        let clicketElement = eventObject.currentTarget;
        clickedProduct = clicketElement['alt']
            ? clicketElement['alt']
            : clicketElement['textContent'];
    }

    allProducts.forEach((element) =>
        element.addEventListener('click', onOperationItemClick)
    );
})();
