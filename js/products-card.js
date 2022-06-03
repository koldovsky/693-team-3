(async function () {
    let clickedProduct = localStorage.product;

    const cardTitle = document.querySelector('.card-item-title');
    const cardImg = document.querySelector('.card-item-img');
    const cardStock = document.querySelector('.card-item-info__stock');
    const itemName = document.querySelector('.card-item-info__name');
    const itemCode = document.querySelector('.card-item-info__code');
    const itemPrice = document.querySelector('.card-item-info__price');
    const itemDescription = document.querySelector('.card-item-info-text');

    function renderProductCart() {
        cardTitle.innerHTML = rightObject['name'];
        cardImg.innerHTML += `<img src="${rightObject['imgUrl']}" class="d-block w-100 " 
        alt="${rightObject['name']}">`;
        cardStock.innerHTML = rightObject['stock'];
        itemName.innerHTML = rightObject['name'];
        itemCode.innerHTML = rightObject['stock'];
        itemPrice.innerHTML = rightObject['price'];
        itemDescription.innerHTML = rightObject['description'];
    }

    const response = await fetch('products.json');
    const products = await response.json();

    let rightObject = products.find(
        (productsArr) => productsArr.name === clickedProduct
    );
    renderProductCart();
})();
