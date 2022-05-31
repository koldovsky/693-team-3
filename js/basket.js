(function () {
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
            if (statusForm.style.display = 'block'){
                shoppingBox.style.display = "none";
            }
        });
    }

    openCloseBasket();
    function appDownArrow() {
        const priseInput = document.querySelector("#prise-input");
        const upArrow = document.querySelector(".arrow_up img")
        const downArrow = document.querySelector(".arrow-down img")
        let count = 0;
        upArrow.addEventListener("click", function(){
            count++;
            priseInput.value = count;
        });
        downArrow.addEventListener("click", function(){
            if (count > 0){
                count--;
                priseInput.value = count;
            } else {
                count = 0;
                priseInput.value = count;
            }
        })
    }
    appDownArrow();
})();