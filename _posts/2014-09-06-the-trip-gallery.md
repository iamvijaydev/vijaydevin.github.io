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

I have always loved to watch those pictures with images inside skewed frames. One picture itself presents a playful mashup of images from the whole event.

While browsing through an album of my colleagues trip to Kanyakumari, the idea just hit me to create an image gallery out of it. Just as an experiment to create a working modal. The [demo](http://vijaydevin.github.io/demo_the-trip-gallery/) and the [Github Repo](https://github.com/vijaydevin/demo_the-trip-gallery).

Now then lets begin with important part of creating images inside skewed frames.

<!-- more -->

Basically there is a container and a image inside it. The container is skewed counter-clockwise and the image is skewed clockwise for the same amount. In the end result the container is skewed but not the image, thusly we could see few blank areas in container. To avoid this we would give the image twice as much width and position it to the middle, cropping parts of it. Mashup is supposed to be bits of everything anyway. 

![alt text](https://googledrive.com/host/0By7ZVCPEFOB9NDBzN0NpdVFnSkk/the-trip-info-1.jpg "Problem with skew and its solution")

We will be using ```backgroung-image``` rather than ```<img>``` tags since it gives better screen frame rates while translating. Also background-image will allow us to crop and resize the image without hastel. To further boost frame rates, we will be positioning everything.

{% highlight html %}
<div class="container">
	<div class="image" style="backgroung-image: url(img.jpg)"></div>
</div>
{% endhighlight %}

It make more sense to added the background image as inline style rather than creating unique classes. We could also automating this with JS.

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