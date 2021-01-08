const togglePopup = () => {
    const popup = document.querySelector('.popup'),
          popupContent = popup.querySelector('.popup-content'),
          popupBtn = document.querySelectorAll('.popup-btn');

    let count = 100;

    popupBtn.forEach((elem) => {
        elem.addEventListener('click', () => {
            if (document.documentElement.clientWidth > 768) {
                let animated = () => {
                    count--;
                    if (count >= 0) {
                        popup.style = `display: block;`
                        popupContent.style = `transform: translateY(${count}%);`
                    } else {
                        clearInterval(idInterval);
                        count = 100;
                    }
                }
                let idInterval = setInterval(animated, 4);
            } else {
                popup.style = 'display:block;';
                popupContent.style = 'left:50%;transform:translateX(-50%);';
            }
        });
    });

    window.addEventListener('resize', () => {
        if (document.documentElement.clientWidth <= 768) {
            popupContent.style = 'left:50%;transform:translateX(-50%);';
        } 
    });

    popup.addEventListener('click', (event) => {
        let target = event.target;
        if (target.classList.contains('popup-close')) {
            popup.style.display = 'none';
        } else {
            target = target.closest('.popup-content');
            if (!target) {
                popup.style.display = 'none';
            }
        }
    });
};

export default togglePopup;