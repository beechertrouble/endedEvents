endedEvents
===========
adds events for when expensive evnts (like scroll and resize) have ended


Requirements
----
- ie9 or later (support required for [addEventListener](http://www.w3schools.com/jsref/met_document_addeventlistener.asp))
- OPTIONAL - jQuery

Usage
----
- add the js
- init like : <code>endedEvents.init();</code>
- or - fancy like setting the throttle* <code>endedEvents.init(50);</code>
- or - real fancy like <code>endedEvents.init(50, $jquery);</code> (to pass a specific version of jQuery)
- we are defined as 'endedEvents' for AMD

###* throttle
- how often the timers are run in milliseconds.
- lower numbers are run more frequently, but this is obviously more expensive.
- defaults to <code>150</code>

### with JQuery
- if you have jquery in scope, or you pass it to the init ....
- you'll get some new events : <code>'scrollStopped', 'resizeStopped'</code>
- so you can use them like : 
```javascript
	$("#thing").on('scrollStopped', function(){
		// your function here ...
	});
```