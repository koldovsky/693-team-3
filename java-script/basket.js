( function(){
function getBasket(){

    const content = document.getElementById("shopping-img")
    const show = document.querySelectorAll(".mid-season-sale__cart")
    const showInStore = document.querySelectorAll(".storepage__product-btn")
    for(const product of showInStore){
        if (content.style.display = "none"){
            product.addEventListener("click", () => {
                content.style.display = "block"
            })
        }
    }
    for(const product of show){
        if (content.style.display = "none"){
            product.addEventListener("click", () => {
                content.style.display = "block"
            })
        }
    }
}
getBasket();

function openCloseBasket(){
    const content = document.getElementById("box-main")
    const show = document.getElementById("shopping-img")
    const hide = document.getElementById("cross")
    if (content.style.display = "none"){
        show.addEventListener("click", () => {
            content.style.display = "block"
            document.body.style.overflow = "hidden";
        })
    }else {
        content.style.display = "none";
    }
    hide.addEventListener("click", () => {
        content.style.display = "none";
        document.body.style.overflow = "scroll";
    });
}
openCloseBasket();
})();