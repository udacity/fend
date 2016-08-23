Think back to relative positioning. When you're relatively positioning elements, you can use the `top`, `left`, `bottom`, and `right` properties to shift the position of an element relative to where it should have ended up in the normal flow.

`position: absolute` and `position: fixed` work similarly. Before we start, here's a quick table summarizing the differences:

|                           | **Relative**                | **Absolute**           | **Fixed**              |
|---------------------------|-------------------------|--------------------|--------------------|
| **When**                      | After normal flow       | Before normal flow | Before normal flow |
| **Positioned relative to...** | position in normal flow | parent             | viewport           |

### Absolute Position

In the case of `position: absolute`, the biggest difference is timing.

Remember, relative elements are laid out in the normal flow first. After all of the elements have been laid out, then  the shift from its normal position occurs.

In the case of `position: absolute`, the element is positioned relative to its parent *before* the rest of the normal flow occurs. Its siblings in the normal flow *ignore it* and are laid out as if it were not there.

Take a second to examine the next example. [Play with the live version!](http://udacity.github.io/fend/fend-refresh/lesson6/absolute-fixed-flow/absolute-example.html) Notice that the blue and yellow colors should be alternating.

    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Absolute Example</title>
      <link href='https://fonts.googleapis.com/css?family=Source+Sans+Pro' rel='stylesheet' type='text/css'>
      <style>
        * {
          box-sizing: border-box;
          font-family: 'Source Sans Pro', sans-serif;
          font-weight: bold;
        }
        div {
          display: inline-block;
          border: 2px solid #2e3d49;
          width: 200px;
          height: 100px;
        }
        div:nth-child(even) {
          background-color: #ecc81a;
        }
        div:nth-child(odd) {
          background-color: #02b3e4;
        }
        .absolute {
          position: absolute;
          top: 50px;
          left: 50px;
        }
      </style>
    </head>
    <body>
      <div></div>
      <div></div>
      <div class="absolute">Absolute
        <div class="absolute">Absolute child of absolute</div>
      </div>
      <div></div>
    </body>
    </html>

[insert image]

Both `position: absolute` elements are relative to their parents. Use developer tools on [the live site](http://udacity.github.io/fend/fend-refresh/lesson6/absolute-fixed-flow/absolute-example.html) to check and uncheck `top` and `left`. You'll notice that without specified coordinates, the element appears where it would have been in the normal flow, however its siblings still ignore it. The absolute element appears on top.

### Fixed Position

`position: fixed` elements are in the simplest flow. For them, `top`, `bottom`, `left` and `right` indicate a position within the viewport. As the user scrolls the page, fixed elements never move. The most common use cases include headers and side navigation menus.

[nytimes image]

*The New York Times homepage on 17 Aug 2016*

For instance, [The New York Times homepage](https://nytimes.com) uses a fixed header to keep the navigation bar in place as you scroll down the page. You can easily see this behavior with developer tools.

<video width="100%" controls loop >
  <source src="https://s3.amazonaws.com/content.udacity-data.com/courses/fend/nytimes-fixed.mp4" type="video/mp4">
  Your browser does not support the video tag. <a href="https://s3.amazonaws.com/content.udacity-data.com/courses/fend/nytimes-fixed.mp4" target="_blank">Click here to see the animation.</a>
</video>
<br>
<br>


If you look closely at the video (or examine the site yourself!), you'll see that the `<header>` also has `top: 0; left: 0` set, meaning that the header should be laid out at the top left corner of the page.

### When Would You Actually Use `position: absolute`?

Frankly, `position: absolute` is best thought of as a last resort. If all the other flows fail, then *maybe* absolute is your best option. Off the top of my head, I can't actually think of an instance where I *wanted* to use `position: absolute`. There are, in fact, other CSS techniques for absolutely positioning elements, of which my favorite is [`transform: translate`](https://developer.mozilla.org/en-US/docs/Web/CSS/transform).

It's good to know what `position: absolute` does, but it's rarely your best positioning option.