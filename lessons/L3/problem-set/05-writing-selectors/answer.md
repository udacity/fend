Here's the complete solution:

```html
<!DOCTYPE html>
<html>
<head>
  <title>Writing Selectors Quiz</title>
  <style>
    #menu {
      text-align: center;
    }
    .item {
      color: red;
    }
    .picture {
      border-radius: 5px;
    }
    .description {
      font-style: italic;
    }
  </style>
</head>
<body>
  <div id="menu">
    <h1 class="item">Chicken Clay Pot</h1>
    <img src="img/clay-pot.jpg" alt="clay pot" class="picture">
    <p class="description">Crispy rice baked in clay pot topped with chicken and vegetables</p>
  </div>
</body>
</html>
```

If you analyze the HTML, you should be able to tell that this webpage is a menu (or the beginnings of one 😎). The div element represents the menu, and inside the menu you see an item, picture, and description.

    <div id="menu">
        <h1 class="item">Chicken Clay Pot</h1>
        <img src="img/clay-pot.jpg" alt="clay pot" class="picture">
        <p class="description">Crispy rice baked in clay pot topped with chicken and vegetables</p>
    </div>

To style this, I added the missing selectors to the CSS.

```css
#menu {
  text-align: center;
}
.item {
  color: red;
}
.picture {
  border-radius: 5px;
}
.description {
  font-style: italic;
}
```

Notice how the first selector uses a `#` sign, but the other three selectors use a `.`

That's because menu is an **id attribute** and item, picture, and description are **class attributes**.

As you continue through this nanodegree, remember that id selectors always begin with the pound/hashtag symbol followed by the id name and class selectors always begin with the dot/period symbol followed by the class name.

This is how the answer looks in the browser:

![css selectors solution](http://udacity.github.io/fend/lessons/L3/problem-set/05-writing-selectors/clay-pot-solution-browser.png)