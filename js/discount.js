(function() {
    const slides = [
        '<div class="discount-20-banner">\n' +
        '        <div class="discount-20-border-text">\n' +
        '          <p class="discount-20-banner-text">20% OFF ALL T-shirts</p>\n' +
        '          <div class="box-to-key-20-discount">\n' +
        '            <a href="#mid-season-sale" class="discount-20-button">Shop Collection →</a>\n' +
        '          </div>\n' +
        '        </div>\n' +
        '      </div>',
        '<div class="discount-30-banner">\n' +
        '        <div class="discount-30-border-text">\n' +
        '          <p class="discount-30-banner-text">30% OFF ALL jackets</p>\n' +
        '          <div class="box-to-key-30-discount">\n' +
        '            <a href="#mid-season-sale" class="discount-30-button">Shop Collection →</a>\n' +
        '          </div>\n' +
        '        </div>\n' +
        '      </div>',
        '<div class="discount-25-banner">\n' +
        '        <div class="discount-25-border-text">\n' +
        '          <h4 class="discount-25-banner-text">25% off all trainers</h4>\n' +
        '          <div class="box-to-key-25-discount">\n' +
        '            <a href="#new-arrivals-id-block" class="discount-25-button">Shop Collection →</a>\n' +
        '          </div>\n' +
        '        </div>\n' +
        '      </div>',
        '<div class="discount-50-banner">\n' +
        '        <div class="discount-25-border-text">\n' +
        '          <h4 class="discount-25-banner-text">50% off all trainers</h4>\n' +
        '          <div class="box-to-key-25-discount">\n' +
        '            <a href="#new-arrivals-id-block" class="discount-25-button">Shop Collection →</a>\n' +
        '          </div>\n' +
        '        </div>\n' +
        '      </div>'
    ];

    let currentSlide = 0;

    function renderCarousel() {
        const slideContainer = document.querySelector('.all-discount');
        slideContainer.innerHTML = slides[currentSlide];
        if (window.innerWidth >= 1450) {
            const secondSlide = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
            slideContainer.innerHTML += slides[secondSlide];
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

    const btnRight = document.querySelector('.discount__carousel .right_1');
    btnRight.addEventListener('click', nextSlide);

    const btnLeft = document.querySelector('.discount__carousel .left_1');
    btnLeft.addEventListener('click', prevSlide);

    window.addEventListener('resize', renderCarousel);

}) ();