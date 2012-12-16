/*!
 * Let it snow
 * http://drawain.hu/let-it-snow-jquery-plugin
 * MIT licensed
 *
 * Copyright (C) 2012 Fincza András, http://drawain.hu
 */
(function($, window, undefined) {
	"use strict";

   var requestAnimFrame = (function(){
      return  window.requestAnimationFrame       ||
              window.webkitRequestAnimationFrame ||
              window.mozRequestAnimationFrame    ||
              window.oRequestAnimationFrame      ||
              window.msRequestAnimationFrame     ||
              function( callback ){
              	window.setTimeout(callback, 1000 / 60);
              };
    })();

	$.fn.letItSnow = function() {

		return this.each(function() {
			var $container = $(this),

				createSnowFlake = function() {
					var	$flake = $('<div class="let_it_snow"></div>'),
						top = '-50px',
						left = Math.floor(Math.random() * $container.width());

					// Add snowflake type 1 or type 2 (different images)
					$flake.addClass('snow_type_' + Math.ceil(Math.random()*2));

					$flake.css({ top: top, left: left + 'px', opacity: 1 });

					$container.append($flake);

					if (Modernizr.csstransitions) {
						$flake.addClass('snow_duration_' + Math.ceil(Math.random()*5));
						$flake.addClass('snow_delay_' + Math.ceil(Math.random()*5));
						$flake.addClass('snow_anim_' + Math.ceil(Math.random()*5));
					} else {
						$flake.animate({
							left: (left + Math.ceil(Math.random() * 200) - 100) + 'px',
							top:   (600 + Math.ceil(Math.random() * 200) - 100) + 'px'
						}, Math.ceil(Math.random() * 4000) + 5000, 'swing', function() {
							$flake.animate({ opacity: 0 }, 1000, 'swing');
						});
					}

					setTimeout(function() {
						setTimeout(function() {
							$flake.remove();
						}, 3000);

						requestAnimFrame(createSnowFlake);
					}, 6000 + Math.floor(Math.random() * 1000));
				};

			for (var i=0; i<25; i++) {
				setTimeout(createSnowFlake, i * 200 * Math.random());
			}

		});
	};

}(jQuery, window));