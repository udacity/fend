The two techniques for clearfix are:

    .clearfix:after {
      content: '';
      clear: both;
      display: table;
    }

and

    .clearfix {
      overflow: auto;
    }

If you were to decide which technique is better just based on the complexity of the two CSS classes, `overflow: auto` would win. It's much simpler. However, `overflow: auto` has a side effect. I'm not going to tell you what it is because I want you to figure that out for yourself in this quiz! But first, a little bit of background about `overflow`.

### Overflow

There are technically three different [overflow properties](https://developer.mozilla.org/en-US/docs/Web/CSS/overflow): `overflow`, `overflow-x` and `overflow-y`. These three properties determine what happens to content if its box model is larger than its parent's box model.

The default option is `visible`, which means that the content is always rendered and may extend *outside* of its parent. Other options include `hidden`, `scroll` and `auto`. `hidden` does exactly what you think - it clips off any content that extends outside the parent's box model. `scroll` adds scroll bars to the parent, allowing the user to scroll around the parent element to access all the content. The behavior of `auto` depends on the browser.

Keep this in mind as you go through the quiz.

### Instructions

1. Head to [this site](http://udacity.github.io/fend/fend-refresh/lesson6-part2/clearfix-overflow-quiz.html), which is using the `overflow: auto` clearfix.
2. Open developer tools to determine which of the options below describes what could go wrong with `overflow: auto`. (Hint, `.row` has some commented out properties that you should try manipulating.)
3. Answer the question below!

What can go wrong with `overflow: auto`? Pick all that apply.

* Shrinking the height of the parent, `.row`, added vertical scrollbars to the div.
  * Right! This is the biggest problem with `overflow: auto`.
  * Take another look at the first answer. Did you try shrinking the height of `.row`?

* Shrinking the width of the parent added horizontal scrollbars to the div.
  * Take a look at the second answer. Line boxes are designed to adjust to the width of their containers.

* The parent is no longer resizable with `width` and `height`.
  * Take a look at the third option. You can still set `width` and `height`.

* All of the content is now scrollable by default.
  * Take a look at the fourth option. Some content can be scrollable under the right circumstances, but it is not scrollable by default.