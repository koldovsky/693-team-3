// (async function(){
// 	function renderCard(products){
//     const productsHTML = document.querySelector('.products-html')

// 		for (const product of products){
// 			productsHTML.innerHTML += `
// 			<head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <link rel="icon" type="image/png" href="img/favicon/favicon_main.png" />
//     <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css">
//     <link rel="stylesheet" href="./css/index.css">
//     <title>Puma Sports Bra</title>
// </head>

// <body>
//     <header>
//         <nav class="header_contacts">
//             <nav class="header_top-navigation">
//                 <div class="head-banner_1">
//                     <div class="header-banner-rad">
//                         <p class="text-left-banner">We’ve extended our returns period to 30 days.</p>
//                         <div class="text-right-banner">
//                             <div>
//                                 <a href="mailto:workout@email.com" data-action="email" class="ui-link">
//                                     <span>workout@email.com</span></a>
//                             </div>
//                             <div>
//                                 <a href="tel:+12345678900" data-action="phone" class="ui-link">+1 (234) 567 89 00</a>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div class="header_ banner">
//                     <div class="selection_menu">
//                         <div class="logo">
//                             <a href="index.html"><img width="168" alt="logo" class="logo-image"
//                                     src="img/img-head/logo-head.svg" /></a>
//                         </div>
//                         <div class="burger-menu">
//                             <input id="menu-toggle" type="checkbox" />
//                             <label class="menu-btn" for="menu-toggle">
//                                 <span></span>
//                             </label>
//                             <div class="header_top-nav-menu">
//                                 <a class="links_h" href="index.html#about-us">About us.</a>
//                                 <a class="links_h" href="index.html#mid-season-sale">Sale.</a>
//                                 <a class="links_h" href="index.html#main-coll">Collection.</a>
//                                 <a class="links_h" href="index.html#blog">Blog.</a>
//                                 <a class="links_h" href="index.html#contacts">Contact us.</a>
//                             </div>
//                             <div class="social-icon">
//                                 <a href="https://facebook.com"><img alt="facebook" class="facebook-image"
//                                         src="img/img-head/facebook.png" /></a>
//                                 <a href="https://instagram.com"><img alt="instagram" class="instagram-image"
//                                         src="img/img-head/instagram.png" /></a>
//                                 <a href="https://youtube.com"><img alt="youtube" class="youtube-image"
//                                         src="img/img-head/youtube.png" /></a>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </nav>
//         </nav>
//     </header>

//     <main class="card-main">
//         <div class="card-main__container">
//             <nav class="card-main__nav">
//                 <a href="home-storepage.html" class="card-main__link">Store homepage</a>
//             </nav>
//             <div class="card-main-slider-info__container">
//                 <div class="card-main__slider">
//                     <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
//                         <div class="carousel-inner">
//                             <div class="carousel-item active">
//                                 <img src="img/main-collection/puma-sports-bra.jpeg" class="d-block w-100"
//                                     alt="Puma sports bra">
//                             </div>
//                         </div>
//                         <button class="carousel-control-prev main-carousel-arrow" type="button"
//                             data-bs-target="#carouselExampleControls" data-bs-slide="prev">
//                             <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//                             <span class="visually-hidden">Previous</span>
//                         </button>
//                         <button class="carousel-control-next main-carousel-arrow" type="button"
//                             data-bs-target="#carouselExampleControls" data-bs-slide="next">
//                             <span class="carousel-control-next-icon" aria-hidden="true"></span>
//                             <span class="visually-hidden">Next</span>
//                         </button>
//                     </div>
//                 </div>
//                 <section class="card-item-info">
//                     <div class="card-item-info__inner-top">
//                         <p class="card-item-info__stock">In stock</p>
//                         <h2 class="card-item-info__name">Puma Sports Bra</h2>
//                         <p class="card-item-info__code">Product code 31</p>
//                         <p class="card-item-info__price">$ 12,00</p>
//                         <div class="card-item-info__devider"></div>
//                         <nav class="card-item-info__btns">
//                             <div class="card-item-info__counter">
//                                 <div class="counter-number"></div>
//                                 <div class="counter-arrows">
//                                     <batton class="counter-arrows-up">
//                                         <svg class="svg-arrow-up" width="10" height="6" fill="none"
//                                             xmlns="http://www.w3.org/2000/svg">
//                                             <path
//                                                 d="M5.35.156a.474.474 0 00-.701 0L.111 5.264a.437.437 0 00-.111.29C0 5.8.207 6 .462 6h9.076c.11 0 .217-.038.3-.107a.435.435 0 00.05-.629L5.352.156z"
//                                                 fill="#9199AB"></path>
//                                         </svg>
//                                     </batton>
//                                     <batton class="counter-arrows-down">
//                                         <svg class="svg-arrow-down" width="10" height="6" fill="none"
//                                             xmlns="http://www.w3.org/2000/svg">
//                                             <path
//                                                 d="M5.35.156a.474.474 0 00-.701 0L.111 5.264a.437.437 0 00-.111.29C0 5.8.207 6 .462 6h9.076c.11 0 .217-.038.3-.107a.435.435 0 00.05-.629L5.352.156z"
//                                                 fill="#9199AB"></path>
//                                         </svg>
//                                     </batton>
//                                 </div>
//                             </div>
//                             <a class="card-item-info-link" href="#">
//                                 <span class="card-item-info-link__wraper">
//                                     <span class="card-item-info-link__text">Add to cart</span>
//                                 </span>
//                             </a>
//                         </nav>
//                     </div>
//                     <div class="card-item-info__inner-bottom-wrapper">
//                         <div class="card-item-info__inner-bottom">
//                             <div class="card-item-info-description">
//                                 <div class="card-item-info-description__name-wrapper">
//                                     <span class="card-item-info-description__name">Description</span>
//                                 </div>
//                             </div>
//                             <p class="card-item-info-text">This workout bra by Puma provides great support while you're
//                                 training. There is a back closure, so you can
//                                 adjust the fit.
//                                 The additional support is provided with thick crisscross straps.</p>
//                         </div>
//                     </div>
//                 </section>
//             </div>
//         </div>
//     </main>

