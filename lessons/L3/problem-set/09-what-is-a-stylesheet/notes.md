In the next quiz, you'll be working with a stylesheet. So what is a stylesheet and why is it important? Well, consider the following question...

_What if you wanted to use the same CSS on more than one webpage?_

You could just copy all of your CSS from one file and paste it into another, but that seems like a lot of extra work and doesn't scale very well. What if you decide to make changes later? You'd have to change every copy of the CSS!

![there's got to be a better way...](http://udacity.github.io/fend/lessons/L3/problem-set/09-what-is-a-stylesheet/better-way-meme.jpg)

While the process described above works, it's not recommended. Instead, the preferred method is to write your CSS in a file called a **stylesheet** and then link to that file in your HTML.

## Stylesheets

A stylesheet is a file containing the code that describes how elements on your webpage should be displayed.

![example stylesheet](http://udacity.github.io/fend/lessons/L3/problem-set/09-what-is-a-stylesheet/stylesheet.jpg)

This is no different than what you've been doing before, except the CSS lives in a different file... and you don't have to use the `<style>` tags anymore. To create a stylesheet, simply add a new file to your project, write some CSS, and save it as `name-of-stylesheet.css`.

### How to Link to a Stylesheet

Before your webpage can use the stylesheet, you need to link to it. To do this, you'll need to create a `<link>` to your stylesheet in your HTML. To create a link, simply type the following inside the `<head>` of your HTML.

```html
<link href="path-to-stylesheet/stylesheet.css" rel="stylesheet">
```

The `href` attribute specifies the **path** to the linked resource (you can link to other resources besides stylesheets, more on this later) and the `rel` attribute names the **relationship** between the resource and your document. In this case, the relationship is a stylesheet. When you're done, it will look something like this...

```html
<head>
  <title>My Webpage</title>
  <!-- ... -->
  <link href="path-to-stylesheet/stylesheet.css" rel="stylesheet">
  <!-- ... -->
</head>
```