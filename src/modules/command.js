const command = () => {
    const commandPhoto = document.querySelectorAll('.command__photo');

    commandPhoto.forEach(item => {
        let src;
        item.addEventListener('mouseenter', (e) => {
            src = e.target.src;
            e.target.src = e.target.dataset.img;
        });
        item.addEventListener('mouseleave', (e) => {
            e.target.src = src;
        });
    });
};

export default command;
