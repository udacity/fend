Back to technqiues for clearing, here's the third.

### Strategy 3: Clearfix

Once more, let's look at the HTML of the normal flow parent with a float child and a normal flow sibling.

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
        .left {
          float: left;
        }
        .child {
          background-color: #15A222;
        }
        .sibling {
          background-color: #D16906;
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

<<img of ^^^>>
I'm sure you remember this.

There is a commandment for software developers:

> ### Thou shalt always write code that runs the way it reads.

I've also seen this [written as](http://stackoverflow.com/questions/876089/who-wrote-this-programing-saying-always-code-as-if-the-guy-who-ends-up-maintai):

> ### Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.

As a developer, you should always strive to write your code as clearly as possible. Keep surprises to a minimum. The example above breaks the commandment because the HTML seems to indicate that `.sibling` will be rendered underneath `.parent` and all of its children, but that's not what happens.

The third technique to clear floats, clearfix, combines aspects of the first two. The goal of the clearfix is to make a normal flow parent resize its box model to fit all of the floats inside it. There are two general techniques to do so.

1. Add an element with `clear: both` to the end of a parent. This ensures that the last element is a normal flow element that has been pushed below all the floats.
2. Turn the parent into a block formatting context with an `overflow` property other than `visible`. The block formatting context respects the boundaries of floats and ensures the parent's box model encompasses float children.

The first technqiue by itself, adding an HTML element with `clear: both`, violates the commandment of code clarity; HTML should be restricted to rendered content. However, applying the same technique with a pseudo-element works nicely. Here's how it looks.

    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Clearfix Example</title>
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
        .clearfix:after {
          content: '';
          clear: both;
          display: table;
        }
        .left {
          float: left;
        }
        .parent {
          background-color: #89D0E5;
        }
        .child {
          background-color: #15A222;
        }
        .sibling {
          background-color: #D16906;
        }
      </style>
    </head>
    <body>
      <div class="bordered parent clearfix">
        <div class="bordered child left">Child</div>
        <div class="bordered child left">Child</div>
      </div>
      <div class="bordered sibling">Sibling to the parent</div>
    </body>
    </html>

(I added a background color to `.parent` to make it stand out more.)

Here's how [it looks](http://udacity.github.io/fend/fend-refresh/lesson6-part2/clearfix-example-pseudo.html)!

<<img of clearfixed version!>>
No surprises! Now the site reflects the structure of the HTML.

This clearfix actually uses both technqiues - the pseudo-element has a block formatting context, forcing it to stay outside the bounds of the floats, and it clears both left and right floats.

Here's how the second technique, giving the parent a block formatting context, looks.

    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Clearfix Example</title>
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
        .clearfix {
          overflow: auto;
        }
        .left {
          float: left;
        }
        .parent {
          background-color: #89D0E5;
        }
        .child {
          background-color: #15A222;
        }
        .sibling {
          background-color: #D16906;
        }
      </style>
    </head>
    <body>
      <div class="bordered parent clearfix">
        <div class="bordered child left">Child</div>
        <div class="bordered child left">Child</div>
      </div>
      <div class="bordered sibling">Sibling to the parent</div>
    </body>
    </html>

<<img of overflow clearfix>>
This works too!

The result is the same! That's good news.

You just saw that there are two techniques to accomplish the same task. At this point, you should be asking yourself if one technique is better than the other. Great question. Keep going to the next quiz to investigate the side effects of clearfixes.