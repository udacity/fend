I scream, you scream...

![we all scream for ice cream!](http://udacity.github.io/fend-box-model-and-semantics/img/ice-cream.png)

Time to switch gears! For this quiz, you'll be fixing [a webpage](http://udacity.github.io/fend-box-model-and-semantics/exercises/making-peach-ice-cream/start/index.html) that showcases my mom's homemade peach ice cream recipe. Yum! 🍦 🍨

You'll be working in a text editor on your own computer, so you'll need to download a .zip file containing the site's HTML and CSS from the resources section or directly from [this link](http://udacity.github.io/fend-box-model-and-semantics/exercises/making-peach-ice-cream/start-peach-ice-cream.zip). In the .zip file, you'll find [this mockup](http://udacity.github.io/fend-box-model-and-semantics/exercises/making-peach-ice-cream/start/final.jpg) of the final version.

You'll be working in a text editor on your own computer, so you'll need to download a zip file containing the site's HTML and CSS from the resources section or directly from [this link](http://udacity.github.io/fend-box-model-and-semantics/exercises/making-peach-ice-cream/start-peach-ice-cream.zip). In the zip file, you'll find [this mockup](http://udacity.github.io/fend-box-model-and-semantics/exercises/making-peach-ice-cream/start/final.jpg) of the final version.

There are some issues with the webpage. It's using the default `content-box` for `box-sizing` and needs some tweaks done to the spacing between elements. Also, the recipe is enclosed inside a container, but the container is positioned all wrong. You'll need to set the `width` of the container and center it using a special trick with `margin`.

## Centering Boxes

When you set the width of a block element, it keeps the element from taking up the entire width of its container (as long as you set its width to something less than 100%). However, when you do this, the element stays fixed to the left side of the container. What if you want to _center_ it?

![margin auto image](http://udacity.github.io/fend-box-model-and-semantics/img/margin-auto.gif)

_In this animation, the container is the width of the browser and the blue box is being centered inside the container._

If you use the special keyword `auto` on the left and right margins of an element, you can horizontally center the element within its container. The combination of a set width and `margin: 0 auto;` (this is the [shorthand way](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties) of writing margin) will make the element take up the width you specify, and then the remaining horizontal space will be split "automatically" between the left and right margins. You see this used on a ton of websites!

---

**Note: If you try this recipe, tell us about it! Share pictures in the forums and let us know how it matches up with other ice creams you've had. Sidenote, this recipe is all about the peaches. The better the peaches, the better the ice cream!**