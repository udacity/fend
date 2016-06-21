The `line-height` [property](https://developer.mozilla.org/en-US/docs/Web/CSS/line-height) controls the height of lines, obviously 😉 .

![duh meme](http://udacity.github.io/fend/lessons/L5/problem-set/06-playing-with-line-height/duh-meme.gif)

## Line-Height

More specifically, `line-height` defines the minimum height of line boxes for inline elements. You've probably done something very similar to this if you've used a word processor and set the line spacing for a document to single-spaced, double-spaced, and so on.

![setting line spacing in Microsoft Word](http://udacity.github.io/fend/lessons/L5/problem-set/06-playing-with-line-height/line-spacing.png)

_Example of setting line-spacing, similar to `line-height`, in Microsoft Word 2016._

You can specify `line-height` three different ways, by using a (1) number, (2) length, or (3) percentage. By default, `line-height` is set to `normal` which is [rougly 1.2](https://developer.mozilla.org/en-US/docs/Web/CSS/line-height#Values) (based on the elememt's `font-family`) multiplied by the element's `font-size`.

For example, if your element's `font-size` is set to `16px`, then by default its `line-height` is rougly `19.2px` when set to `normal`. You could achieve the same result by writing `line-height` as: 

1. `line-height: 1.2;`
2. `line-height: 19.2px;`
3. `line-height: 120%;`

_Here's three different ways to express `line-height`. These are all equivalent, assuming the element's `font-size` is set to `16px` (1.2 multiplied by 16px = 19.2px)._

In this quiz, you'll play around with using different values for `line-height`. Also, when you pass each test, you will be rewarded with a cool CSS effect. Each effect leverages `line-height` to generate some pretty interesting results! Are you ready to get started?