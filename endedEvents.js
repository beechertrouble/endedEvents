/**
* endedEvents
* adds events for when expensive evnts (like scroll and resize) have ended
*/
;(function($, W) {

	'use strict';

	/**
	 * for AMD, don't redefine this!  (need to maintain globals and plugins)
	 */
	if (W.endedEvents)
		return;
	
	$ = $;
	var D = document,
		endedEvents = {
			isScrollStopped : true,
			isResizedStopped : true,
			scrollTimer : undefined,
			resizeTimer : undefined
		},
		scrollStopped = function() {
			
			W.endedEvents.isScrollStopped = true;
			
			if($ !== undefined)
				$(W).trigger('scrollStopped');
							
		},
		resizeStopped =  function() {
			
			W.endedEvents.isResizedStopped = true;
			
			if($ !== undefined)
				$(W).trigger('resizeStopped');
							
		};
		
		endedEvents.init = function(throttle, $jquery) {
			
			if($jquery !== undefined)
				$ = $jquery;
			
			// you need support for addEventListener ....
			if(!D.addEventListener || typeof D.addEventListener == 'undefined') return;
			
			// how often should we chck to see if the event has stopped ? ...
			endedEvents.throttle = throttle === undefined ? 150 : throttle;
			
			W.addEventListener("scroll", function() {
				
				W.endedEvents.isScrollStopped = false;
				clearTimeout(W.endedEvents.scrollTimer);
				W.endedEvents.scrollTimer = setTimeout( scrollStopped , endedEvents.throttle );
					
			});
			
			W.addEventListener("resize", function() {
				
				W.endedEvents.isResizedStopped = false;
				clearTimeout(W.endedEvents.resizeTimer);
				W.endedEvents.resizeTimer = setTimeout( resizeStopped , endedEvents.throttle );
					
			});
			
			if($ !== undefined)
				$.event.props.push(['scrollStopped', 'resizeStopped']);
		
		};
		
	/**
	 * Apply the ikelos function to the supplied scope (window)
	 */
	W.endedEvents = endedEvents;

})(jQuery || $, window);

/**
 * Expose endedEvents as an AMD
 */
if (typeof define === "function") 
	define("endedEvents", [], function () { return endedEvents; } );
