#Let it snow
The "Let it snow" is a lightweight, easy to modify jQuery plugin to add unobtrusive, non-blocking CSS3 snowfall to your page. It has JavaScript animation fallback to support legacy browsers (down to IE7).

[Demo page](http://drawain.hu/let-it-snow-jquery-plugin/)

##Features
- CSS3 animation (hardware accelerated on some browser)
- Only 0.4kb gzipped
- Disabled pointer events to prevent blocking the UI
- JavaScript animation fallback if there is no CSS animation
- Internet Explorer support (down to IE7)
- Attach to any container, not just the body

##Prerequisites
- You have to use [-prefix-free](http://leaverou.github.com/prefixfree/) JS library to support multiple browsers or add CSS prefixes in letitsnow.css
- The plugin uses Modernizr to detect CSS animation support

##Using
###Add prerequisites:

	<script src="js/modernizr.min.js"></script>
	<script src="js/prefixfree.min.js"></script>

If you do not want to use the prefixfree, you can modify the css by adding propriate prefixes for other browsers. This library includes a base Modernizr package but you can use other builds.

###Add plugin files:

	<link rel="stylesheet" href="css/letitsnow.css">
	<script src="js/letitsnow.min.js"></script>

###Use on any container, eg. on the body:

	<script>
		$(function() {
			$('body').letItSnow();
		});
	</script>

You can use on other container elements, for eg. a div with the id "box":

	$('#box').letItSnow();

##Configuration
You have to dive a little into the source if you want to modify the animation.

###Slower snowflakes
In the *letitsnow.css* you have to modify the rules started with **.let_it_snow.snow_duration_**. The plugin randomly choose one of these rules to create snowflake animation. You have to modify *letitsnow.js* to set the animation durations for IE (search for **.animate**)

###Shorter or longer snowflake routes
In the *letitsnow.css* you have to modify the keyframes started with **snow_anim_**. The plugin randomly choose one of these rules to create snowflake animation. You have to modify *letitsnow.js* to set the snowflake route length for IE (search for **.animate**)

##License
MIT licensed

Copyright (C) 2012 Fincza András, http://drawain.hu