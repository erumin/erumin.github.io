 $(function(){
      $("#slides").slidesjs({
      	width: 500,
        height: 200,
        navigation: {
        				active: true,
						effect: "slide"
					}
		play: {
				active: true,
      			interval: 5000,
        		// [number] Time spent on each slide in milliseconds.
      			auto: true,
        		// [boolean] Start playing the slideshow on load.
      			swap: false,
        		// [boolean] show/hide stop and play buttons
      			pauseOnHover: false,
        		// [boolean] pause a playing slideshow on hover
      			restartDelay: 2500
        		// [number] restart delay on inactive slideshow
    			}
      });
    });