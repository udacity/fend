Developers realized that something interesting happens with multiple floats on the page. While floats ignore block elements, they respect the boundaries of other float elements.

Here is a website with multiple `float: left` and `float: right` elements.

    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Floats Left and Right</title>
      <style>
        @font-face {
          font-family: 'Menlo Regular';
          font-style: normal;
          font-weight: normal;
          src: local('Menlo Regular'), url('fonts/Menlo-Regular.woff') format('woff');
        }
        * {
          box-sizing: border-box;
          font-family: 'Menlo Regular', monospace;
          font-weight: bold;
        }
        div {
          font-size: 44pt;
          border: 6px solid #2e3d49;
          width: 5em;
          text-align: center;
        }
        .left {
          float: left;
        }
        .right {
          float: right;
        }
        .green {
          background-color: #89D698;
        }
        .blue {
          background-color: #89D0E5;
        }
      </style>
    </head>
    <body>
      <div class="left 1 green">.left.1</div>
      <div class="right 2 blue">.right.2</div>
      <div class="left 3 green">.left.3</div>
      <div class="right 4 blue">.right.4</div>
    </body>
    </html>

Here's how the site looks.

<<img many floats>>
See how the floats stack next to each other?

Notice how the floats stack on one another in the order that they appear in HTML. This animation gives you an idea of how the elements end up where they do.

<video width="100%" controls loop >
  <source src="https://s3.amazonaws.com/content.udacity-data.com/courses/fend/floats-left-right.mp4" type="video/mp4">
  Your browser does not support the video tag. <a href="https://s3.amazonaws.com/content.udacity-data.com/courses/fend/floats-left-right.mp4" target="_blank">Click here to see the animation.</a>
</video>
*See how they slide into place!*

Regardless of `float: left` or `float: right`, all floats respect each other's space. Try widening the floats in the previous quiz (bump up the `width` of `div`) and you'll see that once floats push against each other, they wrap to the next line. Here's an example that demonstrates just that.

    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Floats Left and Right</title>
      <style>
        @font-face {
          font-family: 'Menlo Regular';
          font-style: normal;
          font-weight: normal;
          src: local('Menlo Regular'), url('fonts/Menlo-Regular.woff') format('woff');
        }
        * {
          box-sizing: border-box;
          font-family: 'Menlo Regular', monospace;
          font-weight: bold;
        }
        div {
          font-size: 44pt;
          border: 6px solid #2e3d49;
          width: 5em;
          text-align: center;
        }
        .left {
          float: left;
        }
        .green {
          background-color: #89D698;
        }
        .blue {
          background-color: #89D0E5;
        }
      </style>
    </head>
    <body>
      <div class="left green">.left</div>
      <div class="left blue">.left</div>
      <div class="left green">.left</div>
      <div class="left blue">.left</div>
      <div class="left green">.left</div>
      <div class="left blue">.left</div>
      <div class="left green">.left</div>
      <div class="left blue">.left</div>
      <div class="left green">.left</div>
      <div class="left blue">.left</div>
      <div class="left green">.left</div>
      <div class="left blue">.left</div>
      <div class="left green">.left</div>
      <div class="left blue">.left</div>
      <div class="left green">.left</div>
      <div class="left blue">.left</div>
    </body>
    </html>

This example probably looks much like you expected.

<<img of floats that have wrapped>>
Lots and lots of floats!

Now that you've seen the basic concepts, on the next page you'll be experimenting with floats inside parents.