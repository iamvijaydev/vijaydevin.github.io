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
	};

	document.addEventListener( 'DOMContentLoaded', loaded, false );
})(document, window);