(function (){
    const form = document.querySelector('.box-contact-form');

        async function handelSubmit(event){
            event.preventDefault();
            const status = document.querySelector('.contact-form-status');
            const data = JSON.stringify({
                name: document.querySelector('.box-contact-form input[name=user-name]').value,
                email: document.querySelector('.box-contact-form input[name=user-email]').value,
                phone: document.querySelector('.box-contact-form input[name=user-phone]').value,
                comment: document.querySelector('.box-contact-form input[name=user-comment]').value
            });
            try{
                await fetch(event.target.action,{
                    method: form.method,
                    body: data,
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
                });
                status.innerHTML = 'Thank you for your order!\n' +
                    'We\'ll get in touch with you soon with further details.';
                form.reset();
            } catch {
                status.innerHTML = 'Ooops! There was a problem.'

            }
        }
        form.addEventListener('submit', handelSubmit)
    })();