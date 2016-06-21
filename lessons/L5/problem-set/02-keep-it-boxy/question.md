For your first quiz, let's revisit that troublesome `box-sixing` property. But, before you get started, here's a little history lesson on why the `box-sizing` property exists today. Who said you can't learn a little history while learning front-end web development!

As a quick reminder, `box-sizing` is the property that determines how to calculate the `height` and `width` of elements. This would seem like a fairly straightforward calculation; however, it starts to get confusing when you add `padding` and `border`. Here's why...

## History of the Box Model

In the mid-to-late 90s, when the first verion of CSS was released, CSS1, the [W3C](https://www.w3.org/) released a spec for how to define the `box-model` using [this diagram](https://www.w3.org/TR/CSS1/#formatting-model).

![original box model diagram](http://udacity.github.io/fend/lessons/L5/problem-set/02-keep-it-boxy/original-box-model-diagram.png)

_W3C's original box model is still considered the default and is used by passing the value content-box to the box-sizing property._

Afterwards, they left it up to the browser developers to decide how they should support this specification, and herein lies the source for all the confusion. Out of all the browsers, Microsoft's Internet Explorer chose to support the specification using a slight modification to the diagram. Instead of considering an element's `width` to be only the `width` of the content, they decided to also include both `padding` and `border`.

![IE's box model diagram](http://udacity.github.io/fend/lessons/L5/problem-set/02-keep-it-boxy/ie-box-model-diagram.png)

_Internet Explorer's box model has become widely adopted by most modern websites and is used by passing the value border-box to the box-sizing property._

Thus, you had the [most popular browser](http://www.w3schools.com/browsers/browsers_stats.asp) in the 90s, using a different diagram than what was outlined by the W3C. Eventually Microsoft decided to add support for the original box model in their release of IE6 in 2001, but the memory of their box model still resonated with developers and it wouldn't be long until IE's version of the box model would make a resurgence.

## What Happened Next?

On [January 9, 2007](http://www.apple.com/pr/library/2007/01/09Apple-Reinvents-the-Phone-with-iPhone.html), Apple released its first version of the iPhone with a mobile browser. This changed the game and eventually lead to the birth of what we know today as responsive design!

![oooohhhh gif](http://udacity.github.io/fend/lessons/L5/problem-set/02-keep-it-boxy/toy-story-oooohhhh.gif)

[Responsive design](https://en.wikipedia.org/wiki/Responsive_web_design) is the process of building websites that provide an optimal viewing and interaction experience regardless of the size of the device; you'll be learning about responsive design very soon! But what does responsive design have to do with the box model?

Well, part of responsive design is building fluid designs that **respond** well to different widths, but this is challenging when using the original box model. For example, you might want to set the `width` of a column to be a particular value or percentage, only to be deceived after adding `padding` and `border`. Examples like this created a ton of extra work for designers, so they decided it was time for a change. And a change they received because soon thereafter W3C included the `box-sizing` property in CSS3!

## The Box-Sizing Property

Today, all current versions of modern browsers support the `box-sizing` property. By default, `box-sizing` is still set to `content-box` which uses the original method for calculating an element's size; however, you can change this by passing it the value `border-box`. Using `border-box` will include both `padding` and `border` as part of the element's size.

For this quiz, you'll experience the difference between using `content-box` and `border-box` as you set the `width` and `padding` of a few child elements inside a container.