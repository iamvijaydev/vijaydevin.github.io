---
layout: post
title: The Trip - An experimental CSS3 gallery
redirect_from: '/2014/09/06/the-trip-gallery/'
permalink: /blog/the-trip-gallery/
categories: [CSS]
tags: ['css', 'skew', 'transform', 'gallery', 'trip']
comments: true
banner: 'https://googledrive.com/host/0By7ZVCPEFOB9NDBzN0NpdVFnSkk/the-trip.jpg'
banner_link: 'http://vijaydevin.github.io/demo_the-trip-gallery/'
---

I have always loved to watch those pictures with images inside stacked skewed frames. One picture itself presents a playful mashup of images from the whole event. While browsing through an album of my office colleague's trip to [Kanyakumari|http://en.wikipedia.org/wiki/Kanyakumari], the idea just hit me to create an image gallery out of it.

Fair warning: I have created it with the bleeding edge technologies in CSS3. It works great on Google Chrome browser, and that's it. I havn't test it in other browsers although I have tried to support. This is an experiment; someday I may make it a package and share. You are welcome to improve - [Github Repo|https://github.com/vijaydevin/demo_the-trip-gallery].

Now then lets begin with important part of creating images inside stacked skewed frames.

<!-- more -->

So basically there is a container and a image inside it. We will be using ```backgroung-image``` rather than images since it gives better screen frame rate. To further boost frame rates, we will be positioning everything. Lets take a look at the basic HTML structure:

{% highlight html %}
<div class="container">
	<div class="image" style="backgroung-image: url(img.jpg)"></div>
</div>
{% endhighlight %}

And here is the CSS magic:

{% highlight css %}
.container {
	width: 500px;
	height: 100%;
	/**/
	-webkit-transform: skew(-20deg);
	-moz-transform: skew(-20deg);
	transform: skew(-20deg);
}

.image {
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

So there you have it guys. See you around. :smile: