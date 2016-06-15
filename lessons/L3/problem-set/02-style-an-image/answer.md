Here's what I added to  `.kitten-image` :

```css
.kitten-image {
  border: 5px dashed salmon;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 5px 5px 20px #ccc;
}
```

The properties `border` and `border-radius` were used to create the border seen in the image. However, you could have split the border property into `border-width`, `border-style`, and `border-color`. My solution is just using the [shorthand](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties "Shorthand CSS Properties") version instead.

The `cursor` property was used to change the mouse cursor from its default setting to the pointing finger.

Finally, I added the property `box-shadow` to produce the drop shadow behind the image.

Here's the before and after:

![kitten solution](http://udacity.github.io/fend/lessons/L3/problem-set/02-style-an-image/solution.gif)