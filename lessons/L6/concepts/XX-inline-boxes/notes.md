You know, wouldn't it be great if you could create an element that behaves like an inline element, but is sized like a block element? Well, you can!

## Inline-Block

Let me introduce you to **inline-block**! But first, to understand how inline-block works, it's probably best we review inline and block elements.

![block vs. inline vs. inline-block](http://udacity.github.io/fend/lessons/L6/concepts/XX-inline-boxes/inline-block.png)

### Inline vs. Block Elements

Inline elements can't have a set `height` or `width`, instead their height and width are determined by their content. Also, inline elements sit _inline_ with other elements. Basically, they allow other elements to be adjacent to their left and right. Finally, inline elements can have `padding` and `margin`, with the exception of top and bottom margin which they totally ignore.

On the other hand, you have block elements. Block elements have a set height and width, they take up as much width as possible; so elements can't sit beside them, and they allow both padding and margin.

So with that out of the way, how do inline-block elements work?

Inline-block elements combine the best of both worlds; although it does have it drawbacks, more on that in just a moment. They allow other elements to sit to their left and right, they accept top and bottom margin, and they can have a set height and width. What's not to love!

### Whitespace Weirdness

Inline-block isn't all fun and games, it does have some quirks. One quirk in particular is how inline-block treats whitespace. If you look at the example below, I've created an unordered list and used `inline-block` to display its list items.

```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```

![inline block list with whitespace](http://udacity.github.io/fend/lessons/L6/concepts/XX-inline-boxes/inline-block-list-2.png)

_Do you notice the whitespace in between each item?_

If you look at the list do you see the whitespace between each item? Where is that whitespace coming from? You might be suprised to find out that the whitespace is actaully created from the space between list items in your code!

![say what! meme](http://udacity.github.io/fend/lessons/L6/concepts/XX-inline-boxes/say-what-meme.png)

There are a number of ways to [fix this problem](http://dabblet.com/gist/2422174), but I recommended removing the space in your code. You can do this by removing the space entirely or adding comments in between each line item.

```html
<ul>
  <li>Item 1</li><!--
  --><li>Item 2</li><!--
  --><li>Item 3</li>
</ul>
```

![inline block list no whitespace](http://udacity.github.io/fend/lessons/L6/concepts/XX-inline-boxes/inline-block-list-1.png)

If you're willing to work through the quirkiness of inline-block, then it's a viable option for laying out elements.

---

I think that's enough of a break for now. Let's get back to the quizzes. When you're ready, click "Next".