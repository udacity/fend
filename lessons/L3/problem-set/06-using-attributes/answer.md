Here's my solution:

```html
<!DOCTYPE html>
<html>
<head>
  <!-- ... -->
</head>
<body>
  <div id="to-do-list">
    <h1 class="title">My To-Do List</h1>
    <h2 class="title underline">Chores</h2>
    <ul class="list">
      <li>load the diswasher</li>
      <li>vacuum living room</li>
      <li>take out garbage</li>
      <li class="finished">sweep the garage</li>
    </ul>
    <h2 class="title underline">Homework</h2>
    <ul class="list">
      <li class="finished">brainstorm ideas for Science project</li>
      <li class="finished">finish Calculus 2 problems</li>
      <li>study for Programming midterm :P</li>
      <li>finish Project 0 on Udacity FEND</li>
      <li class="finished">find sources for Biology research paper</li>
      <li>read first two chapters of The Art of War</li>
    </ul>
    <h2 class="title underline">Party</h2>
    <ul class="list">
      <li class="finished">send out invitations</li>
      <li>reserve party room at restaurant</li>
      <li>order the cake!</li>
    </ul>
  </div>
</body>
</html>
```

I started first by adding the id `to-do-list`. Because ids are used to select **unique** elements, there was really only two places where it could added: `<body>` or `<div>`. Using a little trial and error, I was able to determine that `to-do-list` should be added to the `<div>`. After adding `<div id="to-do-list">`, my page looked like the image below.

![to-do list part 1](http://udacity.github.io/fend/lessons/L3/problem-set/06-using-attributes/to-do-list-1.jpg)

Next, I turned my attention to headings. In the final solution, the headings are white and underlined; except for the `<h1>` that reads "My To-Do List". Conveniently, the CSS had classes `title` and `underline` that could be used to create both of those styles.

To add to styles, I simply added the class `title` to each heading and added the class `underline` to only the `<h2>` tags, since the `<h1>` tag didn't need it.

```html
<div id="to-do-list">
  <h1 class="title">My To-Do List</h1>
  <h2 class="title underline">Chores</h2>
  <!-- ... -->
  <h2 class="title underline">Homework</h2>
  <!-- ... -->
  <h2 class="title underline">Party</h2>
  <!-- ... -->
</div>
```

I want you to pay attention to how the `<h2>` tags have both the `title` and `underline` class. Remember, you can add as many as classes as you want to your HTML, and you can reuse them. This is why it is recommended and preferred to use classes over ids when adding style to your websites.

Also, notice how the names of the classes are reflective of their purpose. It's really important that you give ids and classes **meaningful names**. Otherwise, it will make it extremely difficult for you or others to review your code; especially after a long period of time.

After this, my solution looked like the following.

![to-do list part 2](http://udacity.github.io/fend/lessons/L3/problem-set/06-using-attributes/to-do-list-2.jpg)

At this point, the only thing left to-do (no pun intended) was to mark out some of the tasks left on the to-do list. This part was fairly simple because some of the tasks had already been marked out using the class `finished`. So, I just leveraged the same class to mark out the tasks "brainstorm ideas for Science project", "finish Calculus 2 problems", and "send out invitations".

Here's the before and after:

![to-do list solution](http://udacity.github.io/fend/lessons/L3/problem-set/06-using-attributes/solution.gif)