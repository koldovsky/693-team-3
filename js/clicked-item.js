
(function () {
    const allProducts = document.querySelectorAll('.products-item');

    

    function onOperationItemClick(eventObject) {
        let clicketElement = eventObject.currentTarget;
        let clickedProduct = clicketElement['alt']
            ? clicketElement['alt']
            : clicketElement['textContent'];
            localStorage.product = clickedProduct;
    }

    allProducts.forEach((element) =>
        element.addEventListener('click', onOperationItemClick)
    );

})();
