$(document).ready(function(){

	// RESIZE ALL PLANETS IN FIGMA AND RESIZE SATURN RINGS TO FIT PERFECTLY TO SATURN
	// SO THAT YOU CAN REMOVE THE HEIGHT DEPENDENCY 52.2%

	// initialize swiper
	var mySwiper = new Swiper(".swiper-container" , {
		speed: 1000,
		slidesPerView: "auto",
		noSwipingClass: "swiper-no-swiping",
		navigation:{
			nextEl: ".button-next",
			prevEl: ".button-prev"
		},
		keyboard:{
			enabled: true,
			onlyInViewport: true,
		}
	});

	function enableSwiping(){
		if($(window).width() <= 900){
			$(".swiper-container").removeClass("swiper-no-swiping");
			mySwiper.params.speed = 250
		} else{
			$(".swiper-container").addClass("swiper-no-swiping");
			mySwiper.params.speed = 1000
		}
	}

	enableSwiping();

	$(window).resize(function(){
		enableSwiping();
	});

	const planets = ["mercury","venus","earth","mars","jupiter","saturn","uranus","neptune"]

	$.each(planets, function(index, planetId){
		var planet = "#" + planetId;
		var planetInfo = planet + "-info";
		$(planet).click(function(){
			$(".info-wrapper").css({
				"z-index" : "1"
			});
			$(planetInfo).css({
				"pointer-events" : "auto",
				"opacity" : "1",
				"display" : "flex"
			})	
		})
	});

	// close info
	$("#close-info").click(function(){
		$(".info-wrapper").css({
			"z-index" : "-1"
		});
		$(".info").css({
			"pointer-events" : "none",
			"opacity" : "0",
			"display" : "none"
		})
	});

});