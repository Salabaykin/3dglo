const toggleMenu = () => {

    const btnMenu = document.querySelector('.menu'),
          menu = document.querySelector('menu'),
          closeBtn = document.querySelector('.close-btn'),
          menuItems = menu.querySelectorAll('ul > li');

    menu.addEventListener('click', (event) => {
        let target = event.target;

        if (target.classList.contains('close-btn')) {
            menu.classList.toggle('active-menu');
        } else {
            target = target.closest('li');
            if (target) {
                menu.classList.toggle('active-menu');
            }
        }
    });

    btnMenu.addEventListener('click', () => {
        menu.classList.toggle('active-menu');
    });

};

export default toggleMenu;