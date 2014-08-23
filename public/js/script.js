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
			prev.addEventListener( TAP, function() { myScroll.prev() }, false );
			next.addEventListener( TAP, function() { myScroll.next() }, false );
		};
	};

	document.addEventListener( 'DOMContentLoaded', loaded, false );

	// <p style="
	//     overflow: hidden;
	// "><img src="/public/img/logo-wm.png" alt="Logo" style="
	//     width: 90px;
	//     display: inline;
	//     margin: 0;
	//     float: left;
	//     border-radius: 0; "><span style="
	//     padding: 11px 0 0;
	//     display: inline-block;
	//     font-family: lato;
	//     font-size: 1.2rem;
	//     float: right;
	// ">VIJAY DEV</span></p>
})(document, window);