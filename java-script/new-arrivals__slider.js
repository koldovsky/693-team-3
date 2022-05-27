(function(){
    const slides = [
        `<article class="new-arrivals__slider__item_1 card">
        <img src="img/offer_new-arrivals/nike.jpeg" alt="" class="slider__item_img" />
        <h4>
          <a href="nike-winter-jacket.html" class="slider__item_span-name-a"
            >Nike Winter Jacket in Blue</a
          >
        </h4>
        <span class="slider__item_span-price">$85,00</span>
        <a href="" class="slider__item_btn_a">Add to Cart</a>
            </article>`,
        `<article class="new-arrivals__slider__item_2 card">
        <img src="img/offer_new-arrivals/adidas.jpeg" alt="" class="slider__item_img" />
        <h4>
          <a href="adidas-black-trainers.html" class="slider__item_span-name-a"
            >Adidas Black Trainers</a
          >
        </h4>
        <span class="slider__item_span-price">$60,00</span>
        <a href="" class="slider__item_btn_a">Add to Cart</a>
            </article>`,
        `<article class="new-arrivals__slider__item_3 card">
      <img src="img/offer_new-arrivals/reebok.jpeg" alt="" class="slider__item_img" />
      <h4>
        <a href="reebok-red-duster.html" class="slider__item_span-name-a"
          >Reebok Red Duster</a
        >
      </h4>
      <span class="slider__item_span-price">$60,00</span>
      <a href="" class="slider__item_btn_a">Add to Cart</a>
            </article>`,
        `<article class="new-arrivals__slider__item_4 card">
        <img src="img/offer_new-arrivals/asics.jpeg" alt="" class="slider__item_img" />
        <h4>
          <a href="asics-jordan-2000.html" class="slider__item_span-name-a"
            >Asics Jordan 2000</a
          >
        </h4>
        <span class="slider__item_span-price">$200,00</span>
        <a href="" class="slider__item_btn_a">Add to Cart</a>
            </article>`,
        `<article class="new-arrivals__slider__item_5 card">
        <img src="img/offer_new-arrivals/puma.jpeg" alt="" class="slider__item_img" />
        <h4>
          <a href="puma-textile-running-shoes.html" class="slider__item_span-name-a"
            >Puma Textile Running Shoes</a
          >
        </h4>
        <span class="slider__item_span-price">$62,00</span>
        <a href="" class="slider__item_btn_a">Add to Cart</a>
            </article>`  
    ]

    let currentSlide = 0;

    function renderSlider(){
        const arrivalsSlider = document.querySelector('.new-arrivals__slider');
        arrivalsSlider.innerHTML = slides[currentSlide];
    }

    function nextSlide (){
        currentSlide = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
        renderSlider();
    }

    // setInterval(nextSlide, 3000);
    nextSlide();
})();
