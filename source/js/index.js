//WINDOW
$(window).load(function(){


});

//DOM
$(document).ready(function(){

	//ordem de carregamento ( EXTERNOS > INTERNOS )
	$.when(externalAPI()).done(myAPI);
});

//API MANUAL
function myAPI(){

	let panelCourtney = new Courtney(courtneyConfigs);
}

//API EXTERNA
function externalAPI(){

	//slider-main
	var sliderMain = new Swiper('.slider-main', {
		navigation: {
		  nextEl: '.swiper-button-next',
		  prevEl: '.swiper-button-prev',
		},
		autoplay: {
		  delay: 4500,
		  disableOnInteraction: true,
		},
		loop: true,
	});
	
	//marcas em destaque
	var brands = new Swiper('.brands', {
		slidesPerView: 6,
		spaceBetween: 10,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		loop: true,
	});
	
	//best-sellers
	var shopTheLook = new Swiper('.best-sellers', {
		slidesPerView: 4,
		spaceBetween: 15,
		breakpoints: {
			992: {
				slidesPerView: 3,
				spaceBetween: 30
			},
		},
		loop: true,
	});
	//shop-the-look
	var shopTheLook = new Swiper('.shop-the-look', {
		slidesPerView: 3,
		spaceBetween: 15,
		breakpoints: {
			992: {
			  slidesPerView: 2,
			  spaceBetween: 30,
			},
		},
		loop: true,
	});
}