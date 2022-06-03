(function () {
  const productsJson = `
	[
		{
			"id": "1",
			"name": "Adidas Cloudfoam Trainers",
			"price": "$60",
			"imgUrl": "img/mid-season-sale/adidas-trainers.jpg",
			"column": "col-12 col-sm-12 col-md-6 col-lg-4 col-xl col-xxl",
			"href": "products-card.html"
		},
		{
			"id": "2",
			"name": "Reebok Workout Shorts",
			"price": "$25,00",
			"imgUrl": "img/mid-season-sale/reebok-shorts.jpg",
			"column": "col-12 col-sm-12 col-md-6 col-lg-4 col-xl col-xxl",
			"href": "products-card.html"
		},
		{
			"id": "3",
			"name": "Puma Fitness Shoes in Grey",
			"price": "$60,00",
			"imgUrl": "img/mid-season-sale/puma-shoes.jpg",
			"column": "col-12 col-sm-12 col-md-6 col-lg-4 col-xl col-xxl",
			"href": "products-card.html"
		},
		{
			"id": "4",
			"name": "Puma Essential Tank Top",
			"price": "$43,00",
			"imgUrl": "img/mid-season-sale/puma-tank-top.jpg",
			"column": "col-12 col-sm-12 col-md-6 col-lg-6 col-xl col-xxl",
			"href": "products-card.html"
		},
		{
			"id": "5",
			"name": "Nike Classic Polo T-Shirt",
			"price": "$23,00",
			"imgUrl": "img/mid-season-sale/nike-polo-tshirt.jpg",
			"column": "col-12 col-sm-12 col-md-12 col-lg-6 col-xl col-xxl",
			"href": "products-card.html"
		}
	]
	`;

  function renderProducts(products) {
    const productsContainer = document.querySelector(".mid-season-sale__collection .row");
    for (const product of products) {
      productsContainer.innerHTML += `
		<div class="${product.column}">
                <article class="mid-season-sale__item">
                  <a href=${product.href}
                    ><img
                      src="${product.imgUrl}"
                      alt="${product.name}"
                      class="mid-season-sale__img products-item"
                  /></a>
                  <a href=${product.href}>
                    <h4 class="mid-season-sale__item-name products-item">${product.name}</h4>
                  </a>
                  <p class="mid-season-sale__item-price">${product.price}</p>
                  <a id="mid-season-sale__cart" class="mid-season-sale__cart">Add to Cart</a>
                </article>
              </div>
		`;
    }
  }
  const products = JSON.parse(productsJson);
  renderProducts(products);
})();
