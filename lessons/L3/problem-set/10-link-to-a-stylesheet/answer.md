Here's my complete solution:

```html
<!DOCTYPE html>
<html>
<head>
  <title>Link to a Stylesheet Quiz</title>
  <!-- ... -->
  <link href="css/styles.css" rel="stylesheet">
</head>
<body>
  <div class="container">
    <div class="portfolio">
      <h1>My Portfolio</h1>
      <div class="item">
        <img src="../img/out-cold.png" alt="out cold logo" width="300">
        <span>This specific design features a 3D floating mountain above a weathered, rugged font to insinuate a winter outdoor theme. This logo would be a perfect fit for an outdoor product company or ski resort.</span>
      </div>
      <div class="item">
        <img src="../img/retro-beach.png" alt="retro beach logo" width="300">
        <span>This specific design features a beach-themed fading sunset with palm trees. The fading vertical bars in the sun resemble warmth as it fades away into the sunset.</span>
      </div>
    </div>
  </div>
</body>
</html>
```

To link the **stylesheet**, I added the missing **link** to the `<head>` of the HTML.

```html
<head>
  <!-- ... -->
  <link href="css/styles.css" rel="stylesheet">
  <!-- ... -->
</head>
```

The `href` attribute is the **path** to the stylsheet and the `rel` attribute describes the **relationship** of the link as a stylesheet.

This is how the answer looks in the browser:

![link to a stylesheet solution](http://udacity.github.io/fend/lessons/L3/problem-set/10-link-to-a-stylesheet/link-to-a-stylesheet.jpg)