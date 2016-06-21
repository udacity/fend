In this quiz, you'll be [aligning text](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align) to make [this site](http://udacity.github.io/fend/lessons/L5/problem-set/04-text-align-with-cheetahs/index.html) look [like this](http://udacity.github.io/fend/lessons/L5/problem-set/04-text-align-with-cheetahs/final.jpg). Notice the changes to the text alignment.

You'll also get to see the `float` [property](https://developer.mozilla.org/en-US/docs/Web/CSS/float) in action. I know that doesn't sound incredibly exciting, so I've included a cute image of a baby cheetah in the quiz and some really great information about `text-align` to make up for it!

![baby cheetah picture](http://udacity.github.io/fend/lessons/L5/problem-set/04-text-align-with-cheetahs/baby-cheetah.jpg)

_Aww_ 😍 _! Look at that baby cheetah!_

## Text-Align

You've probably aligned text before in programs like Microsoft Word or Google Docs, or used tools like a WYSIWYG editor. On the web, [aligning text](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align) works about the same and includes the same values for alignment that you would come to expect: left, right, center, and justified (text spreads out to take up the full width of the container).

![wysiwyg editor picture](http://udacity.github.io/fend/lessons/L5/problem-set/04-text-align-with-cheetahs/wysiwyg-editor.png)

_WYSIWYG editor from [TinyMCE](https://www.tinymce.com/). WYSIWYG stands for "What You See Is What You Get."_

Essentially, the `text-align` property controls how content inside a block element is horizontally aligned. This mostly includes text, but can apply to other elements like images that use the property `inline-block` (we'll cover `inline-block` later in this problem set).

### Direction

Fact: not all languages are read from left-to-right. Languages like Arabic and Hebrew read from right-to-left. The point is that the order, or **direction**, that text is read varies depending on the language. And on the web, there are some clever ways to address this and leverage it when using the `text-align` property.

By default, the direction of text is set to left-to-right. This shouldn't come as a surprise because the majority of world languages read from left-to-right... but what if you want to the change the direction? Also, what do you do if you want to use `text-align` for text that reads from right-to-left? Well, you have a couple of options.

First, you can set an entire HTML document's direction by passing the attribute `dir` to the HTML. For example,

```html
<!DOCTYPE html>
<!-- sets direction to right-to-left and language to Arabic -->
<html dir="rtl" lang="ar">
<head>
  <!-- ... -->
</head>
<!-- ... -->
```

Alternatively, you can use the `direction` CSS property to specify `ltr` or `rtl`.

### Start, End, and Match-Parent

Second, the `text-align` property also supports three other values: `start`, `end`, and `match-parent`. Unlike `left` and `right`, these values leverage direction to help with language support.

- `start`: works the same as `left` if direction is left-to-right and `right` if direction is right-to-left
- `end`: works the same as `right` if direction is left-to-right and `left` if direction is right-to-left
- `match-parent`: works the same as inherit, but value is determined according to the parent's direction

---

### Image Credit

- 'Baby Cheetah' by [Frontierofficial](https://www.flickr.com/photos/frontierofficial/) via Flickr, Creative Commons.