//     <footer class="footer">
//         <div class="footer__container">
//             <div class="footer__description-wrapper">
//                 <img class="footer__logo" src="img/footer/footer-logo.svg" alt="logo" />
//                 <p class="footer__description">
//                     Workout offers fitness clothing and footwear for those who want to change their lives
//                     and bodies for better.
//                 </p>
//             </div>
//             <nav class="footer__navigation-wrapper">
//                 <h4 class="footer__title">NAVIGATION</h4>
//                 <div class="red-underline"></div>
//                 <ul>
//                     <li class="footer__li"><a class="footer__anchor" href="index.html#about-us">About us.</a></li>
//                     <li class="footer__li"><a class="footer__anchor" href="index.html#main-coll">Collection.</a></li>
//                     <li class="footer__li"><a class="footer__anchor" href="index.html#blog">Blog.</a></li>
//                     <li class="footer__li"><a class="footer__anchor" href="index.html#Contacts">Contacts.</a></li>
//                 </ul>
//             </nav>
//             <nav class="footer__shop-wrapper">
//                 <h4 class="footer__title">SHOP</h4>
//                 <div class="red-underline"></div>
//                 <ul>
//                     <li class="footer__li"><a class="footer__anchor" href="index.html#women">Women.</a></li>
//                     <li class="footer__li"><a class="footer__anchor" href="index.html#man">Man.</a></li>
//                     <li class="footer__li"><a class="footer__anchor" href="index.html#shoes">Shoes.</a></li>
//                     <li class="footer__li"><a class="footer__anchor" href="index.html#sale">Sale.</a></li>
//                 </ul>
//             </nav>
//             <div class="footer__social-wrapper">
//                 <h4 class="footer__title">FOLLOW US</h4>
//                 <div class="red-underline"></div>
//                 <div class="footer__social-links">
//                     <a href="https://facebook.com"><img class="footer__social-icon" src="img/img-head/facebook.png"
//                             alt="facebook icon"></a>
//                     <a href="https://instagram.com"><img class="footer__social-icon" src="img/img-head/instagram.png"
//                             alt="instagram icon"></a>
//                     <a href="https://youtube.com"><img class="footer__social-icon" src="img/img-head/youtube.png"
//                             alt="youtube icon"></a>
//                 </div>
//                 <div class="footer__clock"></div>
//             </div>
//         </div>
//         <div class="footer__signature">
//             <div class="footer__signature-style">
//                 <p>© Created by</p>
//                 <p>All rights reserved</p>
//             </div>
//         </div>
//     </footer>
//     <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"></script>
//     <script src="java-script/item-card.js"></script>
//     <script src="java-script/footer-clock.js"></script>
// </body>`;
// 		}
// 	}

// 	const response = await fetch('products.json');
//     const products = await response.json();
//     renderProducts(products);
    
    
// })();