(function() {
    const slides = [
        '<div class="slide"><img class="keep-fit__img-carousel" src="img/keep-fit/new_balance.svg" alt="trademark"></div>',
        '<div class="slide"><img class="keep-fit__img-carousel" src="img/keep-fit/reebok.svg" alt="trademark"></div>',
        '<div class="slide"><img class="keep-fit__img-carousel" src="img/keep-fit/adidas.svg" alt="trademark"></div>',
        '<div class="slide"><img class="keep-fit__img-carousel" src="img/keep-fit/nike.svg" alt="trademark"></div>',
        '<div class="slide"><img class="keep-fit__img-carousel" src="img/keep-fit/asics.svg" alt="trademark"></div>'
    ];

let currentSlide = 0;

    function renderCarousel() {
        const slideContainer = document.querySelector('.keep-fit__carousel .slide');
        slideContainer.innerHTML = slides[currentSlide];
        if (window.innerWidth >= 700) {
            const secondSlide = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
            slideContainer.innerHTML += slides[secondSlide];
            if (window.innerWidth >= 990) {
                const thirdSlide = secondSlide + 1 >= slides.length ? 0 : secondSlide + 1;
                slideContainer.innerHTML += slides[thirdSlide];
                if (window.innerWidth >= 1300) {
                const fourthSlide = thirdSlide + 1 >= slides.length ? 0 : thirdSlide + 1;
                slideContainer.innerHTML += slides[fourthSlide];
                }
            }     
        }
    }

    function nextSlide() {
        currentSlide = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
        renderCarousel();
    }

    function prevSlide() {
        currentSlide = currentSlide - 1 <= 0 ? slides.length - 1 : currentSlide - 1;
        renderCarousel();
    }

    renderCarousel();

    const btnRight = document.querySelector('.keep-fit__carousel .right');
    btnRight.addEventListener('click', nextSlide);

    const btnLeft = document.querySelector('.keep-fit__carousel .left');
    btnLeft.addEventListener('click', prevSlide);

    window.addEventListener('resize', renderCarousel);

}) ();