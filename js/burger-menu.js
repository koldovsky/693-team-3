(function () {
    function burgerMenu() {
        const content = document.getElementById("header-nav-menu")
        const buttonClick = document.getElementById("menu-button")
        const social = document.getElementById("social-icon")
        const link = document.querySelectorAll(".header_top-nav-menu a")


        // buttonClick.addEventListener("click", () => {
        //     content.style.display = "block"
        //     document.body.style.overflow = "hidden";
        // })

        // if (content.style.display = "block"){
        //     buttonClick.addEventListener("click", () => {
        //         document.body.style.overflow = "scroll";
        //     });
        // }

        for (const linkH of link) {
            linkH.addEventListener("click", () => {
                content.style.display = "none"
                social.style.display = "none"
                document.body.style.overflow = "scroll";
            })
        }
        ;
    }

    burgerMenu();
})();
