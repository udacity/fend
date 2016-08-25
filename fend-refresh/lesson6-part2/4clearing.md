Remember, floats are outside the normal flow. Hence, the parent doesn't have a height because there are no normal flow elements inside it!

There's are a few way around this behavior. To start with, here's how you can force **siblings** (right?) to respect the boundaries of the float: elements with a block formatting context (remember those from last lesson!) may not overlap floats. If you force elements to establish a block formatting context, they'll respect the boundaries of the float.

Let me show you how this works. In this example, I'm using the `overflow` property to set a block formatting context (any value other than `visible`, including `auto` forces an element to take on a block formatting context).

<<html of example>>

<<img of example>>

You can take this a step further with a property called `clear`.