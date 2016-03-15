I've got a few possible solutions below. Before I show them to you, I want to point something out: **indentation**.

Indentation is a bit of an art and a science in HTML (and programming in general). Careful indentation illuminates the structure of code and makes code easier to read, write and debug. We expect that you'll be purposeful about your indentation too.

Pay attention to the indentation in my solutions and then read my discussion afterward.

### Option 1 Solution

![solution with paragraph and image](//lh3.googleusercontent.com/VzaTeG7CjPZwl6QDMbRN0m9GhSMdAbD6r6BwzlWUt7MyGaKt97_5wR3GpcE9u3d0HUnBNJQuGlsDA8vZ4gQ=s600)

This is the simplest way to add a caption. Notice that my image has an `alt` attribute.

### Option 2 Solution

![solution with a figure](//lh3.googleusercontent.com/aPlda_80cShrns2pYRZnxr0o6aF0jeb7KHPY3ugDZ4g_8vMRFrk3ckjppnI1GcufpNmFuy_qqAsGflUelw=s600)

In this example, I'm wrapping the image and caption in a `figure` element. Notice that the caption has a special element: a `figcaption`.

The result actually looks slightly different (namely, the spacing around the element) but this is probably a *better* way of making a caption. While an image and a paragraph could be next to each other on a website for *any* reason, the names `figure` and `figcaption` tell you *why* this HTML is here. Academic writings refer to pairs of images and captions as "figures," and use phrases like "Examine figure 1..." or "In figure 2, you can see...". Thus, a `figure` mimics an academic figure.

*******Example of academic figure!!!*******

`figure` is an example of something called a **semantic** element, which is an element named after its purpose.

Alternatively, you could have wrapped the content in the `figcaption` with a paragraph element, like so:

![solution with a figure and paragraph](//lh3.googleusercontent.com/-CeEJ5YUp-QDCkTXvm1lgUKdmlPC6DVgVFIaQ0xMMoxZRQtamFc6-GzfGepJWpIcHH0kH0ZINctRhWGUpQ=s600)

The end result has slightly more spacing around the caption.

**Indentation Discussion**

I usually indent child elements inside parents. Notice that the `img` and `figcaption` are both indented inside the `figure` in the solution to option 2. I **don't** indent when a child element is part of a line or sentence. For instance, I don't indent links because their content is read as part of a sentence.

I also indented the text content inside the `p` in option 1 and the `figcaption` in option 2. I did this because the text looks like a big block in my code editor and it's easier to read if it is on its own line.
