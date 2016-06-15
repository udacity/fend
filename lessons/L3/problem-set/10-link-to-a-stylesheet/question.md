For your last quiz, you'll be linking a stylesheet to a familiar webpage from this lesson.

![link to a stylesheet quiz](http://udacity.github.io/fend/lessons/L3/problem-set/10-link-to-a-stylesheet/link-to-a-stylesheet-before.jpg)

_Do you remember this webpage from the very first video in this lesson?_

I've already provided you with the HTML and CSS in the downloadables section.  It's your job to download the files and connect the **stylesheet** to the webpage.

```html
<html>
<head>
  <title>Link to a Stylesheet Quiz</title>
  <!-- add link here -->
</head>
<body>
  <!-- ... -->
</body>
</html>
```

In the download, `styles.css` (the stylesheet) is conveinetly tucked away in a folder called `css`. So, you will need to draw upon your knowledge of [paths](https://classroom.udacity.com/nanodegrees/nd001/parts/0011345402/modules/735989977175460/lessons/7222405183/concepts/73276037150923) in order to correctly link the stylesheet to the HTML. If you've done everything correctly, your **link** should be formatted like...

```html
<link href="path-to-stylesheet/stylesheet.css" rel="stylesheet">
```