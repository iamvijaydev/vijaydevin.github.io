(function(document, window) {
	var hastouch = 'ontouchstart' in window;
	var TAP = hastouch ? 'touchend' : 'click';



	var loaded = function() {

		// sidebar toggle logic
		var toggle   = document.querySelector( '.sidebar-toggle' ),
			sidebar  = document.querySelector( '#sidebar' ),
			checkbox = document.querySelector( '#sidebar-checkbox' ),
			handler  = function(e) {
				var target = e.target;
				if( !checkbox.checked || (target === sidebar || target === checkbox || target === toggle) ) {
					return;
				}
				setTimeout(function() { checkbox.checked = false; }, 150);
			};

		document.addEventListener( TAP, handler, false );



		// work IScroll
		var prev = document.getElementById( 'prev' ),
			next = document.getElementById( 'next' ),
			myScroll;

		if ( !!prev && !!next ) {
			myScroll = new IScroll('#wrapper', {
				scrollbars: 'custom',
				interactiveScrollbars: true,
				eventPassthrough: true,
				scrollX: true,
				scrollY: false,
				snap: 'LI'
			});
			prev.addEventListener( TAP, function() { myScroll.prev(); }, false );
			next.addEventListener( TAP, function() { myScroll.next(); }, false );
		};
		
		
		
		// min height polyfill
		var minHeight = 0,
			$style = document.createElement( 'style' ),
			wait = false,
			throttle = function() {
				if ( wait ) {
					return;
				} else {
					reAdjust();
					wait = true;
					setTimeout(function() {
						wait = false;
					}, 300);
				};
			},
			reAdjust = function() {
				minHeight = window.innerHeight;
				$style.innerHTML = '.full-height { height: ' + minHeight + 'px; }';
			},
			firstRun = function() {
				$style.setAttribute( 'type', 'text/css' );
				document.querySelector( 'head' )
					.appendChild( $style );
				reAdjust();
			};
		
		firstRun();
		window.addEventListener( 'resize', throttle, false );
		
		
		// banner item animation fix (for FF)
		var $mainContent = document.querySelector( '#main-content' ),
			removeAnimClass = function() {
				for(var i = 0; i < 5; i++) {
					$mainContent.children[i]
						.classList
						.remove( 'anim' );
				}
			};
		!!$main-content && setTimeout( removeAnimClass, 3000 );
	};

	document.addEventListener( 'DOMContentLoaded', loaded, false );
})(document, window);
