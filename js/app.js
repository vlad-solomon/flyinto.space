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

	$(".cta").click(function(){
		$($(".hero *").get().reverse()).each(function(i){
			setTimeout(function(){
				$($(".hero *").get().reverse()).eq(i).css({"opacity" : "0"})
			}, 200 * i)
		});
		setTimeout(function(){
			$(".swiper-container").css("opacity" , "1");
			$(".hero").css({
				"z-index" : "-1",
				"pointer-events" : "none"
			})
		}, 800)
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
				"z-index" : "1",
				"transform" : "translateY(0)",
			});
			setTimeout(function(){
				$(".info-wrapper").css("overflow" , "auto");
				$("#close-info").css({
					"opacity" : "1",
					"pointer-events" : "auto"
				})
			}, 1000)
			$(".swiper-container").css({
				"transform" : "translateY(-200%)",
				"opacity" : "0"
			})
			$(planetInfo).css({
				"pointer-events" : "auto",
				"opacity" : "1",
				"display" : "flex"
			})	
		})
	});

	// close info
	$("#close-info").click(function(){
		$(this).css({
			"opacity" : "0",
			"pointer-events" : "none"
		});
		$(".info-wrapper").css("overflow" , "hidden")
		setTimeout(function(){
			$(".info-wrapper").css({
				"transform" : "translateY(100%)"
			});
			$(".swiper-container").css({
				"transform" : "translateY(-100%)",
				"opacity" : "1"
			})
			$(".info").css({
				"pointer-events" : "none",
				"opacity" : "0",
			})
		}, 300)
		setTimeout(function(){
			$(".info").css({
				"display" : "none"
			})
		}, 1000)
	});

});