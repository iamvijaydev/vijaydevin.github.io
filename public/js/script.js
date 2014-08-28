(function(document, window) {
	var hastouch = 'ontouchstart' in window;
	var TAP = hastouch ? 'touchstart' : 'click';


	var loaded = function() {

		// sidebar toggle logic
		var toggle   = document.querySelector( '.sidebar-toggle' ),
			sidebar  = document.querySelector( '#sidebar' ),
			checkbox = document.querySelector( '#sidebar-checkbox' ),
			handler  = function(e) {
				var target = e.target;
				if( !checkbox.checked || sidebar.contains(target) || (target === checkbox || target === toggle) ) {
					return;
				}
				checkbox.checked = false;
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
				snap: 'li'
			});
			prev.addEventListener( TAP, function() { myScroll.prev(); }, false );
			next.addEventListener( TAP, function() { myScroll.next(); }, false );
		};


		// logo flip
		// var logoWrap = document.getElementById( 'logo-wrap' );

		// var cleanUp = function() {
		// 	logoWrap.classList.remove( 'animate' );
		// 	setTimeout(function() {
		// 		logoWrap.classList.remove( 'flipped-360' );
		// 	}, 100);
		// };

		// var exec = function() {
		// 	if ( !logoWrap.classList.contains('animate') ) {
		// 		logoWrap.classList.add( 'animate' );
		// 		logoWrap.classList.add( 'flipped-180' );
		// 	} else if ( logoWrap.classList.contains('flipped-180') ) {
		// 		logoWrap.classList.remove( 'flipped-180' );
		// 		logoWrap.classList.add( 'flipped-360' );
		// 		// TODO swap out 360 after animation, without animation effect
		// 			// +1s remove .animate
		// 			// +100ms remove .flipped-360
		// 		setTimeout(cleanUp, 1000);
		// 	}
		// };

		// setInterval(exec, 2500);

		// setting 2x image when required
		var logoMain, logoSideBar, logoInner, sd, hd;
		if ( window.devicePixelRatio > 1 ) {
			logoMain = document.getElementById( 'logo-main' ),
			logoSideBar = document.getElementById( 'logo-side-bar' ),
			logoInner = document.getElementById( 'logo-inner' );

			if ( !!logoMain ) {
				sd = logoMain.getAttribute( 'src' );
				hd = sd.replace( '.', '-2x.' );
				logoMain.setAttribute( 'src', hd );
			};

			if ( !!logoSideBar ) {
				sd = logoSideBar.getAttribute( 'src' );
				hd = sd.replace( '.', '-2x.' );
				logoSideBar.setAttribute( 'src', hd );
			};

			if ( !!logoInner ) {
				sd = logoInner.getAttribute( 'src' );
				hd = sd.replace( '.', '-2x.' );
				logoInner.setAttribute( 'src', hd );
			};
		}
	};

	document.addEventListener( 'DOMContentLoaded', loaded, false );
})(document, window);