Before we get into the third technique for clearing, you need a quick primer on something called a [pseudo-element](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements).

### Pseudo-elements

The DOM is mutable (changeable). The magic of JavaScript (which you'll probably be learning about soon) is that it allows you to modify the DOM on the fly, effectively changing the way a live site renders.

CSS can also mutate the DOM using something called a **pseudo-element**. A pseudo-element is an element that is actually *created with CSS* and then rendered like a normal element. Let me show you [an example](http://udacity.github.io/fend/fend-refresh/lesson6-part2/pseudoelements.html).

    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Pseudo-elements Example</title>
      <link href='https://fonts.googleapis.com/css?family=Source+Sans+Pro' rel='stylesheet' type='text/css'>
      <style>
        * {
          box-sizing: border-box;
          font-family: 'Source Sans Pro', sans-serif;
          font-weight: bold;
          font-size: 14pt;
        }
        .bordered {
          border: 2px solid #2e3d49;
        }
        .child {
          background-color: #15A222;
        }
        .child:after {
          content: 'Pseudo-element!';
          display: block;
        }
      </style>
    </head>
    <body>
      <div class="parent">Parent
        <div class="child bordered">Child</div>
      </div>
    </body>
    </html>

Here's how it looks.

<<img of pseudo-element>>
Notice that the pseudo-element is inside the child.

The pseudo-element is created with `:after` inside the CSS on the element that I want to mutate. Another option would be `:before`. You can see that `:after` is rendered as a child of `.child` because it shares the background color of `.child` and is rendered inside the child's border. If you open developer tools, you'll also see that it's inside the child.

<<img of :after in devtools>>
More evidence that the pseudo-element is rendered as a child.

In effect, the pseudo-element is extra content that is added to the element. Without the `content` property, the pseudo-element *disappears*! Watch.

<video width="100%" controls loop >
  <source src="https://s3.amazonaws.com/content.udacity-data.com/courses/fend/pseudo-element-disappears.mp4" type="video/mp4">
  Your browser does not support the video tag. <a href="https://s3.amazonaws.com/content.udacity-data.com/courses/fend/pseudo-element-disappears.mp4" target="_blank">Click here to see the animation.</a>
</video>
*One click and it's gone!*

You can, of course, style pseudo-elements with whatever CSS properties you'd like. In this case, I added `display: block` so that the pseudo-element would take its own line. If you remove it, you'll see that it behaves like an inline element instead.

Pseudo-elements are useful in a many situations. I find myself using them most off as accents. For instance, the green ✓ and red ✗ that appear in the Udacity Feedback widget are `:before` pseudo-elements! [*Accurate with the current build of the widget as of August 2016.*]

<<img of pseudo-element check mark w/devtools open>>
A pseudo-element in the wild!

Keep going to see how a pseudo-element can be used to clear floats.