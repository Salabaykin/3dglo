const sendForm = (formId) => {
    const errorMessage = 'Что-то пошло не так',
          loadMessage = '<img src="images/142.gif">',
          successMessage = 'Спасибо! Мы скоро с вами свяжемся';

    const form = document.getElementById(formId);

    form.addEventListener('input', (event) => {
        const target = event.target;
        if (target.matches('.form-phone')) {
            target.value = target.value.replace(/[^\+\d]/g, '');
        } else if (target.matches('.form-name') || target.matches('#form2-name')) {
            target.value = target.value.replace(/[^А-Яа-яЁё\- ]/gi, '');
        } else if (target.matches('.mess')) {
            target.value = target.value.replace(/[^0-9А-Яа-яЁё\s!,-?:;""()]/gi, '');
        } else if (target.matches('.form-email')) {
            let patt = /^[\w\-]{2,}@\w{2,}\.\w{2,}$/i;
            if (!patt.test(target.value)) {
                target.style = 'border:3px solid red;';
            } else {
                target.style = 'border:none;';
            }
        }
    });

    const statusMessage = document.createElement('div');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        form.append(statusMessage);
        statusMessage.innerHTML = loadMessage;
        statusMessage.style.color = '#fff';
        const formData = new FormData(form);
        postData(formData)
            .then((response) => {
                if (response.status !== 200) {
                    throw new Error('Status network not 200');
                } 
                statusMessage.textContent = successMessage;
                setTimeout(() => {
                    document.querySelector('.popup').style = 'display:none;';
                    form.removeChild(statusMessage);
                }, 3000);
            })
            .catch((error) => console.error(error))
            .finally(() => form.reset());
    });

    const postData = (body) => {
        return fetch('./server.php', {
            method: 'POST',
            cache: 'default',
            headers: {
                'Content-Type': 'application/json'
            }, 
            body: body,
            credentials: 'include'
        });
    };
};

export default sendForm;