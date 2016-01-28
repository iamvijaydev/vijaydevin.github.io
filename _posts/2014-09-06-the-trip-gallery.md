---
layout: post
title: The Trip - A skewed CSS3 gallery
tagline: Fun with CSS3 transformations
redirect_from: '/2014/09/06/the-trip-gallery/'
permalink: /blog/the-trip-gallery/
categories: ['CSS']
tags: ['css3', 'transform', 'skew', 'gallery', 'trip', 'iScroll']
comments: true
description: "I have always loved to watch those pictures with images inside skewed frames. One picture presents a playful mashup of images from the whole event. While browsing through an album of my colleagues trip to Kanyakumari, the idea just hit me to create an image gallery out of it. Just as an experiment to create a working modal."
banner: 'https://googledrive.com/host/0By7ZVCPEFOB9NDBzN0NpdVFnSkk/the-trip.jpg'
banner_link: 'http://vijaydev.com/demo_the-trip-gallery/'
ogBanner: 'https://lh6.googleusercontent.com/DTWPAz-2IZabmEiLzmKct5vtryxlnO-LIRpiTuB4rRoFcMo48djI_BDC-ICzdDTknWyngBNISKo=w1896-h899'
---

<div class="message">
  <strong>Updates on Jan 28 2016:</strong>
  <ul>
    <li>Added mobile first responsiveness</li>
    <li>Swithed all values to rem</li>
    <li>Alternating filters for images</li>
  </ul>
</div>

I have always loved to watch those pictures with images inside skewed frames. One picture presents a playful mashup of images from the whole event.

While browsing through an album of my colleagues trip to Kanyakumari, the idea just hit me to create an image gallery out of it. Just as an experiment to create a working modal.

Checkout the [demo](http://vijaydev.com/demo_the-trip-gallery/) and the [Github Repo](https://github.com/vijaydevin/demo_the-trip-gallery).

Now then lets begin with understanding the basics of creating images inside skewed frames.

<!-- more -->

## The basics

Let there be a container and an image inside it. The container is skewed anti-clockwise which will also skew the image (#1). To reverse the skewed image we skew it clockwise for the same amount. In the end result the container is skewed but not the image, thusly we could see few blank areas in container (#2). To avoid this we would give the image twice as much width and position it to the middle, cropping parts of it (#3).

![alt text](https://googledrive.com/host/0By7ZVCPEFOB9NDBzN0NpdVFnSkk/the-trip-info.jpg "Problem with skew and its solution")

Lets use ```background-image``` rather than ```<img>``` tag since it gives better screen frame rates while translating. Also background-image will allow us to crop and resize the image without hassle. To further boost frame rates, lets positioning everything.

{% highlight html %}
<div class="child" style="left:0">
	<div class="photo" style="backgroung-image: url(img.jpg)"></div>
</div>
{% endhighlight %}

It make sense to added the background image as inline style rather than creating unique classes. We could also add then as ```<img>``` tags and replace as the above structure via JS. Multiple ```.child``` containers will be position one after the other rather than floated, automated via JS.

{% highlight css %}
.child {
	width: 500px;
	height: 100%;
	position: absolute;
	top: 0;
	/**/
	-webkit-transform: skew(-20deg);
	-moz-transform: skew(-20deg);
	transform: skew(-20deg);
}

.photo {
	width: 1000px;
	height: 100%;
	position: absolute;
	top: 0;
	left: -50%;
	background-position: center;
	background-size: cover;
	/**/
	-webkit-transform: skew(+20deg);
	-moz-transform: skew(+20deg);
	transform: skew(+20deg);
}
{% endhighlight %}

In the above styles the ```.child``` is skewed _anti-clockwise_ (-20deg) and the ```.photo``` is counter skewed  _clockwise_ (+20deg). Additionally the background image is centralized and sized to cover with ```.photo``` having twice width and positioned to middle.

## Building the structure

Lets use the famous [iScroll.js](http://iscrolljs.com/) for the touch/drag/scroll effects and lets build the html structure around our code accordingly.

{% highlight html %}
<div id="wrapper">
	<div id="scroller">
		<ul id="thelist">
			<li class="child">
				<div class="photo"
					 style="background-image: url(img.jpg)">
				</div>
			</li>
			...
			...
		</ul>
	</div>
</div>
{% endhighlight %}

The gallery images are now in an unordered list. Each ```li.photo``` is already positioned via CSS and will placed one after the other by setting a ```left``` value via JS.

## Adding the script

The script takes care of following things:

* Calculate and assign ```left``` to each ```.child``` nodes
* Setup the iScoll for touch/drag/scroll effect
* Prevent bounce effets on some touch devices (iOS)

There are few additional things that I haven't troubled JS to take care of, since this only an experiment. But if we were to build an plugin these are the additional things that must be taken care by JS:

* Based on the width and counts of ```.child``` assign a total width to ```#theList``` and ```#scroller```
  * Width is necessary for iScroll to work properly
* Allow the end user to add the image as simple ```<img>``` tags that can be replaced as the above HTML structure
* Adjustments for responsive screens

{% highlight js %}
// Run along now, this is a private party
(function(document, window) {

	// DOM nodes and objects instances
	var $thelist, $thelistChilds, $wrapper, myScroll, loaded;

	// numerical variables
	var i = 0, left = 0;

	// exec. after DOM ready
	loaded = function() {

		// assign 'left' to each child
		$thelist = document.getElementById( 'thelist' );
		$thelistChilds = $thelist.children;
		for (i = 0; i < $thelistChilds.length; i++) {
			left += 500;
			$thelistChilds[i].style.left = left + 'px';
		};

		// setup iScroll
		$wrapper = document.getElementById( 'wrapper' );
		myScroll = new IScroll($wrapper, {
			'scrollbars': 'custom',
			'mouseWheel': true,
			'bounce': false,
			'interactiveScrollbars': true,
			'eventPassthrough': true,
			'scrollX': true,
			'scrollY': false
		});
	};

	// if its a touch screen
	if ( 'ontouchstart' in window ) {

		// avoid and browser screen bounce
		document.addEventListener( 'touchmove', function (e) {
			e.preventDefault();
		}, false );
	};
	
	// setup DOM ready listener
	document.addEventListener( 'DOMContentLoaded', loaded, false );
})( document, window );
{% endhighlight %}

You can checkout the end result in this [demo](http://vijaydev.com/demo_the-trip-gallery/). You can also checkout the code in the [Github Repo](https://github.com/vijaydevin/demo_the-trip-gallery) and suggest any improvements.

Hack at it. :v:
