Here's what you should have seen when you started the quiz.

![start image](http://udacity.github.io/fend/lessons/L5/problem-set/02-keep-it-boxy/boxy-1.png)

One thing you might not have noticed immediately is that the container is actually 510 pixels wide even though it is clearly set to 500 pixels in the CSS...

```css
.container {
  width: 500px;
  border: 5px solid #2E3D49;
  /* ... */
}
```

The reason for this is because our webpage is using `box-sizing: content-box`, so the `border` is also being included in the width calculation of the container. But that's not a huge deal, right? You could simply set the `width` of the container to be 490 pixels, and then after you add the additional `border`, the container would actually measure to be 500 pixels wide. Ah ha, problem solved!

### Well... not quite...

The next issue, the one you probably did notice (if you completed the tests in order), is as you set the `width` and `padding` of the interior boxes, the measurements do not match up to how you would logically think of them being displayed.

![before border-box image](http://udacity.github.io/fend/lessons/L5/problem-set/02-keep-it-boxy/boxy-2.png)

For example, on Box 3 you were asked to set the following...

```css
.child-3 {
  /* ... */
  width: 80%;
  padding: 20%;
}
```

It would make sense for this CSS to display Box 3 as taking up 80% of the `width` within the container, while 20% would be leftover for `padding`. Unfortunately, that's not what you see. Why? Again, `content-box` is really misleading us by not including `padding` or `border` as part of the element's width calculation.

### The Final Answer

If you made it far enough to complete the quiz, then you will have swapped out `content-box` with the preferred `border-box` and seen the following result. Isn't it an incredible difference! This is much better way of handling `box-sizing` as it really communicates what is desrcibed in the CSS.

![finish image](http://udacity.github.io/fend/lessons/L5/problem-set/02-keep-it-boxy/boxy-3.png)