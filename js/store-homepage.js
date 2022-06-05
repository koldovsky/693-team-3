( async function () {
   

    function renderProducts(products) {
        const productsContainer = document.querySelector('.storepage__all-products');

        for (const product of products) {
            productsContainer.innerHTML += `
            <div class="storepage__product-wrapper">
                <a href="${product.href}"><img
                    class="main-collection-main__img products-item"
                    src="${product.imgUrl}"
                    alt="${product.name}"
                  >
                </a>
                <div class="main-collection-main__item-name-container">
                  <a href="${product.href}" class="main-collection-main__item-name-link">
                    <h4 class="main-collection-main__item-name-text products-item">${product.name}</h4>
                  </a>
                </div>
                <div class="main-collection-main__price">${product.price}</div>
                <a class="storepage__product-btn">Add to Cart</a>
            </div>
         `;
        }
    }

    const response = await fetch('products.json');
    const products = await response.json();
    renderProducts(products);

   const productsAmount = document.querySelector('.storepage__title');

   let curentNumber = 'Products' + '(' + products.length + ')';
   function renderNumber() {
      productsAmount.innerHTML = curentNumber;
   }

   renderNumber();
})();