(function () {
  const slides = [
    `<article class="new-arrivals__slider__item_1 card">
        <img src="img/offer_new-arrivals/nike.jpeg" alt="" class="slider__item_img" />
        <h4>
          <a href="nike-winter-jacket.html" class="slider__item_span-name-a"
            >Nike Winter Jacket in Blue</a
          >
        </h4>
        <span class="slider__item_span-price">$85,00</span>
        <a class="slider__item_btn_a">Add to Cart</a>
            </article>`,
    `<article class="new-arrivals__slider__item_2 card">
        <img src="img/offer_new-arrivals/adidas.jpeg" alt="" class="slider__item_img" />
        <h4>
          <a href="adidas-black-trainers.html" class="slider__item_span-name-a"
            >Adidas Black Trainers</a
          >
        </h4>
        <span class="slider__item_span-price">$60,00</span>
        <a class="slider__item_btn_a">Add to Cart</a>
            </article>`,
    `<article class="new-arrivals__slider__item_3 card">
      <img src="img/offer_new-arrivals/reebok.jpeg" alt="" class="slider__item_img" />
      <h4>
        <a href="reebok-red-duster.html" class="slider__item_span-name-a"
          >Reebok Red Duster</a
        >
      </h4>
      <span class="slider__item_span-price">$60,00</span>
      <a class="slider__item_btn_a">Add to Cart</a>
            </article>`,
    `<article class="new-arrivals__slider__item_4 card">
        <img src="img/offer_new-arrivals/asics.jpeg" alt="" class="slider__item_img" />
        <h4>
          <a href="asics-jordan-2000.html" class="slider__item_span-name-a"
            >Asics Jordan 2000</a
          >
        </h4>
        <span class="slider__item_span-price">$200,00</span>
        <a class="slider__item_btn_a">Add to Cart</a>
            </article>`,
    `<article class="new-arrivals__slider__item_5 card">
        <img src="img/offer_new-arrivals/puma.jpeg" alt="" class="slider__item_img" />
        <h4>
          <a href="puma-textile-running-shoes.html" class="slider__item_span-name-a"
            >Puma Textile Running Shoes</a
          >
        </h4>
        <span class="slider__item_span-price">$62,00</span>
        <a class="slider__item_btn_a">Add to Cart</a>
            </article>`,
  ];

  let currentSlide = 0; //4

  function renderSlider() {
    const arrivalsSlider = document.querySelector(
      ".new-arrivals__slider__render"
    );
    arrivalsSlider.innerHTML = slides[currentSlide];
    if (window.innerWidth > 768 && window.innerWidth < 999) {
      const secondSlide =
        currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
      arrivalsSlider.innerHTML +=
        slides[currentSlide + 1] != undefined
          ? slides[currentSlide + 1]
          : slides[0];
    } else if (window.innerWidth > 999) {
      const secondSlide =
        currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
      const thirdSlide = secondSlide + 1 >= slides.length ? 0 : secondSlide + 1;
      const fourthSlide = thirdSlide + 1 >= slides.length ? 0 : thirdSlide + 1;
      arrivalsSlider.innerHTML +=
        slides[currentSlide + 1] != undefined
          ? slides[currentSlide + 1]
          : slides[0];
      arrivalsSlider.innerHTML +=
        slides[secondSlide + 1] != undefined
          ? slides[secondSlide + 1]
          : slides[0];
      arrivalsSlider.innerHTML +=
        slides[thirdSlide + 1] != undefined
          ? slides[thirdSlide + 1]
          : slides[0];
      arrivalsSlider.innerHTML +=
        slides[fourthSlide + 1] != undefined
          ? slides[fourthSlide + 1]
          : slides[0];
    }
  }

  function nextSlide() {
    currentSlide = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
    renderSlider();
  }

  function prevSlide() {
    currentSlide = currentSlide - 1 <= 0 ? slides.length - 1 : currentSlide - 1;
    renderSlider();
  }
  nextSlide();
  const btnForward = document.querySelector(".new-arrivals__slider_forward");
  btnForward.addEventListener("click", nextSlide);

  const btnBack = document.querySelector(".new-arrivals__slider_back");
  btnBack.addEventListener("click", prevSlide);

  window.addEventListener("resize", renderSlider);
})();
