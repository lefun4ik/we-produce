$(document).ready(function(){
	$('.slider').slick({
		speed: 500,
		cssEase: 'cubic-bezier(0.39, 0.575, 0.565, 1)'
	});
})



const play = document.querySelector('.about__play');
const video = document.querySelector('.about__video video');

play.addEventListener('click', () => {
	video.play();
	video.setAttribute('controls', 'controls');
	play.classList.add('about__play--hidden');
})