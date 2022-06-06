(function(){
    const form = document.querySelector('.form__contact')
    function handleSubscribe(event){
        event.preventDefault();
        const status = document.querySelector('.form__status')
        fetch(form.action, {
            method: form.method,
            body: new FormData(form),
            headers: {
                'Accept' : 'aplication/json'
            }
        }).then ( () => {
            status.innerHTML = 'Thank you for subscribing!';
            form.reset(); 
        }).catch ( () => {
            status.innerHTML = 'Oops! There was a problem!'
        });
    }
    form.addEventListener('submit', handleSubscribe);
})()