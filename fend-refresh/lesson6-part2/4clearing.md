Remember, floats are outside the normal flow. In the previous quiz, you saw that despite the fact that the child float had a height, the parent *did not have a height*!

> ### Float children are *not* involved in the box-size calculation of normal flow parents.

If a container only contains a float child, the container will *not* have a height by default - the height has to be set some other way, such as with normal flow content or the `height` property.

This makes sense in some ways, but it's surprising in others. Given what you know about interactions between the normal flow and the float flow, you shouldn't be surprised that normal flow block elements ignore the size of child float elements when calculating box size. However, if you were, say, creating a page layout using floats, it would be reasonable to assume that a sibling to a parent element with float children would respect the boundaries of the children.

Let me show you.

    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Parent with Siblings and Float Children</title>
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
        .sibling {
          background-color: #D16906;
        }
        .left {
          float: left;
        }
      </style>
    </head>
    <body>
      <div class="bordered parent">
        <div class="bordered child left">Child</div>
        <div class="bordered child left">Child</div>
      </div>
      <div class="bordered sibling">Sibling to the parent</div>
    </body>
    </html>

At a glance, the HTML seems to say that the sibling, `.sibling`, will be displayed below the parent and its children. Of course, that's not true. Here's how it looks.

<<img of parents sibling>>
While the sibling is below the parent, it isn't below the parent's child float elements.

If you're using floats to create a layout (as you will be soon), this is undesired behavior. There are a few ways to work around it and force elements in the normal flow to respect the boundaries of floats.

### Strategy 1: Block Formatting Contexts

This strategy forces normal flow **siblings** to respect the boundaries of floats. Elements with a block formatting context (remember those from last lesson!) may not overlap floats.

This rule originally protected elements like `<table>`, which create their own block formatting context, from being invaded by floats. The reasoning behind this is that you wouldn't want a random image to push aside all the text inside a carefully built table.

You can take advantage of this rule - if you force elements to establish a block formatting context, they'll respect the boundaries of the float.

In [this example](http://udacity.github.io/fend/fend-refresh/lesson6-part2/float-block-formatting.html), I'm using the `overflow` property to set a block formatting context (any value other than `visible`, including `auto`, forces an element to take on a block formatting context).

    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Block Formatting Context</title>
      <style>
        * {
          box-sizing: border-box;
          font-family: 'Source Sans Pro', sans-serif;
          font-weight: bold;
          font-size: 14pt;
        }
        .child {
          background-color: #15A222;
        }
        .bordered {
          border: 2px solid #2e3d49;
        }
        .block-context {
          overflow: auto;
          background-color: #D16906;
        }
        .left {
          float: left;
        }
      </style>
    </head>
    <body>
      <div class="parent">
        <div class="child left">Child</div>
        <div class="child left">Child</div>
        <div class="bordered block-context">New context</div>
      </div>
    </body>
    </html>

<<img of example>>
There's no overlap between the new context and the two float children.

With `overflow: auto`, the "new context" element respects the boundaries of the two children. No overlap! Try toggling `overlap: auto` to see what happens if it isn't applied.

You can take this a step further with a property called `clear`.

### Strategy 2: Clearing

By default, line boxes clear out space for float elements. "Clear," in this case, means that they move out of the way for floats. You can control how siblings interact with floats with `clear`.

`clear: left` indicates that the top of the element must be below any left floated elements that appear before this one in the document. `clear: right` acts the same, but with right floated elements. `clear: none` means that there are no restrictions; this is the default value.

`clear: both` is interesting - it indicates that the element must be below *any* floated elements that appear earlier in the document.

Let me demonstrate. There are four examples in this HTML.

    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Block Formatting Context</title>
      <style>
        * {
          box-sizing: border-box;
          font-family: 'Source Sans Pro', sans-serif;
          font-weight: bold;
          font-size: 14pt;
        }
        div:nth-child(even):not(.left):not(.right) {
          background-color: #128FC2;
        }
        div:nth-child(odd):not(.left):not(.right) {
          background-color: #15A222;
        }
        .bordered {
          border: 2px solid #2e3d49;
        }
        .left {
          float: left;
          background-color: #FD9F0E;
        }
        .right {
          float: right;
          background-color: #FD9F0E;
        }
        .clear-left {
          clear: left;
        }
        .clear-right {
          clear: right;
        }
        .clear-both {
          clear: both;
        }
        .wide {
          width: 40%;
        }
      </style>
    </head>
    <body>
      <!-- example 1 -->
      <div class="bordered left">Left ← Left ← Left</div>
      <div class="bordered clear-left">This element has been clear left'ed.</div>

      <!-- example 2 -->
      <div class="bordered right">Right → Right → Right</div>
      <div class="bordered clear-right">This element has been clear right'ed.</div>

      <!-- example 3 -->
      <div class="left bordered">Left ← Left ← Left</div>
      <div class="bordered">Not cleared at all!</div>

      <!-- example 4 -->
      <div class="bordered left wide">Left ← Left ← Left ← Really wide.</div>
      <div class="bordered right wide">Right → Right → Right. Really wide.</div>
      <div class="bordered clear-both">This element has been clear both'ed.</div>
    </body>
    </html>

<<img of clears>>
There is clearly a difference to the behaviors of different clears. (Sorry for the bad pun :P)

There's one more technique: the clearfix. But before we get to it, I want you to practice clearing floats.