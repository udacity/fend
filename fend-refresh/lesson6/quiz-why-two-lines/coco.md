Engineering projects are big, complicated endeavors. Subsystems work together to create larger systems. Components and connections create subsystems. Understanding the system as a whole involves recognizing how the many layers fit together. This may sound daunting but there's good news:

> ### Simple ideas form the basis of even the most complex system.

The layouts of real websites are no different - simple CSS properties combine to form complex layous.

Being able to reason about, isolate and work with individual aspects of any large system is critical for your career as a developer. For this quiz, I want you to practice breaking down a complex problem by fixing [this website](http://udacity.github.io/fend/fend-refresh/lesson6/quiz-relative-flow/). The HTML is below. Take a moment to read through the HTML and then predict the general layout of this site.

    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Relative Flow Quiz</title>
      <link href='https://fonts.googleapis.com/css?family=Source+Sans+Pro' rel='stylesheet' type='text/css'>
      <style>
        * {
          box-sizing: border-box;
          font-family: 'Source Sans Pro', sans-serif;
          font-weight: bold;
          font-size: 14pt;
        }
        .bordered {
          border: 2px solid #2e3d49;
        }
        .block-container {
          background-color: #dbe2e8;
          padding: 8px;
        }
        .inline-container {
          background-color: #DFDFD1;
        }
        .relative {
          position: relative;
          top: 50px;
        }
        .sibling {
          display: inline-block;
          background-color: #15C26B;
          width: 150px;
          height: 100px;
        }
        .child {
          background-color: #ffae0c;
        }
      </style>
    </head>
    <body>
      <div class="block-container">Parent<br>
        <div class="sibling bordered">Sibling</div>
        <div class="sibling relative bordered">Relative Sibling
          <div class="child bordered">Child</div>
          <div class="child bordered">Child</div>
        </div>
        <div class="sibling bordered">Sibling</div>
      </div>
      <span class="inline-container">
        Sibling to the parent
      </span>
    </body>
    </html>

It'd be reasonable to assume that the `.relative` div will end up 50 pixels lower than the two other `.sibling`s. However, that's not the case.

<<img start>>
What it looks like now.

Let me point out another oddity of the site the way it is now.

<<img pointing to the slight diff in heights between relative and other sibs>>

Why is there a slight difference here? [annotate?]

<<img end>>
This is how you probably thought the site should look.

This will be a two-part quiz. In both parts, you'll need to do some research and develop hypotheses.

### Part 1

The image below shows how I want you to make this site look. You'll use developer tools to fix it. To do so, you only need to add **one** line of CSS on the `.sibling` class. My advice is to think back to what you just learned about `text-align` and `vertical-align`.

I want you to download the site and work with it on your own machine. When you've fixed the site, you'll get a code that you can copy and paste into the box at the bottom of this page.

### Part 2

Making the site look right is only half of this challenge. The other half is uncovering the *cause* of the surprising layout. I want you to investigate the difference between the heights of the siblings. More on this after you finish part 1 by filling in the code below.

### Instructions

1. Download the site from the resources section.
2. Edit the site to make it look like the image above - *you only need to add one CSS property to* `.sibling`!
3. Copy the code from the Udacity Feedback extension into the box below.




In part 1, you used `vertical-align: top` to align the siblings with the top of the parent and fix the layout. While this fixes the problem, it doesn't explain *why* there is the small gap between the relative div and its siblings. So why is it there?

<<img pointing out height diff>>
Why???

This is a *crazy* problem and the answer isn't simple. I want you to do your best but don't get disheartened if you're stumped. It's okay if you just want to skip ahead to my walkthrough. I ran into this situation on accident when I was preparing part 1 of this quiz and it took me some time to uncover everything that's happening. Think of this as a bonus challenge.

Frankly, this is a *very* strange situation. But CSS has a lot of these, so you should get some experience debugging one now. Here's how I want you to tackle this problem.

### Hints

* Consider *the order* in which layout happens. When is the relative shift applied?
* Think back to baselines and inline elements. How do the baselines of the siblings align against the parent?

### Instructions

1. Prepare and do some background reading! No one remembers everything about CSS. We all refer to documentation, guides and references *constantly*.
  * Read this quick chapter on [Box Positioning in CSS from *Learn CSS Layout*](http://book.mixu.net/css/1-positioning.html), an amazing online book about the details of CSS by [Mikito Takada](http://mixu.net/). I specifically recommend the section on [inline formatting](http://book.mixu.net/css/1-positioning.html#normal-flow-inline-formatting).
2. Open the site on your own computer. (It's the same site as the last quiz).
3. Try things out! Test your ideas quickly with developer tools.
  * Make a hypothesis about an idea.
  * Test your idea.
  * Asses whether or not it worked.
  * If it didn't work, integrate what you learned into a new hypothesis and test a new idea!
4. When you think you know the answer, write it down! Compare what you think to my walkthrough on the next page.




// solution

As I said earlier, I came across this problem on accident. I'm presenting the solution in an order that's efficient and effective for your understanding, but I want you to know that this is the end product of a lot of experimentation. I spent quite a bit of time in developer tools playing with CSS properties, predicting what would happen before I made a change and then drawing conclusions after. I'm not alone in my approach. Here's a quote from Warren Ouyang, our lead front-end engineer, to whom I gave this problem. After he finished it, he said,

> I would love to say I just looked at the code and figured it out, but **I also did a bunch of playing around with it to understand it**. [emphasis mine]

Here we go!

---

Remember, the shift from `position: relative` happens *after* the normal flow finishes. Let's start with the normal flow. Ignore `position: relative` for now.

Unchecking `position: relative` gives you this:

<video width="100%" controls loop >
  <source src="https://s3.amazonaws.com/content.udacity-data.com/courses/fend/ps-css-debugging.mp4" type="video/mp4">
  Your browser does not support the video tag. <a href="https://s3.amazonaws.com/content.udacity-data.com/courses/fend/ps-css-debugging.mp4" target="_blank">Click here to see the animation.</a>
</video>

*Notice that the layout of two non-relative siblings stays the same!*

Here is your smoking gun. Look at how the text lines up. You've seen this before.

<<img from baseline showing text lined up w/baselines>>
Look at the text lining up!

The sibling is an inline box and the "Child" text inside it is its text. As you learned a few pages ago, text will line up with the baseline of a parent. The baseline of the parent is lowered by the extra text inside the relative sibling. As a result, the text of the other siblings is lowered.

Now, realize that the *text* lines up, not the whole inline block. Siblings have a defined height, which then extends below the text. The parent extends lower to fit all of the children. This leaves you with the result of the normal flow!

<<img of w/out relative>>
The result of the normal flow. Still no relative.

Now that the normal flow has been laid out, the relative shift is applied. It *just so happens* that the relative shift puts the relative div slightly higher than its siblings.

There's something curious about solving the last problem where you applied `vertical-align: top` to `.sibling`. You could have actually solved the problem by applying `vertical-align: top` to `.relative` too! `vertical-align: top` shifts the baseline of the relative element to the top, which means that the parent's baseline is back to the top. As a result, the two other siblings no longer get pushed up. Try it yourself and see what happens!

### Conclusion

A very valid response to this problem would be:

> This is infuriating! Why would anyone do layout this way!?

I'd argue that this is the correct response. Inline blocks are great for arranging the elements inside little widgets like buttons, but you should not rely on them for general layout. The fact that they carry properties of inline elements creates many opportunities for gotchas, much like what you just enountered.

There are much, much, *much* better solutions for page layout. In fact, you'll be working with one of the more popular options for layout, `float`, in the next lesson!




Weird things happening:
* vertical-align is happening to the *bottom* of the text in the child divs. That means that the "Sibling"s want to line up with "Child". This is a quirk of inline-block.
* there's a weird shift at first between the tops of all three siblings. It looks about a border's height. Honestly, no clue why that's happening.



* inline block
* baseline is set to the lowest level of text of any of the three siblings
* siblings respect the bottom of the baseline of their siblings
* siblings are laid out in the normal flow. the siblings respect the lowest "child" as the baseline, hence moving their baslines down
* setting position: relative; top: 50; just happens to shift the relative sibling near where its other siblings end up
* but if the relative sibling has vertical-align: top, its baseline is effectively the parents baseline
* hence the two siblings stay at the top
