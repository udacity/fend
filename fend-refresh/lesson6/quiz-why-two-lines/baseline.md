In the next two quizzes, you'll be diving headfirst into debugging a very strange situation with CSS. But before you get there, you need a little more background on text layout.

Rendered text on a website, like the text you're reading now, takes up space on the page. The font and font size you use is a major factor in calculating the size of the line boxes of inline elements. Each font defines a text-top, text-bottom and <a href="https://en.wikipedia.org/wiki/Baseline_(typography)" target="_blank">baseline</a>, which the browser uses to calculate the height of the line boxes.

<<diagram of font height lines>>
Fonts are more complicated than this, of course, but this is generally the picture you should keep in your head for web development.

There are two properties that you can use to align text: `text-align` for [horizontal alignment](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align) and `vertical-align` for [vertical alignment](https://developer.mozilla.org/en-US/docs/Web/CSS/vertical-align).

### Horizontal Alignment

Horizontal alignment starts with another property, `direction`, which has two options: `ltr` and `rtl`. `ltr` is the default value and it stands for "left to right". `rtl` stands for "right to left". You'll need to set `direction: rtl` when working with text in languages like Hebrew (עִברִית) and Arabic (العربية), which are read from right to left (compare the two directions on [our landing page for our Egypt program](https://www.udacity.com/egypt)!).

`text-align` takes on the default value of `start`. In the case of `ltr`, `start` is the same as `left`. With `rtl`, `start` is equivalent to `right`. This is normal text alignment, where the text pushes against the start of the container. `justify` is another option. Newspapers (in real life) tend to use `justify` to keep the left and right edges of text nicely aligned with the edges of the column, but it's not used as much online. Besides that, `left`, `right`, and `center` do exactly what you think they do - align text to the left, right or center of the line box.

### Vertical Alignment

By default, text sits on the baseline inside its container. More specifically, the baseline of the text will match the baseline of the parent. Let me show you an example.

    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Baselines</title>
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
        span {
          display: inline-block; /* so I can set a width */
          width: 10em; /* with a limited width, the text is forced to wrap */
        }
      </style>
    </head>
    <body>
      <div class="parent bordered">
        <span>This is text.</span>
        <span>This is more text.</span>
        <span>This is text that extends a few lines down so that you can see that its baseline is lower.</span>
      </div>
    </body>
    </html>

<<img baselines>>
Notice that all the text is aligned at the bottom of the parent.

In this case, the larger span pushes the baseline of the parent lower because the parent must expand to contain the span. The two shorter spans drop down to sit on the parent's baseline.

There are two sets of values you can use to change text vertical alignment. The first set focuses on the parent's size, while the second set focuses on the element's *line*.

`vertical-align: text-top`, `vertical-align: text-bottom` and `vertical-align: middle` are options for aligning text to the [eponymous](https://en.wikipedia.org/wiki/Eponym) locations in the parent.

`vertical-align: top` and `vertical-align: bottom` will align with the *line* instead.

Deciding how and when to use `vertical-align` is usually more of an exercise in trial-and-error than careful consideration. So in the next quiz, you'll be trying them out!