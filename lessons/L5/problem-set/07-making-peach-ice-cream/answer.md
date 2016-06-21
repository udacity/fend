I'm getting hungry!

Anyway, your answer should have looked like this...

![ice cream solution](http://udacity.github.io/fend/lessons/L5/problem-set/07-making-peach-ice-cream/final.jpg)

If you look at the final result, you can tell that with just a few small tweaks to the CSS, the recipe has started to take shape.

By adjusting the page to use `box-sizing: border-box` , the recipe summary and image both align at the top of the page. However, it's not just `border-box` alone that is helping us achieve this affect, in fact, both the recipe summary and image have a `width` of 50% and use a property called `float` in order to line up side-by-side like seen in solution. In the next lesson, we'll cover `float` and other positioning properties that will allow you to take full control of the layouts on your webpages.

Also, the adjustment to the recipe container's `width`, combined with `margin: 0 auto` , centered the entire recipe in the middle of the "page".

```css
.recipe {
  /* ... */
  width: 800px;
  margin: 0 auto;
}
```

The next three adjustments focused on small aesthetic changes by adding spacing above and below the section titles, as well as using `<em>` to create an _emphasis_ on the recipe's author (Hey, that's me 😎 !). Pay attention to the changes for `padding` and `margin` on the section titles; specifically the `padding`. It was used to add space between the _content_ (the actual title itself) and the `border` that was being drawn underneath it.

![padding bottom animation](http://udacity.github.io/fend/lessons/L5/problem-set/07-making-peach-ice-cream/padding-bottom-ice-cream.gif)

_The padding is added below the content, but between the border._

Finally, the last adjustment was made to the recipe notes. By changing these to `display: inline` , the `width` of the notes were constrained to the content. Therefore, the notes lined up next to each other, rather than one on top of the other.

![recipe notes image](http://udacity.github.io/fend/lessons/L5/problem-set/07-making-peach-ice-cream/recipe-notes.png)

_Can you guess what each icon represents in the recipe notes?_

---

**Note: If you try this recipe, tell us about it! Share pictures [in the forums](https://discussions.udacity.com/t/making-peach-ice-cream-let-us-know/173298) and let us know how it matches up with other ice creams you've had. Sidenote, this recipe is all about the peaches. The better the peaches, the better the ice cream!**