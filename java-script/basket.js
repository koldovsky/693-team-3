function getBasket(){

    let content = document.getElementById("shopping-img")
    let show = document.getElementById("mid-season-sale__cart")
    if (content.style.display = "none"){
        show.addEventListener("click", () => {
            content.style.display = "block"
        })
    }else {
        content.style.display = "none";
    }
}
getBasket()

function openCloseBasket(){
    let content = document.getElementById("box-main")
    let show = document.getElementById("shopping-img")
    let hide = document.getElementById("cross")
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
openCloseBasket()
