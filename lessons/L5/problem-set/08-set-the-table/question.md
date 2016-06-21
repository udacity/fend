Tables are awesome for displaying information in _rows_ and _columns_, and it's time you built one!

For this quiz, you'll be building a table from a simple data set within the Udacity classroom. I'll be providing you with the column headings and data set, but it will be your job to create the table to display the information.

## Tables

Tables are used to create and handle tabular data. That's just a fancy way of saying tables are used when you need to put information into rows and columns. For example, if you need to display days on a calendar, the box score for a sporting event, or results to an experiment.

![box score example](http://udacity.github.io/fend/lessons/L5/problem-set/08-set-the-table/box-score-animation.gif)

_Box score from Major League Baseball game between the San Francisco Giants and Atlanta Braves on June 1, 2016._

Tables are fairly straightforward. Every `<table>` consists of a set of rows, `<tr>` , that each define a row of cells, `<td>` . Here's a basic example.

![basic example](http://udacity.github.io/fend/lessons/L5/problem-set/08-set-the-table/table-1.png)

```html
<table>
  <tr>
    <td>Variety</td>
    <td>Color</td>
  </tr>
  <tr>
    <td>Fuji</td>
    <td>Red blush, yellow stripes, green</td>
  </tr>
  <tr>
    <td>Gala</td>
    <td>Red-orange, yellow stripes</td>
  </tr>
  <tr>
    <td>Golden Delicious</td>
    <td>Yellow-green</td>
  </tr>
</table>
```

But you can do better than that! Tables also have other elements like `<th>` and `<tbody>` that you can use to make your data more semantic. To see a full list of table elements with descriptions check out [MDN's element reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element#Table_content).

Using the same example from above, I've swapped in a variety of tags to better describe the data.

![more semantic example](http://udacity.github.io/fend/lessons/L5/problem-set/08-set-the-table/table-2.png)

```html
<table>
  <thead>
    <tr>
      <th>Variety</th>
      <th>Color</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Fuji</td>
      <td>Red blush, yellow stripes, green</td>
    </tr>
    <tr>
      <td>Gala</td>
      <td>Red-orange, yellow stripes</td>
    </tr>
    <tr>
      <td>Golden Delicious</td>
      <td>Yellow-green</td>
    </tr>
  </tbody>
</table>
```

### Before You Get Started

Now before you get all excited about the cool things you can do with tables, you should be aware of when it's not appropriate to use tables. _Tables are not meant for layouts._ It can be tempting to want to use a table to position elements, but tables do have some limitations.

1. Tables are not very _semantic_, at least not for layouts.
    - Tables are great for describing tabular things like rows, columns, or headings, but not for describing the structure of a webpage. You can use more descriptive tags like `<header>` , `<nav>` , `<aside>` , or `<footer>` to describe the logical pieces of your webpage.
2. Using tables for layouts is bad for accessibility.
    - We haven't talked much about **accessibilty** yet, but this is _hugely_ important. Many users with physical impairments rely on [screen readers](https://en.wikipedia.org/wiki/Screen_reader) to consume content on the web. For tables, screen readers read from top-to-bottom then left-to-right. If your webpage is laid out using a table, then it forces the webpage to be represented by the table's structure. This isn't ideal because a table's structure is typically not the best way to communicate which pieces of your layout are more important than others. Plus, it's just lazy. In the next lesson, you'll see how you can layout your webpages using different positioning techniques. 
3. Using tables for layouts is bad for SEO.
    - For the same reasons mentioned in points 1 and 2, using tables for layouts can hurt your website's SEO. Crawlers, the programs search engines use to scan and analyze your website, try to understand what information on your website is the most important so that it can better surface content for its users. Again, when you use tables for layouts, this can get lost in translation because tables aren't very _semantic_ when it comes to describing layouts.

In summary, **do NOT use tables for layouts.**