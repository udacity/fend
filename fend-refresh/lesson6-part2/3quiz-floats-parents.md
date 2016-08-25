I want you to learn through experimentation! In the previous examples, you saw floats directly inside the `<body>`. I want you to extend your knowledge of floats by experimenting with a float inside a parent.

For this quiz, you'll be drawing a conclusion about the behavior of floats - do elements in the float flow respect (i.e. stay within) their normal flow parent's borders? Or do they float with respect to the `document`, regardless of container?

Below, you'll find the HTML for [this site](http://udacity.github.io/fend/fend-refresh/lesson6-part2/float-with-parent.html). Head over to it and add `float: right` to `.child` with developer tools (try `float: left` too!). After you've seen the result, come back and answer the question at the bottom of this page.

    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Float with Parent</title>
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
        .parent {
          width: 50%;
        }
        .child {
          width: 10em;
        }
      </style>
    </head>
    <body>
      <div class="parent bordered">
        <div class="child bordered">child</div>
      </div>
    </body>
    </html>


Do floats respect the borders of their containers?

A) Yes! Floated elements stay within the height and width of their containers.

- Not quite! This statement is not entirely true.

B) Nope. Floated elements ignore their containers completely.

- Not quite! Floats somewhat respect the boundaries of the containers.

C) Maybe? Floated elements stay within their containers width, but not their height.

- Yes! This is a weird problem. You'll find out what's going on next.

D) Maybe? Floated elements stay within their containers height, but not their width.

- Not quite! You're right that something weird is going on, but floated elements do respect the width of their containers.
