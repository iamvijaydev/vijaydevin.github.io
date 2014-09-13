---
layout: post
title: Hello World!
redirect_from: '/2014/06/19/hello-world/'
permalink: /blog/hello-world/
categories: [JavaScript]
tags: ['coding', 'javascript', 'hello', 'world']
comments: true
description: "I'm Vijay Dev from India. I'm a UI & Front-end developer with 5 years of solid experience in web and mobile applications. My experience range from a varity of technologies and frameworks, and yes of-course I'm a nerd, a movie junkie and a avid gamer. But I do love swimming and roller scating too."
banner: 'https://googledrive.com/host/0By7ZVCPEFOB9NDBzN0NpdVFnSkk/hello-world.JPG'
banner_link: 'https://www.facebook.com/media/set/?set=a.554126251271965.123064.100000237843626&type=1&l=a6228f13d9'
---

How's it going!

I'm Vijay Dev from India. I'm a UI & Front-end developer with 5 years of solid experience in web and mobile applications.

My experience range from a varity of technologies and frameworks, and yes of-course I'm a nerd, a movie junkie and a avid gamer. But I do love swimming and roller scating too.

This site is my efforts to start writing a blog to share and interact my experiences and knowledge with the internet.

<!-- more -->

Now then, since its "Hello world", here is a very simple hello world program in JavaScript:

{% highlight js %}
// variable to hold message and cache DOM node
var msg  = 'Hello World!',
	$msg = document.getElementById( 'msg' );

// inject the message into page
$msg.innerHTML( msg );

// log the message in console
console.log( msg );

// > Hello World!
{% endhighlight %}

So there you have it guys. See you around. :smile: