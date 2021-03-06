(async function () {
    function getBasket() {
        const content = document.getElementById("shopping-img")
        const show = document.querySelectorAll(".mid-season-sale__cart")
        const mainCollection = document.querySelectorAll(".main-collection-main__btn")
        const sliderItem = document.querySelectorAll(".slider__item_btn_a")
        const showInStore = document.querySelectorAll(".storepage__product-btn")
        if (content.style.display = "none") {
            for (const product of showInStore) {
                product.addEventListener("click", () => {
                    content.style.display = "block"
                })
            }
            for (const product of sliderItem) {
                product.addEventListener("click", () => {
                    content.style.display = "block"
                })
            }
            for (const product of mainCollection) {
                product.addEventListener("click", () => {
                    content.style.display = "block"
                })
            }
            for (const product of show) {
                product.addEventListener("click", () => {
                    content.style.display = "block"
                })
            }
        } else {
            content.style.display = "none";
        }
    }

    getBasket();

    function openCloseBasket() {
        const shoppingBox = document.getElementById("shopping-img")
        const statusForm = document.querySelector(".contact-form-status")
        const button = document.querySelector(".button__content_1")
        const formContent = document.querySelector(".all-shopping-card")
        const content = document.getElementById("box-main")
        const show = document.getElementById("shopping-img")
        const hide = document.getElementById("cross")
        if (content.style.display = "none") {
            show.addEventListener("click", () => {
                content.style.display = "block"
                document.body.style.overflow = "hidden";
            })
        } else {
            content.style.display = "none";
        }
        hide.addEventListener("click", () => {
            statusForm.style.display = "none";
            formContent.style.display = "block";
            button.style.display = "block";
            content.style.display = "none";
            document.body.style.overflow = "scroll";
            if (statusForm.style.display = 'block') {
                shoppingBox.style.display = "none";
            }
        });
    }

    openCloseBasket();

    const sportProduct = document.querySelector('.mid-season-sale__collection .row'),
        shoppingCartContent = document.querySelector('.product-inner'),
        clearCartBtn = document.querySelector('#clear-cart');

    loadEventListeners();

    function loadEventListeners(){
        //when new course is added
        sportProduct.addEventListener('click', buyCourse);
        shoppingCartContent.addEventListener('click', removeCourse);

        function buyCourse(e) {
            if (e.target.classList.contains('mid-season-sale__cart')) {
                const product = e.target.parentElement.parentElement;
                getCourseInfo(product);
            }
        }
    }
    function removeCourse(e){
        if(e.target.classList.contains('remove_2')){
            e.target.parentElement.parentElement.remove();
        }
    }


    function getCourseInfo(product) {
        //create an Object with course data
        const productInfo = {
            image: product.querySelector('.mid-season-sale__img').src,
            title: product.querySelector('.mid-season-sale__item-name').innerText,
            price: product.querySelector('.mid-season-sale__item-price').innerText
        }
        addToCart(productInfo);
    }

    function addToCart(product) {
        const row = document.createElement('product-inner');
        row.innerHTML = ` <div class="product-inner">
            <div class="preview_photo" data-sub-item="preview">
              <img class="preview_photo_72" src="${product.image}" alt="woman" />
        </div>
        <div class="info">
            <div class="name-wrapper">
                <div data-sub-item="name" class="info_name_text">
                    ${product.title}
                </div>
            </div>
            <div data-sub-item="quantity" class="input_price">
                <div class="input-quantity">
                    <input type="number" class="input" value="1" id="prise-input" />
                    <div class="input-quantity_arrows">
                        <div class="arrow_up" data-arrow="quantity-up">
                            <img alt="arrow-up" src="img/basket/arrow-up.png" />
                        </div>
                        <div class="arrow-down" data-arrow="quantity-down">
                            <img alt="arrow-down" src="img/basket/arrow-down.png" />
                        </div>
                    </div>
                </div>
            </div>
            <div data-sub-item="amount" class="amount-3S-ui-text" data-amount="1200">${product.price}</div>
        </div>
        <div data-sub-item="remove" class="remove_2cA" >
            <img alt="basket" class="remove_2" src="img/basket/bin.png" />
        </div>
    </div>
        <div class="ui-text price-details_2Qi">
            <div class="price-details__column_1q9">
                  
            </div>
        </div>`
        ;

        shoppingCartContent.appendChild(row);
    }
    addToCart();

    // function appDownArrow() {
    //     const priseInput = document.querySelector("#prise-input");
    //     const upArrow = document.querySelector(".arrow_up img")
    //     const downArrow = document.querySelector(".arrow-down img")
    //     let count = 0;
    //     upArrow.addEventListener("click", function () {
    //         count++;
    //         priseInput.value = count;
    //     });
    //     downArrow.addEventListener("click", function () {
    //         if (count > 0) {
    //             count--;
    //             priseInput.value = count;
    //         } else {
    //             count = 0;
    //             priseInput.value = count;
    //         }
    //     })
    // }
    // appDownArrow();
})();