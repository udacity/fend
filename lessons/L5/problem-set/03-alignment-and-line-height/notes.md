If you recall back from [earlier in this lesson](https://classroom.udacity.com/nanodegrees/nd001/parts/0011345404/modules/8efdb4f7-48e4-4bdc-8e67-d242399618b1/lessons/671da3f2-d72f-401f-a882-bdf6f026746b/concepts/6ffb0b7d-b60b-44b6-bf2d-17b94ae8ed22), you learned that inline elements create **line boxes**. If an inline element exceeds the space available inside its container, it will create multiple lines boxes.

![example of line boxes from previous lesson](http://udacity.github.io/fend/lessons/L5/problem-set/03-alignment-and-line-height/wrapping-inline.png)

You also learned that inline elements, and line boxes, have some interesting quirks. For example, you cannot set the `height` or `width` of an inline element, which means you cannot set the `height` or `width` of a line box either. Another quirk is when an inline element creates multiple line boxes, left/right `border` and `margin` are added at the beginning of the first line box and end of the last line box.

![margin and border quirk with inline elements](http://udacity.github.io/fend/lessons/L5/problem-set/03-alignment-and-line-height/margin-border-quirk.png)

So with that said, what other properties can you use to manipulate line boxes?

For the next three quizzes, you'll be experimenting with the three new properties that control the horizontal and vertical alignment of line boxes, as well as their height: `text-align` , `vertical-align` , and `line-height`.

When you're ready to get started, click "Next".