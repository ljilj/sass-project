const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.nav__container');
const links = document.querySelector('.links__container');

navToggle.addEventListener('click', function(){
    const containerHeight = linksContainer.getBoundingClientRect().height;
    // console.log(containerHeight);
    const linksHeight = links.getBoundingClientRect().height;
    // console.log(linksHeight);

    if(containerHeight === 0) {
        linksContainer.style.height = `${linksHeight}px`;
    } else {
        linksContainer.style.height = 0;
    }
});