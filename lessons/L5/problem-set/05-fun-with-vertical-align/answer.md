Here's each answer one-by-one:

### Pythagorean Theorem

In order to fix the formula for the Pythagorean Theorem, you needed to add the following line of CSS to superscript the exponents.

```css
.exponent {
  vertical-align: super;
}
```

This fixes the equation to read `a² + b² = c²`. Next time you need to calculate the side of a right triangle, you'll be ready!

### Chemical Equation for Ammonia

Ammonia is a chemical compound that is commonly used in household cleaners, and for this problem you needed to balance its chemical equation... well sort of, but not in the traditional sense.

![household cleaners](http://udacity.github.io/fend/lessons/L5/problem-set/05-fun-with-vertical-align/spray-bottles.jpg)

Anyway, to fix this equation required adding this CSS to the class `.subscript` .

```css
.subscript {
  vertical-align: sub;
}
```

### Company Profile

Hey, who's that? That's just me playing slow-pitch softball 😎 !

![james playing slow-pitch softball](http://udacity.github.io/fend/lessons/L5/problem-set/05-fun-with-vertical-align/james-answer.png)

To pass this test, you needed to find the `<div>` with the `.profile-details` class and add `vertical-align: top` . But aren't `<div>`s block elements? Yes, but this `<div>` was displayed as `inline-block` which allowed it to be vertically aligned next to the image.

### Pangram with Images

If you're wondering what a **pangram** is, it's a sentence or verse that contains all the letters of the alphabet. A common pangram example is _"The quick brown fox jumps over the lazy dog"_.

![pangram example](http://udacity.github.io/fend/lessons/L5/problem-set/05-fun-with-vertical-align/pangram-answer.png)

To fix this example required adding `vertical-align: middle` to both the fox and dog images. This might have seemed confusing at first, but really you're adjusting where the image is aligned relative to the text.

---

- 'Household Cleaners' by [PublicDomainPictures](https://pixabay.com/en/users/PublicDomainPictures-14/) via Pixabay, Creative Commons.