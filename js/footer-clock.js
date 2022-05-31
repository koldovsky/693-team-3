( function(){
    const clock = document.querySelector('.footer__clock');

    function updateClock(){
    clock.innerHTML = new Date().toLocaleTimeString();
    }

    setInterval(updateClock, 1000);

})();