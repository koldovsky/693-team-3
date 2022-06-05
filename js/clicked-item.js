setTimeout (function () {
    const allProducts = document.querySelectorAll('.products-item');

    function onOperationItemClick(eventObject) {
        let clickedElement = eventObject.currentTarget;
        let clickedProduct = clickedElement['alt']
            ? clickedElement['alt']
            : clickedElement['textContent'];
            sessionStorage.product = clickedProduct;
    }

    allProducts.forEach((element) =>
        element.addEventListener('click', onOperationItemClick)
    );
}, 100);
