(async function () {
    const cardTitle = document.querySelector('.card-item-title');
    const itemImg = document.querySelector('.card-item-img');
    const itemStock = document.querySelector('.card-item-info__stock');
    const itemName = document.querySelector('.card-item-info__name');
    const itemCode = document.querySelector('.card-item-info__code');
    const itemPrice = document.querySelector('.card-item-info__price');
    const itemDescription = document.querySelector('.card-item-info-text');

    function renderProductCart() {
        cardTitle.innerHTML = rightObject['name'];
        itemImg.innerHTML += `<img src="${rightObject['imgUrl']}" class="d-block w-100 " 
        alt="${rightObject['name']}">`;
        itemStock.innerHTML = rightObject['stock'];
        itemName.innerHTML = rightObject['name'];
        itemCode.innerHTML = rightObject['stock'];
        itemPrice.innerHTML = rightObject['price'];
        itemDescription.innerHTML = rightObject['description'];
    }

    const response = await fetch('products.json');
    const products = await response.json();

    let clickedProduct = sessionStorage.product;

    let rightObject = products.find(
        (product) => product.name === clickedProduct
    );
    renderProductCart();
})();
