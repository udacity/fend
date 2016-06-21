Now that we've covered horizontal alignment, it's time to look at vertical alignment.

## Vertical-Align

The `vertical-align` [property](https://developer.mozilla.org/en-US/docs/Web/CSS/vertical-align) controls how elements vertically sit next to each other on the same line. With that said, you can also use `vertical-align` to vertically align content inside table-cells.

![vertical-align example in table cells](http://udacity.github.io/fend/lessons/L5/problem-set/05-fun-with-vertical-align/vertical-align-table-cells.png)

_Examples of `vertical-align` with table-cells._

The important thing here is `vertical-align` only works on **inline elements** (or [inline-block](https://css-tricks.com/almanac/properties/d/display/#inline-block)) and **table-cells**.

By default, all inline elements start `baseline` with the baseline of its parent. You can think of the baseline as the imaginary line at the bottom of the "line".

![inline elements vertically aligned on a line](http://udacity.github.io/fend/lessons/L5/problem-set/05-fun-with-vertical-align/vertical-align-pic.jpg)

Valid values for `vertical-align` include `top`, `bottom`, and `middle`, which work exactly like you'd expect, `super` and `sub` which can be used to superscript and subscript inline elements (hence their names), or you can use length values (e.g. px, %, em, rem, etc.) to specify a length above the baseline of its parent.

In this quiz, you'll work with the `vertical-align` property to align inline elements to match [this mockup](http://udacity.github.io/fend/lessons/L5/problem-set/05-fun-with-vertical-align/mockup.png). Along the way, you might even recall on a thing or two from your Algebra, Chemistry, or Grammer classes.

---

### Image Credit

- 'Inline Elements' by Louis Lazaris via [impressivewebs.com](https://www.impressivewebs.com/css-vertical-align/), Creative Commons.
- 'European Red Fox' by [Juan lacruz](https://commons.wikimedia.org/wiki/User:Juan_lacruz) via Wikipedia, Creative Commons.
- 'Lazy Dog' by [Andreas Almstedt](https://pixabay.com/en/users/Almi-205352/) via Pixabay, Creative Commons.