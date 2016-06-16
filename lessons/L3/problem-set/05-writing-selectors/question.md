At this point, you should be familiar with the basic structure of a CSS statement. Every CSS statement is made up of a **selector** and a **declaration block**. The selector tells the browser what HTML we to style and the declaration block tells the browser what styles need to be applied to that HTML.

![css statement](http://udacity.github.io/fend/lessons/L3/problem-set/05-writing-selectors/css-statement.png)

_The basic structure of a CSS statement_

For this quiz, I want you to focus exclusively on the selector part of a CSS statement. To do this, I've created a webpage that is lacking style. The webpage already has ids and classes added to the HTML, but it's missing the right selectors to add the style.

```html
<div id="menu">
  <h1 class="item">Chicken Clay Pot</h1>
  <img src="img/clay-pot.jpg" alt="clay pot" class="picture">
  <p class="description">Crispy rice baked in clay pot topped with chicken and vegetables</p>
</div>
```

```css
/* missing id */ {
  text-align: center;
}
/* missing class */ {
  color: red;
}
/* missing class */ {
  border-radius: 5px;
}
/* missing class */ {
  font-style: italic;
}
```

It's your job to download the webpage and fill-in the missing selectors. If you do it right, your webpage should end up looking like this...

![writing selectors solution](http://udacity.github.io/fend/lessons/L3/problem-set/05-writing-selectors/clay-pot-solution.jpg)