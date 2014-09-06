---
layout: post
title: The Trip - An experimental CSS3 gallery
redirect_from: '/2014/09/06/the-trip-gallery/'
permalink: /blog/the-trip-gallery/
categories: [CSS]
tags: ['css3', 'transform', 'skew', 'gallery', 'trip']
comments: true
banner: 'https://googledrive.com/host/0By7ZVCPEFOB9NDBzN0NpdVFnSkk/the-trip.jpg'
banner_link: 'http://vijaydevin.github.io/demo_the-trip-gallery/'
---

I have always loved to watch those pictures with images inside skewed frames. One picture itself presents a playful mashup of images from the whole event.

While browsing through an album of my colleagues trip to Kanyakumari, the idea just hit me to create an image gallery out of it. Just as an experiment to create a working modal. The [demo](http://vijaydevin.github.io/demo_the-trip-gallery/) and the [Github Repo](https://github.com/vijaydevin/demo_the-trip-gallery).

Now then lets begin with important part of creating images inside skewed frames.

<!-- more -->

Basically there is a container and a image inside it. The container is skewed anti-clockwise. To reverse the skewed image we skew it clockwise for the same amount. In the end result the container is skewed but not the image, thusly we could see few blank areas in container. To avoid this we would give the image twice as much width and position it to the middle, cropping parts of it.

![alt text](https://googledrive.com/host/0By7ZVCPEFOB9NDBzN0NpdVFnSkk/the-trip-info-1.jpg "Problem with skew and its solution")

We will be using ```backgroung-image``` rather than ```<img>``` tags since it gives better screen frame rates while translating. Also background-image will allow us to crop and resize the image without hassle. To further boost frame rates, we will be positioning everything.

{% highlight html %}
<div class="child" style="left:0">
	<div class="photo" style="backgroung-image: url(img.jpg)"></div>
</div>
{% endhighlight %}

It make sense to added the background image as inline style rather than creating unique classes. We could also automating this with JS. The containers will be position one after the other rather than floated, again automated via JS.

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

As you can see from the above styles are have skewed ```.child``` _anti-clockwise_ and counter skewed ```.photo``` _clockwise_. Additionally the background image is centralized and sized to cover.

Now we are gonna use the famous [iScroll.js](iscrolljs.com) for the touch/drag scroll effects and we will build the structure around our code accordingly.

{% highlight html %}
<div id="wrapper">
	<div id="scroller">
		<ul id="thelist">
			<li class="child">
				<div class="photo" style="background-image:url('img.jpg')"></div>
				<div class="filter"></div>
			</li>
			...
			...
		</ul>
	</div>
</div>
{% endhighlight %}

The gallery images are now an unordered list, with a handy filter on the side that will be applied over the image.