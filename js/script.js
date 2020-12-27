// Toggle menu
const navToggle = document.querySelector('.js-menu-toggle');
const links = document.querySelector('.links__container');

navToggle.addEventListener('click', function() {
    links.classList.toggle("active-menu");
});


// Page-loader
$(document).ready(function() {
	
	setTimeout(function(){
		$('body').addClass('loaded');
		$('h1').css('color','#000000');
	}, 1000);
	
});


