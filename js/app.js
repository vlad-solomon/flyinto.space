$(document).ready(function(){

	// Initialize swiper function
	var planetSwiper = new Swiper(".swiper-container" , {
		speed: 1000,
		slidesPerView: "auto",
		noSwipingClass: "swiper-no-swiping",
		navigation:{
			nextEl: ".button-next",
			prevEl: ".button-prev"
		},
	});


	// Call to Action function
	$(".cta").click(function(){
		// Get every element of the hero in reverse order
		$($(".hero *").get().reverse()).each(function(i){
			setTimeout(function(){
				// After getting every element of the hero in reverse order
				// set opacity: 0 to each one with a delay of 200ms between
				// each iteration
				$($(".hero *").get().reverse()).eq(i).css({"opacity" : "0"})
			}, 200 * i)
		});
		setTimeout(function(){
			// Make the swiper visible
			$(".swiper-container").css("opacity" , "1");
			// After every element of the hero is set to opacity: 0
			// send the hero container to the back with pointer-events: none
			$(".hero").css({
				"z-index" : "-1",
				"pointer-events" : "none"
			})
		}, 800)
		// Enable the keyboard inputs
		// after the swiper is displayed
		planetSwiper.keyboard.enable();
	});

	// Enable swiping function
	function enableSwiping(){
		if($(window).width() <= 900){
			// If the window size is less than 900px
			// make enable swiping function for the planet swiper
			$(".swiper-container").removeClass("swiper-no-swiping");
			planetSwiper.params.speed = 250
		} else{
			// Else disable the swiping function
			$(".swiper-container").addClass("swiper-no-swiping");
			planetSwiper.params.speed = 1000
		}
	}

	// Start the enable swiping function
	enableSwiping();

	// Start the swiping function everytime
	// the window is resized
	$(window).resize(function(){
		enableSwiping();
	});

	// Array consisting of every planet
	const planets = ["mercury","venus","earth","mars","jupiter","saturn","uranus","neptune"]

	// Get planet info accoring to the planet selected
	$.each(planets, function(index, planetId){
		// Store id of the planet button in a variable
		var planet = "#" + planetId;
		// Store id of the planet info in a variable
		var planetInfo = planet + "-info";
		// Display planet info function
		$(planet).click(function(){
			// Disable the keyboard inputs for the planet swiper
			planetSwiper.keyboard.disable()
			// Translate the parent of the planet info
			$(".info-wrapper").css({
				"z-index" : "1",
				"transform" : "translateY(0)",
			});
			// Give the parent of the planet info overflow: auto
			// after it is translated
			setTimeout(function(){
				$(".info-wrapper").css("overflow" , "auto");
				// Make close info button visible and clickable
				$("#close-info").css({
					"opacity" : "1",
					"pointer-events" : "auto"
				})
			}, 1000)
			// Move the planet swiper up and off the screen
			$(".swiper-container").css({
				"transform" : "translateY(-200%)",
				"opacity" : "0"
			})
			// Show the selected planet info
			$(planetInfo).css({
				"pointer-events" : "auto",
				"opacity" : "1",
				"display" : "flex"
			})	
		})
	});

	// Close info function
	$("#close-info").click(function(){
		// Enable the keyboard inputs for the planet swiper 
		planetSwiper.keyboard.enable();
		// Make the close info button invisible and unclickable
		$(this).css({
			"opacity" : "0",
			"pointer-events" : "none"
		});
		// Remove overflow for the parent container of the planet info
		$(".info-wrapper").css("overflow" , "hidden")
		setTimeout(function(){
			// Translate down and off the screen the parent
			// container of the planet info
			$(".info-wrapper").css({
				"transform" : "translateY(100%)"
			});
			// Translate down and on the screen the planet swiper
			$(".swiper-container").css({
				"transform" : "translateY(-100%)",
				"opacity" : "1"
			})
			// Make the planet info invisible and unclickable
			$(".info").css({
				"pointer-events" : "none",
				"opacity" : "0",
			})
		}, 300)
		// Give the planet info display: none after
		// 1000ms from when the close button is clicked
		setTimeout(function(){
			$(".info").css({
				"display" : "none"
			})
		}, 1000)
	});

});