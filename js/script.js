// Toggle menu
const navToggle = document.querySelector('.js-menu-toggle');
const links = document.querySelector('.links__container');

navToggle.addEventListener('click', function() {
    links.classList.toggle("active-menu");
});


// Page-loader 
window.addEventListener('load',function(){
	document.querySelector('body').classList.add("loaded"); 
});




