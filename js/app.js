$(document).ready(function(){

	var mySwiper = new Swiper(".swiper-container" , {
		speed: 400,
		slidesPerView: "auto",
		navigation:{
			nextEl: ".button-next",
			prevEl: ".button-prev"
		},
		keyboard:{
			enabled: true,
			onlyInViewport: true,
		}
	})

});