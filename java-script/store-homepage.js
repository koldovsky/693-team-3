(function () {
    const productsJson = `
    [
		{
			"id": "1",
			"name": "Adidas Cloudfoam Trainers",
			"price": "$60",
			"imgUrl": "img/mid-season-sale/adidas-trainers.jpg",
			"href": "adidas-cloudfoam-trainers.html"
		},
		{
			"id": "2",
			"name": "Reebok Workout Shorts",
			"price": "$25,00",
			"imgUrl": "img/mid-season-sale/reebok-shorts.jpg",
			"href": "reebok-workout-shorts.html"
		},
		{
			"id": "3",
			"name": "Puma Fitness Shoes in Grey",
			"price": "$60,00",
			"imgUrl": "img/mid-season-sale/puma-shoes.jpg",
			"href": "puma-fitness-shoes-in-grey.html"
		},
		{
			"id": "4",
			"name": "Puma Essential Tank Top",
			"price": "$43,00",
			"imgUrl": "img/mid-season-sale/puma-tank-top.jpg",
			"href": "puma-essential-tank-top.html"
		},
		{
			"id": "5",
			"name": "Nike Classic Polo T-Shirt",
			"price": "$23,00",
			"imgUrl": "img/mid-season-sale/nike-polo-tshirt.jpg",
			"href": "nike-classic-polo-t-shirt.html"
		},
		{
			"id": "6",
			"name": "Adidas Black Trainers",
			"price": "$60,00",
			"imgUrl": "img/offer_new-arrivals/adidas.jpeg",
			"href": "adidas-black-trainers.html"
		},
		{
			"id": "7",
			"name": "Adidas Campus",
			"price": "$130,00",
			"imgUrl": "img/main-collection/adidas-campus.jpeg",
			"href": "adidas-campus.html"
		},
		{
			"id": "8",
			"name": "Asics Jordan 2000",
			"price": "$200,00",
			"imgUrl": "img/offer_new-arrivals/asics.jpeg",
			"href": "asics-jordan-2000.html"
		},
		{
			"id": "9",
			"name": "Nike Amanda Running Shoes",
			"price": "$120,00",
			"imgUrl": "img/main-collection/nike-amanda-running-shoes.jpeg",
			"href": "nike-amanda-running-shoes.html"
		},
		{
			"id": "10",
			"name": "Nike Winter Jacket in Blue",
			"price": "$85,00",
			"imgUrl": "img/offer_new-arrivals/nike.jpeg",
			"href": "nike-winter-jacket.html"
		},
		{
			"id": "11",
			"name": "Puma Basket Shoes",
			"price": "$140,00",
			"imgUrl": "img/main-collection/puma-basket-shoes.jpeg",
			"href": "puma-basket-shoes.html"
		},
		{
			"id": "12",
			"name": "Puma Sports Bra",
			"price": "$13,00",
			"imgUrl": "img/main-collection/puma-sports-bra.jpeg",
			"href": "puma-sports-bra.html"
		},
		{
			"id": "13",
			"name": "Puma Textile Running Shoes",
			"price": "$62,00",
			"imgUrl": "img/offer_new-arrivals/puma.jpeg",
			"href": "puma-textile-running-shoes.html"
		},
		{
			"id": "14",
			"name": "Quicksilver Tech T-Shirt",
			"price": "$21,00",
			"imgUrl": "img/main-collection/quicksilver-tech-t-shirt.jpeg",
			"href": "quicksilver-tech-t-shirt.html"
		},
		{
			"id": "15",
			"name": "Quicksilver Workout Top",
			"price": "$12,00",
			"imgUrl": "img/main-collection/quicksilver-workout-top.jpeg",
			"href": "quicksilver-workout-top.html"
		},
		{
			"id": "16",
			"name": "Reebok Fitness Jacket",
			"price": "$52,00",
			"imgUrl": "img/main-collection/reebok-fitness-jacket.jpeg",
			"href": "reebok-fitness-jacket.html"
		},
		{
			"id": "17",
			"name": "Reebok Long Sleeve Top",
			"price": "$18,00",
			"imgUrl": "img/main-collection/reebok-long-sleeve-top.jpeg",
			"href": "reebok-long-sleeve.html"
		},
		{
			"id": "18",
			"name": "Reebok Red Duster",
			"price": "$60,00",
			"imgUrl": "img/offer_new-arrivals/reebok.jpeg",
			"href": "reebok-red-duster.html"
		}
	]
	`;

    function renderProducts(products) {
        const productsContainer = document.querySelector('.storepage__all-products');

        for (const product of products) {
            productsContainer.innerHTML += `
            <div class="storepage__product-wrapper">
                <a href="puma-sports-bra.html"><img
                    class="main-collection-main__img"
                    src="${product.imgUrl}"
                    alt="${product.name}"
                  >
                </a>
                <div class="main-collection-main__item-name-container">
                  <a href="${product.href}" class="main-collection-main__item-name-link">
                    <h4 class="main-collection-main__item-name-text">${product.name}</h4>
                  </a>
                </div>
                <div class="main-collection-main__price">${product.price}</div>
                <a href="#" class="main-collection-main__btn">Add to Cart</a>
            </div>
         `;
        }
    }

    const products = JSON.parse(productsJson);
    renderProducts(products);
})();