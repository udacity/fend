Here's my solution.

For brevity, I used ellipses (`...`) to denote the areas of the solution that didn't change.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- ... -->
    <title>Div Soup Clean Up</title>
    <!-- ... -->
  </head>
  <body>
    <header class="navbar-static-top">
      <section class="container">
          <a class="navbar-brand" href="#">Company Name</a>
          <nav>
            <!-- ... -->
          </nav>
      </section>
    </header>
    <section class="container hero">
      <!-- ... -->
      <div class="hero-text">
        <h1 class="headline">The Future is Here!</h1>
        <!-- ... -->
        <button class="btn btn-lg btn-primary" href="#">Sign up today</button>
      </div>
    </section>
    <section class="container">
      <article class="row">
        <!-- ... -->
      </article>
      <hr class="divider">
      <article class="row">
        <!-- ... -->
      </article>
      <hr class="divider">
      <article class="row">
        <!-- ... -->
      </article>
      <hr class="divider">
      <footer>
        <!-- ... -->
      </footer>
    </section>
  </body>
</html>
```

When completing the quiz, you shouldn't have noticed anything visually change; however, by cleaning up some of the `<div>`s you should have recognized how much easier it is to read the HTML. 

As you are building websites, try to avoid div soup situations. Also, remember that semantic tags aren't your only tool in the battle for better HTML. You can use `id` and `class` attributes too!